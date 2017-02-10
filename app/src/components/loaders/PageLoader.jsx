import React from 'react';

export default class PageLoader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="page-loader">
                <h1>Loading...</h1>
            </div>
        )
    }
}