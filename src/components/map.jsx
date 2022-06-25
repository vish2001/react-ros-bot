import React, { Component } from 'react';
// import  Config from "../scripts/config";

class Map extends Component{
    init() {
        var ros = new window.ROSLIB.Ros({
        url : 'ws://localhost:9090'
        });
        var viewer = new window.ROS2D.Viewer({ 
          divID : 'turtle_ws/src/turtlebot3_simulations/turtlebot3_gazebo/map',
          width : 400,
          height : 400
        });
        var gridClient = new window.ROS2D.OccupancyGridClient({
        ros : ros,
        rootObject : viewer.scene,
        continuous: true
        });
        gridClient.on('change', function(){
          viewer.scaleToDimensions(gridClient.currentGrid.width, gridClient.currentGrid.height);
          viewer.shift(gridClient.currentGrid.pose.position.x, gridClient.currentGrid.pose.position.y);
        });
      }
    render() { 
        
        return (
            
            <div id="map" >               
            </div>
            
        )
      
      
    }

};
export default Map;