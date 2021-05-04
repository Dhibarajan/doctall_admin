import { Grid } from '@material-ui/core'
import React from 'react'

import Heading from '../components/Heading/Heading'
import Logo from '../components/Logo/Logo'
import TextWrapper from '../components/TextWrapper/TextWrapper';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Instruction from '../components/Instruction/Instruction';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';

function LoginScreenWithSuccessful() {
    return (
        <Grid container>
            <Grid item md={4} sm={12} style={{display: 'block', margin:'0 auto',height: '100vh'}}>
                <div style={{marginTop:'20%'}}>
                    <Logo/>
                    <SuccessMessage message="Your password creation is successful"/>
                    <TextWrapper placeholder="Password" name="password" marginBottom="10%"/>
                    <TextWrapper placeholder="Confirm Password" name="confirmpassword" marginBottom="10%"/>
                    <ButtonComponent btntext="Create"/>
                </div>
            </Grid>
        </Grid>
    )
}

export default LoginScreenWithSuccessful
