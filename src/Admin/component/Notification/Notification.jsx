
import React from 'react'
import { Card, CardContent, Typography, makeStyles, Box } from '@material-ui/core';
import Union from '../../images/icons/Union.png'

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiCardContent-root": {

            boxShadow: 'none'
        },
        "$ .MuiPaper-elevation1": {
            boxShadow: 'none !important'
        }
    },
    box: {
        width: '100%',
        marginBottom: '10%',
        border: '1px solid #66B5C3',
        borderRadius: '35px',

    },
    icon: {
        display: 'flex',
        margin: '3% auto'
    },
    text: {
        color: '#00839B',
        fontSize: '25px',
        lineHeight: '32px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: '-0.291346px',
        textAlign: 'center',
        padding: '30px 30px'

    }
}))

function Notification() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <img src={Union} alt="icon" className={classes.icon} />
                <Typography variant="p" component="p" className={classes.text}>You have exceeded your code entry limit. To assist you please reach out to us on support@doctall.com or call 09010996000</Typography>
            </Box>
        </div>
    )
}

export default Notification
