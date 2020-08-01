import React from 'react';
import '../css/Home.css';
import axios from 'axios';
import {Container} from 'react-materialize';
import CurrentSetting from './CurrentSetting';
import LEDForm from './LEDForm';
import Footer from './Footer';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            loadingCurr: true,
            currentMode: {
                mode: "-1",
                name: "default"
            }
        }
        this.apiDomain = "https://remote-leds.herokuapp.com/queue";
    }

    componentDidMount() {
        this.getCurrentMode();
        setInterval(this.getCurrentMode, 5000);
    }

    getCurrentMode = () => {
        axios.get(this.apiDomain).then((res) => {
            console.log(res.data.currentMode);
            this.setState({
                loadingCurr: false,
                currentMode: res.data.currentMode
            })
        });
    }

    render() {
        return (
            <div className="Home">
                <Container>
                    <div className="Header">
                        <div style={{display:"inline-block"}}>
                            Change my LEDs :&gt;
                        </div>
                    </div>
                    <CurrentSetting isLoading={this.state.loadingCurr} setting={this.state.currentMode}/>
                    <LEDForm/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Home;