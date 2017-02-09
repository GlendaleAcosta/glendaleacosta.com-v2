import React from 'react';
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

class Home extends React.Component {
    constructor(props){
        super(props);
        console.log("loaded Home component")
    }

    render(){
        return (
            <div className="page page-shadow"> 
                <h1 className="lg-txt-1 white">GLENDALE ACOSTA</h1>
                <hr className="divider"/>
                <p className="lg-txt-3 mgn-1 white">A normal college student by day, and a vigilante hacker by night</p>
                <a className="btn mgn-2" href="#">View Portfolio</a>

                <Video id="bgVideo" autoPlay loop muted
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                    // Do stuff 
                }}>
                <source src="../../videos/Maxine the Fluffy Corgi.mp4" type="video/mp4" />
                </Video>
            </div>
        );
    }
}

module.exports = Home;