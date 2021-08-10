import React from 'react';
import images from './images.png';

class Home extends React.Component{
    render(){
        return(
            <div className="homeDiv">
               <div className="dpimage">
               <img style={styles.dp} src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/200459388_153025663485559_3059448619789140436_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=8NIhM1iPTNMAX_l2n7s&_nc_ht=scontent.fpat3-2.fna&oh=eee9ba91bd348948f53368b4d6d02ba2&oe=613580CE" alt="dp" />
               </div>
               <div style={styles.intro}>
               Hi, I am Niraj. A 3rd Year UnderGrad Student.
               <br />
               Currently, Pursuing my Bachelors in Electrical Engineering.
               </div>
               <div style={styles.profile}>
               Codeforces: 967(max.) <br /> <br />  Codechef:1475(max.)
               </div>
               <div>
                   <img style={styles.social} src="https://play-lh.googleusercontent.com/8r-ZTPoTIywU_aK2OXmLKg5WOdzXRxv7UUpiIk7kY7Du12fXKDwxUb2M_vBFp4pPvmpK" alt="" />
                   <img style={styles.social} src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="" />
                   <img style={styles.social} src="data:image/png;base64,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" alt="" />
               </div>
            </div>
        );
    }
}

const styles = {
    dp:{
        height: 225,
        width:235,
        borderRadius: "50%",
    },
    intro:{
        fontSize: 17,
        fontWeight:700,
        fontFamily:'sans-serif',
        margin: 60,
        lineHeight:1.5,
    },
    profile:{
        fontSize: 15,
        fontWeight:600,
        fontFamily:'sans-serif',
        margin: 60,
        lineHeight:1,
        marginTop: 20,
        color:'#cacaca'
    },
    social:{
        height: 35,
        width: 35,
        margin: 7
    }
}   

export default Home;