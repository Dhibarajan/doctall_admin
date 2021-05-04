import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    labelText: {
        color: '#013C44',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '18px',
        lineHeight: '23px',
        marginBottom: '1%'
    }
}));
function BoldLabel({ label, ...otherprops }) {
    const classes = useStyle();
    return (
        <div>
            <Typography variant="p" component="p" className={classes.labelText} >{label}</Typography>
        </div>
    )
}

export default BoldLabel
