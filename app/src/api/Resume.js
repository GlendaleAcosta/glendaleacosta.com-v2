import request from 'superagent';

export default {
    getResume: function(){
        return request
            .get('/resume') 
            .set('Accept', 'application/json');
    }
}