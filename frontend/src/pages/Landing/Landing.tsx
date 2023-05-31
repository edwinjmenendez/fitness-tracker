import React from 'react'
import { Button } from '@material-ui/core';
import styles from './Landing.module.css';
import muiStyles from '../../components/MaterialUStyles.module.css';

export const Landing = () => {

    const handleFacebookAuth = () => {
        // Handle Facebook authentication or form submission logic
        // e.g., redirect to Facebook login page or send form data to the server
        console.log('go to facebook auth page');
    }

    return (
        <div className={styles.container} >
            <div className={styles.introContainer} >
                <h2>Welcome to TrackFit</h2>
                <p>Maximize your performance and track your success.</p>
            </div>
            <Button className={`${styles.buttonLogin} ${styles.buttonsLanding}`} variant='contained'>Log in</Button>
            <Button className={`${styles.buttonSignup} ${styles.buttonsLanding}`} variant='contained'>Sign up</Button>
            <Button onClick={handleFacebookAuth} className={`${styles.buttonFacebook} ${styles.buttonsLanding}`} variant='contained'>Continue with Facebook</Button>
        </div>
    )
}
