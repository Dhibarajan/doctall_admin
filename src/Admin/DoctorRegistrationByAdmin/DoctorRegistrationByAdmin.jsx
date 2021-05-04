import { Grid, Stepper } from '@material-ui/core';
import React from 'react'
import StepperContainer from '../component/StepperContainer/StepperContainer';
import { useStyle } from '../style/style';

function DoctorRegistrationByAdmin() {
    const classes = useStyle();

    return (
        <div className={classes.main}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={6} className={classes.rightGrid}>

                    <div style={{ width: '90%' }}>
                        <StepperContainer />
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default DoctorRegistrationByAdmin
