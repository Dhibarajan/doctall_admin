import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    root: {
        width: '497px',
        height: '364px',
        backgroundColor: '#F0F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    img: {
        display: 'block',
        width: '108px',
        height: 'auto',
        margin: 'auto',
        [theme.breakpoints.down("sm")]: {
            width: '60px',
        },

    },
    txt: {
        fontFamily: 'Greycliff CF',
        color: '#013C44',
        letterSpacing: '-0.3px',
        fontSize: '43px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginTop: '20px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '25px'
        },
    }
}))

function RegistrationSuccess() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.txt}>Registration Success!</div>
        </div>
    )
}

export default RegistrationSuccess
