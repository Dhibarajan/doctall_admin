import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import successTick from '../../images/icons/successTick.png'


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

function UploadSuccessfull() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div>
                <img src={successTick} alt="successTick" className={classes.img} />
                <div className={classes.txt}>Upload Successful</div>
            </div>
        </div>
    )
}

export default UploadSuccessfull
