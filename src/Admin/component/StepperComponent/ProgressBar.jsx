import React from 'react';
import { makeStyles } from '@material-ui/core';
import "antd/dist/antd.css";
import { Progress } from "antd";

const useStyle = makeStyles(theme => ({
    root: {
        width: '497px',
        height: '364px',
        backgroundColor: '#F0F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressContainer: {
        width: '251px',
        height: '250px'
    }, txt: {
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

function ProgressBar({ progress }) {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div>
                <Progress type="circle" percent={progress} width={200} strokeColor="#17BBD9" trailColor="#ADC2C3" />
                <div className={classes.txt}>
                    Uploading...
            </div>
            </div>
        </div>
    )
}

export default ProgressBar
