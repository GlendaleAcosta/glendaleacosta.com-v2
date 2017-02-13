import React from 'react';
import Resume from 'Resume';

export default class Skills extends React.Component{
    constructor(props){
        super(props);
        var height = document.getElementsByTagName('body')["0"].clientWidth - 60;
        height = height / 4;
        this.state ={
            style: {
                height: height + "px"
            }
        }
        this.downloadResume = this.downloadResume.bind(this);
    }

    downloadResume(e){
        e.preventDefault();
        Resume.getResume()
            .then(function(res){ 
                window.location = '/resume';
            })
            .catch(function(err){
                console.log(err);
            })
    }
    
    render(){
        var {style} = this.state;
        return(
            <div className="skills-box">

                <div style={style} className="me">    
                    
                </div>
                <button 
                    onClick={this.downloadResume} 
                    className="resume-btn"
                >
                    Download Resume
                </button>
            </div>
            
            
        )
    }
}