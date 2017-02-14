import React from 'react';

export default class ProjectCounter extends React.Component{
    constructor(props){
        super(props);
        
        var length = this.props.originalProjects.length;
        
        this.state = {
            totalProjects: length
        }
    }
    

    render(){
        var {selectedIndex} = this.props;
        var {totalProjects} = this.state;
      
     
        if(selectedIndex < 4){
            var num = totalProjects - (3 - selectedIndex);
            
        } else if (selectedIndex > (totalProjects + 3)){
            var num = selectedIndex - (totalProjects + 3);
            
        } else {
            var num = selectedIndex - 4 + 1;
            
        }
        

        return(
            <div className="col-3 project-counter"> 
                <h3 className="project-num">#{num}/{totalProjects}</h3>
            </div>
        )
    }
}