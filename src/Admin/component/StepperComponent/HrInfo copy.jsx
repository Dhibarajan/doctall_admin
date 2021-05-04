import React from 'react'
import { Button, Grid, Select, TextField } from '@material-ui/core';
import { useStyle } from "../../style/style";
import MuiPhoneNumber from 'material-ui-phone-number';
import triangleLogo from '../../images/icons/triangle.png'
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const HrInfo = ({ handleStepperNext, hrinfo, setHrinfo }) => {
    const classes = useStyle();
    // country
    const [country, setCountry] = React.useState('');
    const handleCountry = (event) => {
        setCountry(event.target.value)
    }
    const [state, setState] = React.useState('')
    // country code
    function handleOnChange(value) {
        setState(value);
    }

    const hrInfoValidationSchema = Yup.object().shape({
        full_name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        houseNumber: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        postalcode: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        mobile: Yup.string().required('Required'),
        emgfull_name: Yup.string().required('Required'),
        emgaddress: Yup.string().required('Required'),
        emghouseNumber: Yup.string().required('Required'),
        emgcity: Yup.string().required('Required'),
        emgstate: Yup.string().required('Required'),
        emgpostalcode: Yup.string().required('Required'),
        emgcountry: Yup.string().required('Required'),
        emgemail: Yup.string().required('Required'),
        emgphone: Yup.string().required('Required'),
        ProfessionalIndemnity: Yup.string().required('Required'),
        dateAdded: Yup.string().required('Required'),
        license: Yup.string().required('Required'),
        li_authority: Yup.string().required('Required'),
        dateIssue: Yup.string().required('Required'),
        dateExpiry: Yup.string().required('Required')
    })

    return (
        <div style={{ width: '100%' }}>
            <Formik
                initialValues={hrinfo}
                onSubmit={value => console.log(value)}
                validationSchema={hrInfoValidationSchema}
            >
                {({ errors, touched }) => {
                    <Form style={{ width: '70%', margin: 'auto' }}>
                        <Grid spacing={3} container>
                            <Grid item xs={12}>
                                <label>Next of Kin</label>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Full name</div>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Address</div>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    placeholder="House name/number" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    placeholder="City" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    placeholder="State" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    placeholder="Postal code" />
                            </Grid>
                            <Grid item xs={6}>
                                <Select name="country" value={country} onChange={handleCountry} variant="outlined" fullWidth className={classes.primaryInput}>
                                    <option aria-label="None" value="" disabled selected hidden>Country</option>
                                    <option value="USA">USA</option>
                                    <option value="India">India</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Email address</div>
                                <Field
                                    name="email"
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Mobile number</div>
                                <MuiPhoneNumber defaultCountry={'us'} onChange={handleOnChange} fullWidth variant="outlined" className={classes.primaryInput} />
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="">Emergency Contact</label>
                                <div className={classes.primaryLabel} style={{ width: '70%' }}>
                                    Ignore these fields if the Next of Kin information is the same as the Emergency Contact
                            </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Full name</div>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Address</div>
                                <Field
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    className={classes.primaryInput}
                                    as={TextField}
                                    error={touched.email && errors.email}
                                    helperText={touched.email && errors.email}
                                    placeholder="House name/number" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field name="city" type="text" placeholder="City" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field name="State" type="text" placeholder="State" />
                            </Grid>
                            <Grid item xs={6}>
                                <Field name="postcode" type="text" placeholder="Postal code" />
                            </Grid>
                            <Grid item xs={6}>
                                <Select name="country" value={country} onChange={handleCountry} variant="outlined" fullWidth className={classes.primaryInput}>
                                    <option aria-label="None" value="" disabled selected hidden>Country</option>
                                    <option value="USA">USA</option>
                                    <option value="India">India</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Email address</div>
                                <Field name="email" type="text" />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.primaryLabel}>Mobile number</div>
                                <MuiPhoneNumber defaultCountry={'us'} onChange={handleOnChange} fullWidth variant="outlined" className={classes.primaryInput} />
                            </Grid>

                        </Grid>

                    </Form>
                }}
            </Formik>

        </div>
    )
}

HrInfo.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleStepperNext: PropTypes.func.isRequired
};