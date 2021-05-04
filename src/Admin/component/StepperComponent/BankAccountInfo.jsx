import React from 'react';
import { Button, Grid, Select, TextField } from '@material-ui/core';
import triangleLogo from '../../images/icons/triangle.png';
import { useStyle } from '../../style/style';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
export const BankAccountInfo = ({ handleStepperNext, setBankingAccountInfo, bankingAccountInfo }) => {
    const classes = useStyle();

    const bankAccountInfoValidationSchema = Yup.object().shape({
        // acc_name: Yup.string().required('Required'),
        // houseNumberName: Yup.string().required('Required'),
        // streetName: Yup.string().required('Required'),
        // area: Yup.string().required('Required'),
        // bank_name: Yup.string().required('Required'),
        // branch: Yup.string().required('Required'),
        // acc_number: Yup.string().required('Required'),
        // acc_type: Yup.string().required('Required'),
        // routingNumber: Yup.string().required('Required'),
        // bankSwiftIcd: Yup.string().required('Required'),
        // bankIban: Yup.string().required('Required'),
    })
    return (
        <div style={{ width: '100%' }}>
            <Formik
                initialValues={bankingAccountInfo}
                onSubmit={value => {
                    setBankingAccountInfo(value)
                    handleStepperNext()
                }}
                validationSchema={bankAccountInfoValidationSchema}
            >
                {
                    ({ errors, touched }) => (
                        <Form style={{ width: '70%', margin: 'auto' }}>
                            <Grid spacing={3} container>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Name of account</div>
                                    <Field
                                        name="acc_name"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.acc_name && errors.acc_name}
                                        helperText={touched.acc_name && errors.acc_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Residential address</div>
                                    <Field
                                        name="houseNumberName"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.houseNumberName && errors.houseNumberName}
                                        helperText={touched.houseNumberName && errors.houseNumberName}
                                        placeholder="House Number/Name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="streetName"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.streetName && errors.streetName}
                                        helperText={touched.streetName && errors.streetName}
                                        placeholder="Street Name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="area"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.area && errors.area}
                                        helperText={touched.area && errors.area}
                                        placeholder="Area/Village Town" />
                                </Grid>

                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Bank name</div>
                                    <Field
                                        name="bank_name"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.bank_name && errors.bank_name}
                                        helperText={touched.bank_name && errors.bank_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Bank branch</div>
                                    <Field
                                        name="branch"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.branch && errors.branch}
                                        helperText={touched.branch && errors.branch}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Account number</div>
                                    <Field
                                        name="acc_number"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.acc_number && errors.acc_number}
                                        helperText={touched.acc_number && errors.acc_number}
                                    />
                                </Grid><Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Account type</div>
                                    <Field
                                        name="acc_type"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.acc_type && errors.acc_type}
                                        helperText={touched.acc_type && errors.acc_type}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Routing number</div>
                                    <Field
                                        name="routingNumber"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.routingNumber && errors.routingNumber}
                                        helperText={touched.routingNumber && errors.routingNumber}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Bank SWIFT or BIC code (if applicable)</div>
                                    <Field
                                        name="bankSwiftIcd"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.bankSwiftIcd && errors.bankSwiftIcd}
                                        helperText={touched.bankSwiftIcd && errors.bankSwiftIcd}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Bank IBAN (if applicable)</div>
                                    <Field
                                        name="bankIban"
                                        fullWidth
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.bankIban && errors.bankIban}
                                        helperText={touched.bankIban && errors.bankIban}
                                    />
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

