import React, { Component } from 'react';
import Alert from "react-bootstrap/Alert";
import  Config from "../scripts/config";
class Connection extends Component {
    state = { 
        Connected: false,
        ros: null
     };
     constructor(){
         super(); 
         this.init_connection();
     }
    init_connection(){
        this.state.ros = new window.ROSLIB.Ros();//add window keyword as javascript library added in inex.html
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
    render() { 
        return (
            <div>
                <Alert className="text-center m-3" variant = {this.state.Connected?"success":"danger"}>
                    {this.state.Connected? "Robot Connected":"Robot disconnected"}
                </Alert>
            </div>
        );
    }
}
 
export default Connection;