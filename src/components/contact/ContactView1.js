import React from 'react';
import Form from './Form';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '70px',
    paddingBottom: '70px',
    position: 'relative'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '10px',
    padding: '10px'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}

const ContactView1 = () => (
  <div style={styles.flexParent}>
    <style>{`
      #contact-view{
        width: 100%;
        vertical-align: middle;
      }
    `}
    </style>
    <div style={styles.flexChild}>
      <Form/>
    </div>
    <div style={styles.flexChild}>
      <img id='contact-view' src={require('./../../assets/images/contact/contact-view.png')}/>
    </div>
    <hr style={styles.hr}/>
  </div>
);

export default ContactView1;
