import React from 'react';
import { Box, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root:{
        "& .MuiCardContent-root":{
            border: '1px solid #66B5C3',
            borderRadius: '35px'
        },
        "$ .MuiPaper-elevation1": {
            boxShadow: 'none'
        }
    },
    box:{
        maxWidth: 445,
        marginTop: '5%',
        borderRadius: '20px',
        border: 'solid #37CC8C',
        backgroundColor: '#F0F5F5'
        
        
    },
    icon:{
        display: 'flex',
        margin: '3% auto'
    },
    text:{
        color: '#013C44',
        fontSize: '18px',
        lineHeight: '23px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: '-0.291346px',
    }
}))


function Instruction() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box boxShadow={0} className={classes.box}>
                <div style={{padding: '20px 15px'}}>
                    <Typography className={classes.text}>Your password must be:</Typography>
                    <Typography className={classes.text}>At least 8 characters long </Typography>
                    <Typography className={classes.text}> A mixture of both uppercase and lowercase letters </Typography>
                    <Typography className={classes.text}>A mixture of letters and numbers </Typography>
                    <Typography className={classes.text}>Include at least one special character</Typography>
                </div>
            </Box>
        </div>
    )
}

export default Instruction
