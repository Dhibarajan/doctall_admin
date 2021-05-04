import React from 'react';
import backgroundImg from '../images/BackgroundImage.png';
import { Grid, makeStyles } from '@material-ui/core';

// components
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';
import Screen4 from './Screen/Screen4';
import Screen5 from './Screen/Screen5';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    gridContainer: {
        height: '100%',
        width: '100%',
    },
    rightGrid: {
        display: 'flex',
        justifyContent: 'center',
        border: '3px solid #00839B',
        borderRadius: '50px 0px 0px 50px',
        margin: '0 0 0 auto',
        background: '#FFFFFF',
        opacity: '0.95',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '3px',
        },
    },
    container: {
        width: '70%',
        height: 'auto',
        marginTop: '20%'

    }
}))
function ForgotPassword() {
    const classes = useStyle()
    return (
        <div>
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Screen5 />
        </div>
    )
}

export default ForgotPassword

