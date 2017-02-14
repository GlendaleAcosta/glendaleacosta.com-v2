import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pageLoaded} from '../../actions/pageActions';
import {fetchPage} from '../../actions/pageActions';
import MapContainer from 'MapContainer';
import Email from 'Email';

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            serverResponse: null
        }
    }
    componentDidMount(){
        
        setTimeout(() => {
            this.props.pageLoaded();
        }, 1500);
        
    }

    onSubmit(e){
        e.preventDefault();

        var that = this;

        var contactInfo = {
            email: that.refs.email.value,
            name: that.refs.name.value,
            subject: that.refs.subject.value,
            message: that.refs.message.value
        }
        
        Email.postContact(contactInfo)
            .then(function(res){
                var msg = res.body.msg;
                if (msg){
                    that.refs.email.value = '';
                    that.refs.name.value = '';
                    that.refs.subject.value = '';
                    that.refs.message.value = '';
                    that.setState({
                        serverResponse: msg
                    })
                }

            })
            .catch(function(err){
                console.log(err);
            })
    }
          
    
    render(){ 
        var {serverResponse} = this.state;

        function renderBtn(){
            if(!serverResponse){
                return <button type="submit" className="form-btn">Send</button>  
            } else {
                return <p className="contact-response">{serverResponse}</p>
            }
        }

        return (
            <div className="container">
                <div style={{backgroundImage: "url('../../images/city2.jpg')"}} className="col-6 center-content flex-column contact-form-container">
                    <div className="form-container">
                        <h1 className="lg-txt-4">Contact Me</h1>
                        <p className="contact-email">My Email: gglendale17@gmail.com</p>
                        <form className="form" onSubmit={this.onSubmit}>
                            <div>
                                <input className="input" ref="name"  type="text" placeholder="Name" />
                                <input className="input" ref="email"  type="text" placeholder="Email" />
                            </div>
                        
                            <input className="input" ref="subject"  type="text" placeholder="Subject" />
                        
                            <textarea className="textarea" ref="message" type="text" placeholder="Message" />
                                
                            <div className="container right">
                                {renderBtn()}
                            </div>
                            
                        </form>
                        
                    </div>

                </div>
                
                <div className="col-6 contact-map-container">
                    <MapContainer/>
                </div>
            </div>
        )
    }
}


                    /*<div className="contact-info">
					    <p>Email: gglendale17@gmail.com</p>
                        <p>Phone: (707) 386-4926</p>
				    </div>*/
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