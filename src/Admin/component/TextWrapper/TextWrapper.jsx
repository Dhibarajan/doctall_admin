import { TextField, makeStyles } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #66B5C3',
            opacity: '0.95',
        },
        "& .MuiTextField-root": {
            borderRadius: '40px',
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '10px',
            // opacity: '0.95'
        },
        "& .MuiInputBase-input": {
            color: '#00839B'
        },
    },
}))


function TextWrapper({ name, marginBottom, ...otherprops }) {
    const classes = useStyles()

    const configertext = {
        ...otherprops,
    }
    return (
        <div className={classes.root}>
            <TextField variant="outlined" name={name} fullWidth style={{ marginBottom: `${marginBottom}` }} {...configertext} />
        </div>
    )
}

export default TextWrapper
