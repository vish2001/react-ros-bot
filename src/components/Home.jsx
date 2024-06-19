import React, { Component } from "react";
import { Row,Col,Container } from "react-bootstrap";
import Connection from "./Connection";
import Teleop from "./teleop";
import RobotState from "./RobotState"
import Feed from "./Feed";
class Home extends Component{
    state = {
       
    };

    render(){
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Mission Control Center</h1>
                    <Row>
                        <Col> 
                            <Connection />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Teleop />
                        </Col>
                        <Col>
                            <Feed />
                        </Col>
                    </Row>
                   <Row>
                          <RobotState/>    
                   </Row>
                    
                </Container>
            </div>
            );
    }
}
export default Home;