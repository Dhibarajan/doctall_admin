import { Grid } from '@material-ui/core'
import React from 'react'

import Heading from '../components/Heading/Heading'
import Logo from '../components/Logo/Logo'
import TextWrapper from '../components/TextWrapper/TextWrapper';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Instruction from '../components/Instruction/Instruction';
function DoctorCreatePasswordScreen() {
    return (
        <Grid container>
            <Grid item md={4} sm={12} style={{display: 'block', margin:'0 auto', height:'100vh'}}>
                <div style={{marginTop:'20%'}}>
                    <Logo/>
                    <Heading heading="Please create your password"/>
                    <TextWrapper placeholder="Password" name="password" marginBottom="10%"/>
                    <TextWrapper placeholder="Confirm Password" name="confirmpassword" marginBottom="10%"/>
                    <ButtonComponent btntext="Create"/>
                    <Instruction/>
                </div>
            </Grid>
        </Grid>
    )
}

export default DoctorCreatePasswordScreen
