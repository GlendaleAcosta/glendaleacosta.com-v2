import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pageLoaded} from '../../actions/pageActions';
import {fetchPage} from '../../actions/pageActions';
import MapContainer from 'MapContainer';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        setTimeout(() => {
            this.props.pageLoaded();
        }, 1500);
        
    }

          
    
    render(){ 


        return (
            <div className="container">
                <div className="col-6 center-content flex-column">
                    <h1 className="lg-txt-4">Contact Me</h1>

                    <form className="form" onSubmit={this.onSubmit}>
                        <div>
                            <input className="input" ref="email"  type="text" placeholder="Name" />
                            <input className="input" ref="name"  type="text" placeholder="Email" />
                        </div>
                    
                        <input className="input" ref="subject"  type="text" placeholder="Subject" />
                    
                        <textarea className="textarea" ref="message" type="text" placeholder="Message" />
                            
                        <div className="container right">
                            <button type="submit" className="form-btn">Send</button>   
                        </div>
                        
                    </form>

                </div>
                
                <div className="col-6">
                    <MapContainer/>
                </div>
            </div>
        )
    }
}


// Redux Config
function mapStateToProps(state){
    return {page: state.page};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPage: fetchPage,
        pageLoaded: pageLoaded
    }, dispatch);
}

export default connect(mapStateToProps , matchDispatchToProps)(Contact);