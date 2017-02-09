import React from 'react';

class Contact extends React.Component{

    constructor(props){
        super(props);
        console.log('loaded Contact component');
    }

    render(){
        return (
            <div className="page">
                <h1 className="lg-txt-1">Contact Me</h1>
            </div>
        )
    }
}

module.exports = Contact;