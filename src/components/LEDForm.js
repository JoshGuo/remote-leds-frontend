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
    }

    changeForm = (form) => {
        if(!this.state.isLoading) {
            this.setState({
                activeForm: form
            });
        }
    }

    sendForm = (mode, name, color) => {
        axios.post('url', {
            mode: mode,
            name: name,
            color: color
        });
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
                <h5>Choose a Setting</h5>
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
                <FormContents activeForm={this.state.activeForm} sendFormCallback={this.state.sendForm}></FormContents>
            </Container>
        );
    }
}

export default LEDForm;