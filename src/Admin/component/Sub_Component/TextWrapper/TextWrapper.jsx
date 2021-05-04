
import React from 'react'
import { TextField } from '@material-ui/core';
import { useStyle } from '../../../style/style'
function TextWrapper({ name, ...otherprops }) {
    const classes = useStyle();
    const configertext = {
        ...otherprops,

    }
    return (
        <div>
            <TextField name={name} fullWidth variant="outlined"  {...configertext} className={classes.primaryInput} />
        </div>
    )
}

export default TextWrapper
