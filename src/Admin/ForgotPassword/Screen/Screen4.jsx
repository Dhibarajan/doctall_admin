
import React from 'react';
import backgroundImg from '../../images/BackgroundImage.png';
import { makeStyles, Grid } from '@material-ui/core'

// components
import Logo from '../../component/Logo/Logo'
import TextWrapper from '../../component/TextWrapper/TextWrapper';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';
import Heading from '../../component/Heading/Heading';
import LabelText from '../../component/LabelText/LabelText';
import Instruction from '../../component/Instruction/Instruction';

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

function Screen4() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} xs={12} className={classes.rightGrid}>
                    <div className={classes.container}>
                        <Logo />
                        <Heading heading="Forgot password" />
                        <LabelText label="New Password " marginBottom="3%" />
                        <TextWrapper placeholder="xxxxxxxxxxxxx" name="email_code" marginBottom="0%" />
                        <LabelText label="Confirm New Password" margin="3% 0" />
                        <TextWrapper placeholder="xxxxxxxxxxxxx" name="email_code" marginBottom="3%" />
                        <ButtonComponent btntext="Confirm Code" />
                        <Instruction />

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Screen4

