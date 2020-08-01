import React from 'react';
import {Button, Row} from 'react-materialize';
import '../css/FormContents.css'

class FormContents extends React.Component {
    constructor(props) {
        super(props);

        this.descriptions = [
            "Turns off the lights",
            "Sets the lights to the specified color",
            "Sets the lights to a rainbow fade",
            "Sets the lights to flash the specified color (AKA wake me up in the middle of the night)."
        ]

        this.name = React.createRef();
        this.color = React.createRef();

    }

    formSubmission = (type) => {
        if (type === 0) {
            this.props.sendFormCallback(
                this.props.activeForm,
                this.name.current.value === "" ? "Anon" : this.name.current.value
            );
        }else if (type === 1) {
            this.props.sendFormCallback(
                this.props.activeForm, 
                this.name.current.value === "" ? "Anon" : this.name.current.value,
                this.color.current.value.toUpperCase()
            );
        }
    }

    renderForm = () => {
        switch(this.props.activeForm) {
            case -3: return this.renderCompletedForm();
            case -2: return <p></p>
            case -1: return this.renderGenericForm();
            case 0: return this.renderColorPickerForm();
            case 1: return this.renderGenericForm();
            case 2: return this.renderColorPickerForm();
            default: return <p>There has been an error</p>
        }
    }

    renderGenericForm() {
        let index = this.props.activeForm + 1;

        return(
            <div className="FormContents">
                <Row>
                    <h6>{this.descriptions[index]}</h6>
                </Row>
                <Row>
                    Name: <input style={{margin: "0 1rem", width: "25%", color: "white"}} ref={this.name} type="text" placeholder="Anonymous" defaultValue=""/> 
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.formSubmission(0)}>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    }

    renderColorPickerForm() {
        let index = this.props.activeForm + 1;
        return(
            <div className="FormContents">
                <Row>
                    <h6>{this.descriptions[index]}</h6>
                </Row>
                <Row>
                    Name: <input style={{margin: "0 1rem", width: "25%", color: "white"}} ref={this.name} type="text" placeholder="Anonymous" defaultValue=""/> 
                </Row>
                <Row>
                    Color: <input style={{margin: "0 1rem"}} ref={this.color} type="color" defaultValue="#FFFFFF"/> 
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.formSubmission(1)}>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    }

    renderCompletedForm() {
        return(
            <div className="FormContents">
                <Row>
                    <h5>Form submitted!</h5>
                </Row>
                <Row>
                    <h6>Give a few second for the LEDs settings to update</h6>
                </Row>
                <Row>
                    <Button style={{backgroundColor: "#10131a", borderStyle: "solid", borderWidth: "1px"}} 
                        waves="green" 
                        onClick={() => this.props.changeFormCallback(-2)}>
                        OK
                    </Button>
                </Row>
            </div>
        );
    }

    render() {
        return this.props.isLoading ? <div>Sending...</div> : this.renderForm();
    }
}

export default FormContents;