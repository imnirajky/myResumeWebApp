import React from 'react';

class Window extends React.Component{
    render(){
        return(
            <div className="window-UI">
               <div className="contentBox">
               <div className="left">
                   <div style= {{ marginBottom:20 }}>Home</div>
                   <div style= {{ marginBottom:20 }}>Skills</div>
                   <div style= {{ marginBottom:20 }}>Projects</div>
                   <div style= {{ marginBottom:20 }}>Contact</div>
                   <div></div>
               </div>
               <div className="right">
               <div className="dpimage">
               <img style={styles.dp} src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/200459388_153025663485559_3059448619789140436_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=8NIhM1iPTNMAX_l2n7s&_nc_ht=scontent.fpat3-2.fna&oh=eee9ba91bd348948f53368b4d6d02ba2&oe=613580CE" alt="dp" />
               </div>
               <div style={styles.intro}>
               Hi, I am Niraj. A 3rd Year UnderGrad Student.
               <br />
               Currently, Pursuing my Bachelors in Electrical Engineering.
               </div>
               </div>
               </div>
            </div>
        );
    }
}

const styles = {
    dp:{
        height: 200,
        width:210,
        borderRadius: "50%",
    },
    intro:{
        fontSize: 20,
        fontWeight:700,
        fontFamily:'sans-serif',
        margin: 60,
        lineHeight:1.5

    }
}   

export default Window;
