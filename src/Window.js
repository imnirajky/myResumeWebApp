import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
class Window extends React.Component{
    constructor(){
        super();
        this.state = {
         Name : <Home />,
        }
    }
    home = () =>{
        this.setState({
            Name: <Home />
        });
    }

    skill = () =>{
        this.setState({
            Name: <Skills />
        }); 
    }

    pro = () => {
        this.setState({
            Name: <Projects />
        });
    }

    con = () =>{
        this.setState({
            Name: <Contact />
        });
    }
    render(){
        return(
            <div className="window-UI">
               <div className="contentBox">
               <div className="left">
                   <div onClick={this.home} style={{color:'#c4c4c4', background:'white'}}>Home</div>
                   <div onClick={this.skill} style={{color:'#c4c4c4', background:'white'}}>Skills</div>
                   <div onClick={this.pro} style={{color:'#c4c4c4', background:'white'}}>Projects</div>
                   <div onClick={this.con} style={{color:'#c4c4c4', background:'white'}}>Contact</div>
               </div>
               <div className="right">
                   { this.state.Name }
               </div>
               </div>
            </div>
        );
    }
}


export default Window;
