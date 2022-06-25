import React, { Component } from 'react';
import { Row,Col,Container,Button } from "react-bootstrap";
import  Config from "../scripts/config";
import * as Three from "three";
class RobotState extends Component{
    state = {
        ros:null,
        x:0,
        y:0,
        orientation:0,
        linear_velocity:0,
        angular_velocity:0
    };
    constructor(){
        super(); 
        this.init_connection();
    }
    init_connection(){
        this.state.ros = new window.ROSLIB.Ros();//add window keyword as javascript library added in index.html
        console.log(this.state.ros);
        this.state.ros.on("connection",()=>{
            console.log("Connection established");
            this.setState({Connected:true});
        });
        this.state.ros.on("close",()=>{
            console.log("connection is closed");
            this.setState({Connected:false});
            setTimeout(()=>{
            try{
                this.state.ros.connect("ws://"+Config.ROSBRIDGE_SERVER_IP+":"+Config.ROSBRIDGE_SERVER_PORT+"");
            }catch(error){console.log("connection problem")}
            },Config.RECONNECTION_TIMER);
        });
        try{
            this.state.ros.connect("ws://"+Config.ROSBRIDGE_SERVER_IP+":"+Config.ROSBRIDGE_SERVER_PORT+"");
        }catch(error){
            console.log("connection problem")
        }
        
    }
    componentDidMount(){
        this.getRobotState();
    }
    getRobotState() {
    var pose_subscriber = new window.ROSLIB.Topic({
        ros:this.state.ros,
        name: "/amcl_pose",
        messageType:"geometry_msgs/PoseWithCovarianceStamped"
    });
     pose_subscriber.subscribe((message) => {
         this.setState({x: message.pose.pose.position.x.toFixed(2)});
         this.setState({y: message.pose.pose.position.y.toFixed(2)});
         this.setState({orientation: this.getOrientationFromQuaternion(message.pose.pose.orientation).toFixed(2)
        });
     });
     var velocity_subscriber = new window.ROSLIB.Topic({
         ros:this.state.ros,
         name:"/odom",
         messageType:"nav_msgs/Odometry"
     });
     velocity_subscriber.subscribe((message)=>{
        this.setState({linear_velocity:message.twist.twist.linear.x.toFixed(2)});
        this.setState({angular_velocity:message.twist.twist.angular.z.toFixed(2)});
     });
    }
    getOrientationFromQuaternion(quaternion){
        var q = new Three.Quaternion(quaternion.x,
            quaternion.y,
            quaternion.z,
            quaternion.w
            );
        var RPY = new Three.Euler().setFromQuaternion(q);
        return RPY["_z"]*(180/Math.PI)//yaw
    }

    render(){
        return(
            <div>
               <Row>
                   <Col>
                    <h4 className='mt-4'>Position</h4>
                    <p className='mt-0'>x: {this.state.x}</p>
                    <p className='mt-0'>y: {this.state.y}</p>
                    <p className='mt-0'>orientation: {this.state.orientation}</p>
                   </Col>
               </Row>
               <Row>
                   <Col>
                    <h4 className='mt-4'>Velocities</h4>
                    <p className='mt-0'>linear velocity: {this.state.linear_velocity}</p>
                    <p className='mt-0'>angular velocity: {this.state.angular_velocity}</p>
                   </Col>
               </Row>
            </div>
        );
    }
}
export default RobotState;