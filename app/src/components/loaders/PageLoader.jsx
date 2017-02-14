import React from 'react';

export default class PageLoader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loadBarStyle: {
                width: '0',
                height: '2px'
            }
        }
    }
    componentDidMount(){
        var that = this;
        setTimeout(()=>{

            that.setState({
                loadBarStyle:{
                    width: '300px',
                    height: '2px',
                    transition: '1000ms ease-in-out'
                }
            })
        }, 800)
    }
    render(){
        var {loadBarStyle} = this.state;
        
        return (
            <div className="page-loader">
                <h1 className="load-text">LOADING<span className="load-elipses">...</span></h1>
                <div className="load-bar-container">

                    <div className="load-bar" style={loadBarStyle}></div>
                </div>
            </div>
        )
    }
}