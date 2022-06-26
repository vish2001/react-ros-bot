(this["webpackJsonpreact-ros-robot"]=this["webpackJsonpreact-ros-robot"]||[]).push([[0],{61:function(e,t,n){e.exports=n(78)},66:function(e,t,n){},67:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(26),r=n.n(c),l=(n(66),n(67),n(1)),s=n(2),i=n(3),u=n(4),m=n(80),E=n(83),h=n(84),R=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(E.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},o.a.createElement(E.a.Brand,{href:"#home"},"React-ros-robot"),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(h.a,{className:"me-auto"},o.a.createElement(h.a.Link,{href:"/"},"Home"),o.a.createElement(h.a.Link,{href:"/About"},"About")))))}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("p",{className:"text-center"},"Vishy lab \xa92021 "))}}]),n}(a.Component),O=n(59),b=n(10),p=n(81),v=n(82),y=n(57),f={ROSBRIDGE_SERVER_IP:"192.168.29.131",ROSBRIDGE_SERVER_PORT:"9090",RECONNECTION_TIMER:3e3,CMD_VEL_TOPIC:"/cmd_vel"},S=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={Connected:!1,ros:null},e.init_connection(),e}return Object(s.a)(n,[{key:"init_connection",value:function(){var e=this;this.state.ros=new window.ROSLIB.Ros,console.log(this.state.ros),this.state.ros.on("connection",(function(){console.log("Connection established"),e.setState({Connected:!0})})),this.state.ros.on("close",(function(){console.log("connection is closed"),e.setState({Connected:!1}),setTimeout((function(){try{e.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}),f.RECONNECTION_TIMER)}));try{this.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y.a,{className:"text-center m-3",variant:this.state.Connected?"success":"danger"},this.state.Connected?"Robot Connected":"Robot disconnected"))}}]),n}(a.Component),g=n(16),w=n(58),_=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={Connected:!1,ros:null},e.init_connection(),e.handleMove=e.handleMove.bind(Object(g.a)(e)),e.handleStop=e.handleStop.bind(Object(g.a)(e)),e}return Object(s.a)(n,[{key:"init_connection",value:function(){var e=this;this.state.ros=new window.ROSLIB.Ros,console.log(this.state.ros),this.state.ros.on("connection",(function(){console.log("Connection established"),e.setState({Connected:!0})})),this.state.ros.on("close",(function(){console.log("connection is closed"),e.setState({Connected:!1}),setTimeout((function(){try{e.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}),f.RECONNECTION_TIMER)}));try{this.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}},{key:"handleMove",value:function(e){console.log("move");var t=new window.ROSLIB.Topic({ros:this.state.ros,name:f.CMD_VEL_TOPIC,messageType:"geometry_msgs/Twist"}),n=new window.ROSLIB.Message({linear:{x:e.y/100,y:0,z:0},angular:{x:0,y:0,z:-e.x/100}});t.publish(n)}},{key:"handleStop",value:function(e){console.log("stop");var t=new window.ROSLIB.Topic({ros:this.state.ros,name:f.CMD_VEL_TOPIC,messageType:"geometry_msgs/Twist"}),n=new window.ROSLIB.Message({linear:{x:0,y:0,z:0},angular:{x:0,y:0,z:0}});t.publish(n)}},{key:"render",value:function(){return o.a.createElement("div",{align:"center"},o.a.createElement("h2",null,"Teleoperation"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(w.Joystick,{size:100,sticky:!1,baseColor:"#d5d5d5",stickColor:"#a19f9e",move:this.handleMove,stop:this.handleStop}))}}]),n}(a.Component),C=n(55),I=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={ros:null,x:0,y:0,orientation:0,linear_velocity:0,angular_velocity:0},e.init_connection(),e}return Object(s.a)(n,[{key:"init_connection",value:function(){var e=this;this.state.ros=new window.ROSLIB.Ros,console.log(this.state.ros),this.state.ros.on("connection",(function(){console.log("Connection established"),e.setState({Connected:!0})})),this.state.ros.on("close",(function(){console.log("connection is closed"),e.setState({Connected:!1}),setTimeout((function(){try{e.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}),f.RECONNECTION_TIMER)}));try{this.state.ros.connect("ws://"+f.ROSBRIDGE_SERVER_IP+":"+f.ROSBRIDGE_SERVER_PORT)}catch(t){console.log("connection problem")}}},{key:"componentDidMount",value:function(){this.getRobotState()}},{key:"getRobotState",value:function(){var e=this;new window.ROSLIB.Topic({ros:this.state.ros,name:"/amcl_pose",messageType:"geometry_msgs/PoseWithCovarianceStamped"}).subscribe((function(t){e.setState({x:t.pose.pose.position.x.toFixed(2)}),e.setState({y:t.pose.pose.position.y.toFixed(2)}),e.setState({orientation:e.getOrientationFromQuaternion(t.pose.pose.orientation).toFixed(2)})})),new window.ROSLIB.Topic({ros:this.state.ros,name:"/odom",messageType:"nav_msgs/Odometry"}).subscribe((function(t){e.setState({linear_velocity:t.twist.twist.linear.x.toFixed(2)}),e.setState({angular_velocity:t.twist.twist.angular.z.toFixed(2)})}))}},{key:"getOrientationFromQuaternion",value:function(e){var t=new C.b(e.x,e.y,e.z,e.w);return(new C.a).setFromQuaternion(t)._z*(180/Math.PI)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement("h4",{className:"mt-4"},"Position"),o.a.createElement("p",{className:"mt-0"},"x: ",this.state.x),o.a.createElement("p",{className:"mt-0"},"y: ",this.state.y),o.a.createElement("p",{className:"mt-0"},"orientation: ",this.state.orientation))),o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement("h4",{className:"mt-4"},"Velocities"),o.a.createElement("p",{className:"mt-0"},"linear velocity: ",this.state.linear_velocity),o.a.createElement("p",{className:"mt-0"},"angular velocity: ",this.state.angular_velocity))))}}]),n}(a.Component),j=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"init",value:function(){var e=new window.ROSLIB.Ros({url:"ws://localhost:9090"}),t=new window.ROS2D.Viewer({divID:"turtle_ws/src/turtlebot3_simulations/turtlebot3_gazebo/map",width:400,height:400}),n=new window.ROS2D.OccupancyGridClient({ros:e,rootObject:t.scene,continuous:!0});n.on("change",(function(){t.scaleToDimensions(n.currentGrid.width,n.currentGrid.height),t.shift(n.currentGrid.pose.position.x,n.currentGrid.pose.position.y)}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"map"})}}]),n}(a.Component),T=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement("h1",{className:"text-center mt-3"},"Robot Control Page"),o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(S,null))),o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(_,null)),o.a.createElement(v.a,null,o.a.createElement(j,null))),o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement(I,null)))))}}]),n}(a.Component),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This react app controls and monitors ROS-enabled robot through web"))}}]),n}(a.Component),B=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(O.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",element:o.a.createElement(T,null)}),o.a.createElement(b.a,{path:"/About",element:o.a.createElement(k,null)}))))}}]),n}(a.Component);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(R,null),o.a.createElement(B,null),o.a.createElement(d,null))},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),x()}},[[61,1,2]]]);
//# sourceMappingURL=main.fbaac209.chunk.js.map