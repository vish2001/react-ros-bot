import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component';
import  Config from "../scripts/config";
class Teleop extends Component {
    state = {
        Connected: false,
        ros:null
    };
    constructor(){
        super(); 
        this.init_connection();
        this.handleMove = this.handleMove.bind(this)//to use this inside the handlemove function.
        this.handleStop = this.handleStop.bind(this)
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
    handleMove(event){
        console.log("move")
        //Create ROS publisher on the topic cmd_vel
        var cmd_vel = new window.ROSLIB.Topic({
          ros:this.state.ros,
          name:  Config.CMD_VEL_TOPIC,
          messageType:"geometry_msgs/Twist"
        })
        //we need to create a twist message to be published to rosbridge
        var twist = new window.ROSLIB.Message({
            linear:{
                x: event.y/100,
                y: 0.0,
                z: 0.0,
            },
            angular:{
                x: 0.0,
                y: 0.0,
                z: -event.x/100,
                },
            });
        //we need to publish the message on the cmd_vel topic
        cmd_vel.publish(twist)
    }
    handleStop(event){
        console.log("stop")
        var cmd_vel = new window.ROSLIB.Topic({
            ros:this.state.ros,
            name:  Config.CMD_VEL_TOPIC,
            messageType:"geometry_msgs/Twist"
          })
          //we need to create a twist message to be published to rosbridge
          var twist = new window.ROSLIB.Message({
              linear:{
                  x: 0,
                  y: 0.0,
                  z: 0.0,
              },
              angular:{
                  x: 0.0,
                  y: 0.0,
                  z: 0,
                  },
              });
          //we need to publish the message on the cmd_vel topic
          cmd_vel.publish(twist)
    }
    render() { 
        return (
        <div align="center">
            <h2>Teleoperation
            </h2>
            <br/>
            <br/>
            <Joystick 
                size={100} 
                sticky={false} 
                baseColor= "#d5d5d5"
                stickColor="#a19f9e" 
                move={this.handleMove} 
                stop={this.handleStop}></Joystick>
        </div>);
    }
} ;
export default Teleop;