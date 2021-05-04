import React from 'react'
import TextWrapper from '../Sub_Component/TextWrapper/TextWrapper';
import { Button, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { useStyle } from '../../style/style';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// import Logo
import FileUpload from '../../images/icons/fileUpload.png'
import triangleLogo from '../../images/icons/triangle.png'
import axios from 'axios';



export const PersonalInfo = ({ handleStepperNext, setFormData, formData }) => {
    const classes = useStyle();
    const [gender, setGender] = React.useState('');
    const handleGender = (event) => {
        setGender(event.target.value)
    }


    // const handleSignature = (e) => {
    //     const media = e.target.value;
    //     axios.post('http://63.33.216.212/api/v1/upload/avatar', {
    //         media
    //     }, {
    //         headers: { "x-auth-token": `${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlOTE3MGQ1ZjVmYjAwMTQ0MmI2NjMiLCJ1dWlkIjoiQ04tQ0M1MjBDODUiLCJncm91cCI6ImNvbnN1bWVyIiwiZnVsbF9uYW1lIjoic3Mgc3NzIiwic3Vic2NyaXB0aW9uIjpmYWxzZSwiaWF0IjoxNjE3ODU4OTI4fQ.29JtWwv8V1Mv9M4nMfAYfr6C-DYKnNKV6Rvv24VLQ-4'}` }

    //     })
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))

    //     console.log(media)
    // }
    // const handleSubmit = (value) => {
    //     handleStepperNext()
    // }


    const personalInfo_ValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        middleName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        dob: Yup.string().required('Required'),
        languages: Yup.string().required('Required'),


    })


    return (
        <div style={{ width: '100%' }}>
            <Formik
                initialValues={formData}
                onSubmit={value => {
                    console.log("sumit", value, gender)
                    setFormData(value)
                    handleStepperNext()

                }}
                validationSchema={personalInfo_ValidationSchema}
            >

                {
                    ({ errors, touched }) => (
                        <Form style={{ width: '70%', margin: 'auto' }} autoComplete="off">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>First name</div>
                                    <Field
                                        fullWidth
                                        name="firstName"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.firstName && errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Middle name</div>
                                    <Field
                                        fullWidth
                                        name="middleName"
                                        variant="outlined"
                                        as={TextField}

                                        className={classes.primaryInput}
                                        error={touched.middleName && errors.middleName}
                                        helperText={touched.middleName && errors.middleName}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Last name</div>
                                    <Field
                                        fullWidth
                                        name="lastName"
                                        variant="outlined"
                                        as={TextField}
                                        className={classes.primaryInput}
                                        error={touched.lastName && errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Date of birth</div>
                                    <Field fullWidth variant="outlined" name="dob" type="date" as={TextField} className={classes.primaryInput} error={touched.dob && errors.dob}
                                        helperText={touched.dob && errors.dob} />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Gender</div>
                                    <Select name="gender" value={gender} onChange={handleGender} variant="outlined" fullWidth className={classes.dropDownInput} >
                                        <MenuItem aria-label="None" value="" disabled>Country</MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>

                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Language spoken</div>
                                    <Field
                                        fullWidth
                                        name="languages"
                                        variant="outlined"
                                        as={TextField}
                                        className={classes.primaryInput}

                                        error={touched.languages && errors.languages}
                                        helperText={touched.languages && errors.languages}
                                    />
                                </Grid>
                                {/* first upload button  */}
                                <Grid item xs={12}>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <label htmlFor="upload-photo" className={classes.uploadLabel}>
                                                <img src={FileUpload} alt="File Upload" />
                                            </label>
                                            <Field
                                                type="file"
                                                name="profile"
                                                as={TextField}
                                                className={classes.uploadButton}
                                                id="upload-photo2"
                                                error={touched.profile && errors.profile}
                                                helperText={touched.profile && errors.profile} />
                                        </div>
                                        <div className={classes.uploadContainer}>
                                            <div className={classes.uploadHeading}>
                                                Upload your profile photo
                                </div>
                                            <div className={classes.uploadInstruction}>
                                                Profile picture should be in the standard format png, jpeg & no more than 2mb.
                                </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>

                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <label htmlFor="upload-photo2" className={classes.uploadLabel}>
                                                <img src={FileUpload} alt="File Upload" />
                                            </label>
                                            <Field
                                                type="file"
                                                name="signature"
                                                as={TextField}
                                                className={classes.uploadButton}
                                                id="upload-photo2"
                                                error={touched.signature && errors.signature}
                                                helperText={touched.signature && errors.signature}
                                            />
                                        </div>
                                        <div className={classes.uploadContainer}>
                                            <div className={classes.uploadHeading}>
                                                Upload your signature
                                </div>
                                            <div className={classes.uploadInstruction}>
                                                Signature should be in the standard png format, no more than 2mb.
                                </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.stepperButton} type="submit" >Next <img src={triangleLogo} alt="logo" className={classes.stepperButtonLogo} /></Button>
                                </Grid>
                            </Grid>

                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}


PersonalInfo.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleStepperNext: PropTypes.func.isRequired
};

