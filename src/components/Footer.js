import React from 'react';
import '../css/Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer"> 
                <div className="FooterText">
                    Made by <a href="https://github.com/JoshGuo">Joshua Guo</a> | Please don't break this &lt;3 
                </div>
             </div>
        )
    }
}

export default Footer;