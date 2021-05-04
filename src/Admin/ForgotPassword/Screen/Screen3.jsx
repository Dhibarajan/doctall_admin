
import React from 'react';
import backgroundImg from '../../images/BackgroundImage.png';
import { makeStyles, Grid } from '@material-ui/core'


// Component
import Logo from '../../component/Logo/Logo'
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';
import Notification from '../../component/Notification/Notification';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    gridContainer: {
        height: '100%',
        width: '100%',
    },
    rightGrid: {
        display: 'flex',
        justifyContent: 'center',
        border: '3px solid #00839B',
        borderRadius: '50px 0px 0px 50px',
        margin: '0 0 0 auto',
        background: '#FFFFFF',
        opacity: '0.95',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '3px',
        },
    },
    container: {
        width: '70%',
        height: 'auto',
        marginTop: '20%'

    }
}))

function Screen3() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} xs={12} className={classes.rightGrid}>
                    <div className={classes.container}>
                        <Logo />
                        <Notification />
                        <ButtonComponent btntext="Send Code" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Screen3


