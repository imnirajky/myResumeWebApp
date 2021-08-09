import React from 'react';
import Mail from './mailsent.png'

class Contact extends React.Component{
    render(){
        return(
        <div className="contactSection">
            
                <div className="imageMail">
                <img src={Mail} style={styles.mailImg} alt="" />
                </div>
         
                <div className="aside">
                <div className="my-privacy">
                Email: devniraj01@gmail.com
                <br />
                Mob:   +91-8404809235
                </div>
            <div>
                <form action="">
                    <input style={styles.detail} placeholder="Your Name" type="text" required/>
                    <br />
                    <input style={styles.detail} placeholder="Email" type="email" required/>
                    <br />
                    <textarea style={styles.msg} rows="5" placeholder="Message" type="text" required/>
                    <br />
                    <button style={styles.submit}> Submit </button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

const styles = {
    submit:{
        cursor: 'pointer',
        background: '#f05d23',
        color:'#fff',
        height: 50,
        width: 140,
        borderRadius:"4%",
        border:'none',
        marginBottom: 7,
        outline:'none',
        fontFamily:'sans-serif'
    },
    detail:{
        height:30,
        width: 280,
        marginBottom: 7,
        outline:'none',
        fontFamily:'sans-serif'

    },
    msg:{
        width:280,
        marginBottom: 7,
        outline:'none',
        fontFamily:'sans-serif'
    },
    mailImg:{
        height: 310,
        width: 290
    }
}

export default Contact;