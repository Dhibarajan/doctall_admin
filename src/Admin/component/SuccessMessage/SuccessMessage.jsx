import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import successTick from '../../images/icons/successTick.png'

const useStyle = makeStyles(theme => ({
    box: {
        border: '2px solid #37CC8C',
        borderRadius: '35px',
        backgroundColor: '#F0F5F5',
        marginBottom: '10%'
    },
    icon: {
        display: 'flex',
        margin: '3% auto'
    },
    text: {
        textAlign: 'center',
        marginBottom: '5%',
        color: '013C44',
        fontStyle: 'normal',
        fontSize: '25px',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '-0.3px'
    }
}))

function SuccessMessage({ message }) {
    const classes = useStyle()
    return (
        <Box boxShadow={0} className={classes.box}>
            <img src={successTick} alt="icon" className={classes.icon} />
            <Typography variant="h6" component="h5" className={classes.text}>
                {message}
            </Typography>
        </Box>
    )
}

export default SuccessMessage
