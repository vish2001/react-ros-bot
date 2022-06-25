import React, { Component } from "react";
import { Row,Col,Container } from "react-bootstrap";
import Connection from "./Connection";
import Teleop from "./teleop";
import RobotState from "./RobotState"
import Map from "./map";
class Home extends Component{
    state = {
       
    };

    render(){
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Robot Control Page</h1>
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
                            <Map />
                        </Col>
                    </Row>
                   <Row>
                       <Col>
                          <RobotState />
                       </Col>
                   </Row>
                    
                </Container>
            </div>
            );
    }
}
export default Home;