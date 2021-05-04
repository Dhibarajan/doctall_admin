import React from 'react';
import {makeStyles} from '@material-ui/core';



const useStyle = makeStyles(theme=>({
    root:{
        width: '205.06px',
        fontSize: '20px',
        fontStyle: 'normal',
        lineHeight: '26px',
        fontWeight: 'normal',
        color: '#013C44'
    }
}))

function SecondaryButton() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            Forgot password
        </div>
    )
}

export default SecondaryButton
