import React from 'react';

class Skills extends React.Component{
    render(){
        return(
            <div className="skillsection">
                <div>
                    <img style={styles.skillBox} src="https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg" alt="" />
                </div>
                <div>
                    <img style={styles.skillBox} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLy0Xl90UhAlAyWH1Ia44z1OIx7AxOXQBKIExqIIrGWoVHfDpbC4HHVvO8b7C2eYLaQ9I&usqp=CAU" alt="" />
                </div>
                <div>
                    <img style={styles.skillBox} src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div>
                    <img style={styles.skillBox}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </div>
                <div>
                    <img style={styles.skillBox} src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" alt="" />
                </div>
                <div>
                    <img style={styles.skillBox} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSQ_VwlGCZSzLtWACGPJi0gkttfT59iZyCoPEUY7khZ3vI8wquWI5gz9VWu0XmLackAA&usqp=CAU" alt=""/>
                </div>
            </div>
        );
    }
}


const styles = {
    skillBox:{
        height: 200,
        width:300,
    
    }
}
export default Skills;