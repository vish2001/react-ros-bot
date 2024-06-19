import React, { Component } from 'react';
import Config from "../scripts/config";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            ros: null,
            Connected: false
        };
    }

    componentDidMount() {
        this.init_connection();
    }

    init_connection() {
        this.setState({ ros: new window.ROSLIB.Ros() }, () => {
            this.state.ros.on("connection", () => {
                console.log("Connection established");
                this.setState({ Connected: true });
                this.subscribeToTopic();
            });

            this.state.ros.on("close", () => {
                console.log("Connection is closed");
                this.setState({ Connected: false });
                setTimeout(() => {
                    try {
                        this.state.ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
                    } catch (error) {
                        console.log("connection problem", error);
                    }
                }, Config.RECONNECTION_TIMER);
            });

            try {
                this.state.ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
            } catch (error) {
                console.log("connection problem", error);
            }
        });
    }

    subscribeToTopic() {
        const topic = new window.ROSLIB.Topic({
            ros: this.state.ros,
            //name: '/db4/camera_node/image/compressed',
            name: '/db4/object_detection_node/image/compressed',
            messageType: 'sensor_msgs/CompressedImage'
        });

        topic.subscribe((message) => {
            const imageUrl = 'data:image/jpeg;base64,' + message.data;
            this.setState({ imageUrl });
        });
    }

    render() {
      return (
          <div id="map">
              {this.state.imageUrl && (
                  <img
                      src={this.state.imageUrl}
                      alt="ROS Video Feed"
                      width="400"
                      height="400"
                  />
              )}
          </div>
      );
  }
}

export default Feed;
