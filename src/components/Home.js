import React from 'react';
import '../css/Home.css';
import {Container} from 'react-materialize';
import LEDForm from './LEDForm'
import Footer from './Footer'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <div className="Header">
                        <div style={{display:"inline-block"}}>
                            Change my LEDs :>
                        </div>
                    </div>
                    <p style={{fontSize: "15pt"}}>Welcome!<br/>
                        This has been designed with desktop in mind, but should at least be functional with mobile. Enjoy!
                    </p>
                    <LEDForm/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Home;