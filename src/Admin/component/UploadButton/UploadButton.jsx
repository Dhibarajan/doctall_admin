import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import upload from '../../icons/upload.png';

const useStyle = makeStyles(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        padding: '0 26px',
        fontSize: '18px',
        textTransform: 'capitalize',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: 'auto',
        height: '4.625rem',
        backgroundColor: '#00839B',
        borderRadius: '20px',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: '10rem',
            height: '3.5rem',
        },
    },
    img: {
        marginLeft: '10px'
    }
}))
function UploadButton() {

    const classes = useStyle()
    return (
        <div>
            <Button className={classes.button}>
                Upload Documents
                <img src={upload} alt="upload" className={classes.img} style={{ marginRight: '10px' }} />
            </Button>
        </div>
    )
}

export default UploadButton
