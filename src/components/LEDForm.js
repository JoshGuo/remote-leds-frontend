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
        this.apiDomain = "https://remote-leds.herokuapp.com/queue";
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
                            {window.innerWidth > 400 ? "Turn Off" : "1"}
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 0 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(0)}>
                            {window.innerWidth > 400 ? "Set Color" : "2"}
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 1 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(1)}>
                            {window.innerWidth > 400 ? "Rainbow" : "3"}
                        </Button>
                    </Col>
                    <Col s={3}>
                        <Button style={this.state.activeForm === 2 ? clickedButton : unclickedButton} waves="light" onClick={() => this.changeForm(2)}>
                            {window.innerWidth > 400 ? "Flash" : "4"}
                        </Button>
                    </Col>
                </Row>
                <FormContents activeForm={this.state.activeForm} changeFormCallback={this.changeForm} sendFormCallback={this.sendForm} isLoading={this.state.isLoading}></FormContents>
            </Container>
        );
    }
}

export default LEDForm;