import React from 'react';
import Server from './server.png'

class Projects extends React.Component{
    render(){
        return(
        <div className="projectsSection">
        <div style={styles.differ}>
            <div style={styles.heading}>My Contact App</div>
        
            <div style={styles.content}>
            Built a Full Stack Webapp- (My Contact App) using 
                <br />
            HTML, CSS, JS for frontend and 
            <br />
            NodeJS, ExpressJS, MongoDB, EJS(Template Engine) for backend.
            </div>
        </div>
        <div style={styles.differ}>
            <div style={styles.heading}>MyKart</div>
            <div style={styles.content}>
            Built a Webapp- (MyKart) using ReactJS            
            </div>
        </div>
        <div className="serverimg">
            <img style={styles.serverimg} src={Server} alt="" />
        </div>
        </div>
        );
    }
}


const styles = {
   heading:{
       fontSize: 20,
       fontWeight:600,
       fontFamily:'sans-serif'
   },
   content:{
    fontSize: 15,
    color:'#ccc',
    fontWeight:500,
    fontFamily:'sans-serif'
   },
   differ:{
       margin: 20
   },
   serverimg:{
       height:340,
       width:350
   }
}
export default Projects;