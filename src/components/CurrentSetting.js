import React from 'react';
import '../css/CurrentSetting.css';
import {Container, Row, Col} from 'react-materialize';

class CurrentSetting extends React.Component {  
    constructor() {
        super();
        this.currentSettingCSS = {
            margin: "2rem auto",
            borderColor: "lightblue",
            backgroundColor: "#10131a",
            borderStyle: "solid",
            borderWidth: "3px",
            borderRadius: "10px",
            width: window.innerWidth > 400 ? "55%" : "75%",
            height: "125px",
        }
    }

    renderSettings = () => {
        switch(this.props.setting.mode) {
            case -2: return("loading...");
            case -1: return this.renderOff();
            case 0: return this.renderColor();
            case 1: return this.renderFade();
            case 2: return this.renderFlash();
            default: return("loading...");
        }
        
    }

    renderOff = () => {
        return (
            <div>
                <div><u>Mode</u>: Off</div>
                <div><u>Sender</u>: {this.props.setting.name}</div>
            </div>
        );
    }

    renderColor = () => {
        return (
            <div>
                <div><u>Mode</u>: Solid Color</div>
                <div style={{display: "inline-block"}}>
                    <u>Color</u>: 
                    <div style={{margin: "0 5px", width: "15px", height: "15px", display: "inline-block", backgroundColor: this.props.setting.color, borderColor: "white", borderStyle: "solid", borderWidth: "1px"}}></div>
                </div>
                <div><u>Sender</u>: {this.props.setting.name}</div>
            </div>
        )
    }

    renderFade = () => {
        return (
            <div>
                <div><u>Mode</u>: Rainbow Fade</div>
                <div><u>Sender</u>: {this.props.setting.name}</div>
            </div>
        )
    }

    renderFlash = () => {
        return (
            <div>
                <div><u>Mode</u>: Flashing</div>
                <div style={{display: "inline-block"}}>
                    <u>Color</u>: 
                    <div style={{margin: "0 5px", width: "15px", height: "15px", display: "inline-block", backgroundColor: this.props.setting.color, borderColor: "white", borderStyle: "solid", borderWidth: "1px"}}></div>
                </div>
                <div><u>Sender</u>: {this.props.setting.name}</div>
            </div>
        )
    }

    render() {
        return (
            <div style={this.currentSettingCSS}>
                <Row style={{margin: ".5rem"}}>
                    <h6>---- Current Setting ----</h6>    
                </Row>
                <Row>
                    {this.renderSettings()}       
                </Row>
            </div>

        )
    }
}

export default CurrentSetting;