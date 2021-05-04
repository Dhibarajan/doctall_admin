
import React from 'react';
import { Button, Grid, Select, TextField, makeStyles } from '@material-ui/core';
import triangleLogo from '../../images/icons/triangle.png';
import { useStyle } from '../../style/style';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
    }
}))

export const ProfessionalInfo = ({ handleStepperNext, setProfessionalInfo, professionalInfo }) => {
    const classes = useStyle()
    const classes2 = useStyle2()
    const [specialityData, setSpecialityData] = React.useState([]);
    const [speciality, setSpeciality] = React.useState('');
    const [consultation_fee, setconsultation_fee] = React.useState('');
    console.log(consultation_fee)

    const handleSpeciality = (event) => {
        setSpeciality(event.target.value)
    }
    const URL_Validation = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    const professionalInfo_ValidationSchema = Yup.object().shape({
        // professionalname: Yup.string().required('Required'),
        // // speciality: Yup.string().required('Required'),
        // bio: Yup.string().required('Required'),
        // folionumber: Yup.number().integer().required('Required'),
        // consultation_fee: Yup.number().required('Required'),
        profileVideoUrl1: Yup.string().matches(URL_Validation, 'Enter correct url!'),
        profileVideoUrl2: Yup.string().matches(URL_Validation, 'Enter correct url!'),
        profileVideoUrl3: Yup.string().matches(URL_Validation, 'Enter correct url!'),
        // fb: Yup.string(),
        // insta: Yup.string(),
        // linkedin: Yup.string(),
        // tw: Yup.string(),
        // youtube: Yup.string(),
        // other: Yup.string(),



    })

    React.useEffect(() => {
        const getData = () => {
            axios.get('http://test-api.doctall.com/api/v1/metadata/specialities')
                .then(data => setSpecialityData(data.data))
        }

        getData()
    }, [])


    return (
        <div style={{ width: '100%' }} className={classes2.root}>
            <Formik initialValues={professionalInfo}
                onSubmit={value => {
                    const { professionalname, bio, folionumber, profileVideoUrl1, profileVideoUrl2, profileVideoUrl3, fb, insta, linkedin, tw, youtube, other } = value;
                    const ProfessionalInfo = {
                        professionalname, bio, folionumber, speciality, consultation_fee, profileVideoUrl1, profileVideoUrl2, profileVideoUrl3, fb, insta, linkedin, tw, youtube, other
                    }
                    setProfessionalInfo(ProfessionalInfo)
                    console.log(ProfessionalInfo)
                    handleStepperNext()

                }}
                validationSchema={professionalInfo_ValidationSchema}
            >
                {
                    ({ errors, touched }) => (
                        <Form style={{ width: '70%', margin: 'auto' }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Professional name*</div>
                                    <Field
                                        name="professionalname"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        required={true}
                                        error={touched.professionalname && errors.professionalname}
                                        helperText={touched.professionalname && errors.professionalname}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Speciality*</div>
                                    <Select name="speciality" value={speciality} onChange={handleSpeciality} variant="outlined" fullWidth className={classes.primaryInput}>
                                        <option aria-label="None" value="" disabled selected hidden>Speciality</option>
                                        {
                                            specialityData.map(data => (
                                                <option value={data.name} key={data._id}>{data.name}</option>
                                            ))
                                        }
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Bio*</div>
                                    <Field
                                        name="bio"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        required={true}
                                        error={touched.bio && errors.bio}
                                        helperText={touched.bio && errors.bio}
                                        multiline rows={4} />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Folio number*</div>
                                    <Field
                                        name="folionumber"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        required={true}
                                        error={touched.folionumber && errors.folionumber}
                                        helperText={touched.folionumber && errors.folionumber}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Consultation fee*</div>
                                    <CurrencyTextField
                                        name="consultation_fee"
                                        fullWidth
                                        variant="outlined"
                                        value={consultation_fee}
                                        currencySymbol="$"
                                        outputFormat="string"
                                        decimalCharacter="."
                                        digitGroupSeparator=","
                                        onChange={(e) => setconsultation_fee(e.target.value)}
                                        className={classes.primaryInput}
                                        error={touched.consultation_fee && errors.consultation_fee}
                                        helperText={touched.consultation_fee && errors.consultation_fee}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Enter Video URLs</div>
                                    <Field
                                        name="profileVideoUrl1"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.profileVideoUrl1 && errors.profileVideoUrl1}
                                        helperText={touched.profileVideoUrl1 && errors.profileVideoUrl1}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="profileVideoUrl2"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.profileVideoUrl2 && errors.profileVideoUrl2}
                                        helperText={touched.profileVideoUrl2 && errors.profileVideoUrl2}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="profileVideoUrl3"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.profileVideoUrl3 && errors.profileVideoUrl3}
                                        helperText={touched.profileVideoUrl3 && errors.profileVideoUrl3}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Social Media URL</div>
                                    <Field
                                        name="fb"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.fb && errors.fb}
                                        helperText={touched.fb && errors.fb}
                                        placeholder="Facebook" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="linkedin"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.linkedin && errors.linkedin}
                                        helperText={touched.linkedin && errors.linkedin}
                                        placeholder="Linkedin" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="insta"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.insta && errors.insta}
                                        helperText={touched.insta && errors.insta}
                                        placeholder="Instagram" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="tw"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.tw && errors.tw}
                                        helperText={touched.tw && errors.tw}
                                        placeholder="Twitter" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="youtube"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.youtube && errors.youtube}
                                        helperText={touched.youtube && errors.youtube}
                                        placeholder="Youtube" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="other"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.other && errors.other}
                                        helperText={touched.other && errors.other}
                                        placeholder="Other" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.stepperButton} type="submit" >Next <img src={triangleLogo} alt="logo" className={classes.stepperButtonLogo} /></Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

ProfessionalInfo.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleStepperNext: PropTypes.func.isRequired
};


