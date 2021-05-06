import React from 'react'
import { Button, Grid, Select, TextField, Dialog, makeStyles } from '@material-ui/core';
import { useStyle } from '../../style/style';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// import Logo
import FileUpload from '../../images/icons/fileUpload.png'
import triangleLogo from '../../images/icons/triangle.png'
import axios from 'axios';
import UploadSuccessfull from './UploadSuccessfull';
import ProgressBar from './ProgressBar';


const useStyle2 = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #66B5C3',
            opacity: '0.95',
        },
        "& .MuiTextField-root": {
            borderRadius: '40px',
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '10px',
            // opacity: '0.95'
        },
        "& .MuiInputBase-input": {
            color: '#00839B',
            // textTransform: 'uppercase',

        },
        "& .MuiPaper-root": {
            color: '#00839B',
            cursor: 'pointer',
            lineHeight: '20px'
        },
    }
}))



export const PersonalInfo = ({ handleStepperNext, setPersonalinfo, personalInfo }) => {
    const classes = useStyle();
    const classes2 = useStyle2();
    const [gender, setGender] = React.useState('');
    const [profile_pic, setProfile_pic] = React.useState('');
    const [sign_pic, setSign_pic] = React.useState('');
    const [progress, setProgress] = React.useState(0);
    const [progressBarComponent, setProgressBarComponent] = React.useState(false)

    const [handleCompleteStatus, setHandleCompleteStatus] = React.useState(false)


    const handleGender = (event) => {
        setGender(event.target.value)
    }

    // handle progress

    const handleProgressCompleteClose = () => {
        setHandleCompleteStatus(false)
    }

    const UploadProgress = (percentCompleted) => {
        if (percentCompleted === 100) {
            setProgressBarComponent(false)
            setHandleCompleteStatus(true)
        } else {
            setProgressBarComponent(true)
        }
    }



    const handleProfile = async ({ target: { files } }) => {
        const img = files[0];

        const formData = new FormData()

        formData.append('media', img)

        const config = {
            method: 'post',
            url: 'http://test-api.doctall.com/api/v1/upload/avatar',
            headers: {
                'Content-Types': 'multipart/form-data',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlOTE3MGQ1ZjVmYjAwMTQ0MmI2NjMiLCJ1dWlkIjoiQ04tQ0M1MjBDODUiLCJncm91cCI6ImNvbnN1bWVyIiwiZnVsbF9uYW1lIjoic3Mgc3NzIiwic3Vic2NyaXB0aW9uIjpmYWxzZSwiaWF0IjoxNjE3ODU4OTI4fQ.29JtWwv8V1Mv9M4nMfAYfr6C-DYKnNKV6Rvv24VLQ-4'

            },
            data: formData,
            onUploadProgress: function (progressEvent) {

                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted)
                UploadProgress(percentCompleted)
            }
        }

        axios(config)
            .then(res => {
                setProfile_pic(res.data.url)
            })
            .catch(err => console.log("Error" + err))

    }

    const handleSign = async ({ target: { files } }) => {
        const img2 = files[0];

        const formData2 = new FormData()

        formData2.append('media', img2)

        const config = {
            method: 'post',
            url: 'http://test-api.doctall.com/api/v1/upload/avatar',
            headers: {
                'Content-Types': 'multipart/form-data',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlOTE3MGQ1ZjVmYjAwMTQ0MmI2NjMiLCJ1dWlkIjoiQ04tQ0M1MjBDODUiLCJncm91cCI6ImNvbnN1bWVyIiwiZnVsbF9uYW1lIjoic3Mgc3NzIiwic3Vic2NyaXB0aW9uIjpmYWxzZSwiaWF0IjoxNjE3ODU4OTI4fQ.29JtWwv8V1Mv9M4nMfAYfr6C-DYKnNKV6Rvv24VLQ-4'

            },
            data: formData2,
            onUploadProgress: function (progressEvent) {

                const percentCompleted2 = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted2)
                UploadProgress(percentCompleted2)
            }
        }
        axios(config)
            .then(res => {
                setSign_pic(res.data.url)
            })
            .catch(err => console.log("lsdkfn" + err))

    }



    const personalInfo_ValidationSchema = Yup.object().shape({
        // firstName: Yup.string().required('Required'),
        // middleName: Yup.string().required('Required'),
        // lastName: Yup.string().required('Required'),
        // dob: Yup.string().required('Required'),
        // // gender: Yup.string().required('Required'),
        // languages: Yup.string().required('Required'),


    })







    return (
        <div style={{ width: '100%' }} className={classes2.root}>
            <Formik
                initialValues={personalInfo}
                onSubmit={(value) => {
                    const { firstName, middleName, lastName, dob, languages } = value
                    // console.log(dob)
                    const newValue = {
                        firstName, middleName, lastName, gender, dob, languages, profile_pic, sign_pic
                    }

                    setPersonalinfo(newValue)
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
                                    <Field
                                        fullWidth
                                        variant="outlined"
                                        name="dob"
                                        type="date"
                                        as={TextField}
                                        className={classes.DateInput}
                                        error={touched.dob && errors.dob}
                                        helperText={touched.dob && errors.dob}


                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Gender</div>
                                    <Field
                                        name="gender"
                                        value={gender}
                                        onChange={handleGender}
                                        variant="outlined"
                                        as={Select}
                                        fullWidth

                                        className={classes.primaryInput}
                                        error={touched.gender && errors.gender}
                                        helperText={touched.gender && errors.gender}

                                    >
                                        <option aria-label="None" value="" disabled>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Field>

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

                                                id="upload-photo"
                                                onChange={handleProfile}
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
                                                onChange={handleSign}
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

            <Dialog
                onClose={handleProgressCompleteClose}
                open={Boolean(handleCompleteStatus)} style={{
                    borderRadius: '25px', border: ' 1px solid #A0DFC4',
                    boxShadow: '0px 0px 24px 5px rgba(218, 218, 218, 0.3)',
                }}>
                <UploadSuccessfull />
            </Dialog>

            <Dialog
                onClose={Boolean(progressBarComponent)}
                open={Boolean(progressBarComponent)}>
                <ProgressBar progress={progress} />
            </Dialog>




        </div >
    )
}


PersonalInfo.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleStepperNext: PropTypes.func.isRequired
};

