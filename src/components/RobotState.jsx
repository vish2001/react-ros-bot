import React, { Component } from 'react';
import { Row,Col,Container,Button } from "react-bootstrap";
import  Config from "../scripts/config";
import positionImage from '../traffic-light.png';
import positionImage2 from '../stop.png';
import positionImage3 from '../41+gelS+89L.jpg';

import * as Three from "three";
class RobotState extends Component{
    state = {
        ros:null,
        stop_count:0,
        traffic_count:0,
        duckie_count:0
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
    // componentDidMount(){
    //     this.getRobotState();
    // }
    // getRobotState() {
    // var count_subscriber = new window.ROSLIB.Topic({
    //     ros:this.state.ros,
    //     name: "/db4/counts/x1",
    //     messageType:"std_msgs/Int32"
    // });
    // count_Subscriber.subscribe((message) => {
    //     // Update state.x with the received message data
    //     this.state.stop_count(message.data);
    // });
    // }

    render(){
        return(
            <div>
               <Row>
                   <Col>
                    <h4 className='mt-4'>Object counts:-</h4>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={positionImage} alt="Position" width="100" height="100" style={{ marginRight: '10px' }}/>
                                <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p className='mt-0' style={{ marginLeft: '10px' }}> {this.state.stop_count}</p>
                                </div>
                           </div>
                   </Col>
               </Row>
               <Row>
                   <Col>
                    <p></p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={positionImage2} alt="Position" width="100" height="100" style={{ marginRight: '10px' }}/>
                            <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                            <p className='mt-0' style={{ marginLeft: '10px' }}> {this.state.x}</p>
                            </div>
                        </div>
                   </Col>
               </Row>
               <Row>
                   <Col>
                    <p></p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={positionImage3} alt="Position" width="100" height="100" style={{ marginRight: '10px' }}/>
                            <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                            <p className='mt-0' style={{ marginLeft: '10px' }}> {this.state.x}</p>
                            </div>
                        </div>
                   </Col>
               </Row>
            </div>
        );
    }
}
export default RobotState;