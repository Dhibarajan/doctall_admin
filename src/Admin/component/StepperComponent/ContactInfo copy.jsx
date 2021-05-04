import React from 'react'
import { Button, Grid, Select, TextField } from '@material-ui/core';
import { useStyle } from '../../style/style';
import MuiPhoneNumber from 'material-ui-phone-number';
import triangleLogo from '../../images/icons/triangle.png'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const ContactInfo = ({ handleStepperNext, setContactInfo, contactInfo }) => {
    const classes = useStyle();
    const [mobile, setMobile] = React.useState('')
    const [country, setCountry] = React.useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    function handleOnChange(value) {
        setMobile(value);
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const contactInfo_validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10),
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        postcode: Yup.number().required('Required').min(6)
    })

    return (
        <div style={{ width: '100%' }}>
            <Formik
                initialValues={contactInfo}
                onSubmit={(value) => {
                    const { email, address, city, state, postcode, country } = value;
                    const contactInfo = {
                        email, mobile, address, city, state, postcode, country
                    }
                    setContactInfo(contactInfo)
                    handleStepperNext()
                }}
                validationSchema={contactInfo_validationSchema}
            >
                {
                    ({ errors, touched }) => (
                        <Form style={{ width: '70%', margin: 'auto' }} autoComplete="off">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Email address</div>
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
                                    <div className={classes.primaryLabel}>Mobile number</div>
                                    <MuiPhoneNumber
                                        name="mobile"
                                        defaultCountry={'us'}
                                        onChange={handleOnChange}
                                        fullWidth
                                        variant="outlined"
                                        required={true}
                                        className={classes.primaryInput}
                                        error={touched.mobile && errors.mobile}
                                        helperText={touched.mobile && errors.mobile}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Address</div>
                                    <Field
                                        fullWidth
                                        name="address"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        placeholder="House name/number"
                                        error={touched.address && errors.address}
                                        helperText={touched.address && errors.address}
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="city"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        placeholder="City"
                                        error={touched.city && errors.city}
                                        helperText={touched.city && errors.city}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="state"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        placeholder="State"
                                        error={touched.state && errors.state}
                                        helperText={touched.state && errors.state}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field fullWidth
                                        name="postcode"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}
                                        placeholder="Postal code"
                                        error={touched.postcode && errors.postcode}
                                        helperText={touched.postcode && errors.postcode}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Select name="country" value={country} onChange={handleCountry} variant="outlined" fullWidth className={classes.primaryInput}>
                                        <option aria-label="None" value="" disabled selected hidden>Country</option>
                                        <option value="USA">USA</option>
                                        <option value="India">India</option>
                                        <option value="Other">Other</option>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button className={classes.stepperButton} type="submit">Next <img src={triangleLogo} alt="logo" className={classes.stepperButtonLogo} /></Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

ContactInfo.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    handleStepperNext: PropTypes.func.isRequired
};

