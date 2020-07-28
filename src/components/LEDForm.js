import React from 'react';
import axios from 'axios';
import {Container, Button, Col, Row} from 'react-materialize';
import FormContents from './FormContents';

class LEDForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: -2,
            isLoading: false
        };
        this.apiDomain = "https://remote-leds.herokuapp.com";
    }

    changeForm = (form) => {
        if(!this.state.isLoading) {
            this.setState({
                activeForm: form
            });
        }
    }

    sendForm = (mode, name, color) => {
        this.setState({isLoading: true});

        if(color) { //Form with color
            axios.post(this.apiDomain + "/enqueue/", {
                mode: mode,
                name: name,
                color: color
            }).then(() => 
                this.setState({
                    isLoading: false, 
                    activeForm: -3
                })
            );
        }else{ //Basic form with no other properties
            axios.post(this.apiDomain + "/enqueue/", {
                mode: mode,
                name: name
            }).then(() => 
                this.setState({
                    isLoading: false,
                    activeForm: -3
                })
            );
        }
    }
    
    render() {
        let clickedButton = {
            color: "lightblue",
            width: "100%",
            height: "50px",
            backgroundColor: "#10131a",
            borderStyle: "solid",
            borderWidth: "3px",
            borderRadius: "5px",
            fontSize: "16pt"
        }

        let unclickedButton = {
            color: "white",
            width: "80%",
            height: "50px",
            backgroundColor: "#10131a",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "5px",
            fontSize: "14pt"
        };

        return (
            <Container>
                <Row>
                    <Col s={3}>
                        <Button style={this.state.activeForm === -1 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(-1)}>
                            Turn Off
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 0 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(0)}>
                            Set Color
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 1 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(1)}>
                            Fade
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 2 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(2)}>
                            Flash
                        </Button>
                    </Col>
                </Row>
                <FormContents activeForm={this.state.activeForm} changeFormCallback={this.changeForm} sendFormCallback={this.sendForm} isLoading={this.state.isLoading}></FormContents>
            </Container>
        );
    }
}

export default LEDForm;