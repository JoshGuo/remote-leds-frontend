import React from 'react';
import {Button, Row} from 'react-materialize';
import '../css/FormContents.css'

class FormContents extends React.Component {
    constructor(props) {
        super(props);

        this.descriptions = [
            "Turns off the lights",
            "Sets lights to the specified color",
            "Sets the lights to a rainbow fade",
            "Sets lights to flash the specified color (aka wake me up from a nap)."
        ]

    }

    formSubmission = (type) => {
        if (type === 0) {
            console.log("Sending Plain Form");
        }else if (type === 1) {
            console.log("Sending Color Form")
        }
    }

    renderForm = () => {
        switch(this.props.activeForm) {
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
        let color;

        return(
            <div className="FormContents">
                <Row>
                    <h6>{this.descriptions[index]}</h6>
                </Row>
                <Row>
                    <input node={color} type="color" defaultValue="#FFFFFF"/> 
                    <h6>{}</h6>
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

    render() {
        return this.renderForm();
    }
}

export default FormContents;