import request from 'superagent';

export default {
    postContact: function(contactInfo){
        return request
            .post('/contact') 
            .send({
                contactInfo: contactInfo
            })
            .set('Accept', 'application/json');
    }
}