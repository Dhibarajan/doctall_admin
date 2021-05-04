import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme=>({
    labelText:{
        color: '#013C44',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '23px',

    }
}))
function LabelText({label, ...otherprops}) {
    const classes = useStyle()
    return (
        <div>
            <Typography variant="p" component="p" className={classes.labelText} style={{...otherprops}}>{label}</Typography>
        </div>
    )
}

export default LabelText
