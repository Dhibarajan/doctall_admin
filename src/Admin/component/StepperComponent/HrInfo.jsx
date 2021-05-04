import React from 'react'
import { Button, Checkbox, Grid, Select, TextField, Dialog, makeStyles, DialogContent } from '@material-ui/core';
import { useStyle } from "../../style/style";
import MuiPhoneNumber from 'material-ui-phone-number';
import Tick from '../../images/icons/Tick.png'
import upload from '../../images/icons/upload.png';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// upload documents components
import { DocumentsUpload } from './DocumentsUpload';


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
        "& .MuiCheckbox-root": {
            color: '#00839B',
        },
        "& .MuiCheckbox-colorSecondary.Mui-checked": {
            color: '#00839B',
        }
    }
}))



function HrInfo({ handleStepperNext, hrinfo, setHrinfo, personalInfo }) {
    const classes = useStyle();
    const classes2 = useStyle2();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [uploadDocumentDetails, setUdsploadDocumentDetails] = React.useState({
        docName: '',

    })


    // const [docDetails, setDocDetails] = React.useState([])
    const [professional_indemnity, setProInd] = React.useState(false)


    // const [edu, setEdu] = React.useState(false)
    // const [prof, setProf] = React.useState(false)
    // const [per, setPer] = React.useState(false)
    // const [lic, setLic] = React.useState(false)
    const [docStatus, setdocStatus] = React.useState([])
    // const docStatus = []
    const { firstName } = personalInfo;

    const documentsHandleFunction = async (data) => {
        const { _id, docType } = data
        var obj = {
            _id, docType
        }

        docStatus.push(obj)
    }











    // country
    const [country, setCountry] = React.useState('');
    const [emgcountry, setEmgCountry] = React.useState('');

    // handle dialog open and close
    const [open, setOpen] = React.useState(false);

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleemgCountry = (event) => {
        setEmgCountry(event.target.value)
    }


    const [mobile, setMobile] = React.useState('')
    const [emgphone, setemgphone] = React.useState('')
    // country code
    function handleOnChange(value) {
        setMobile(value);
    }

    function handleEmgPhone(value) {
        setemgphone(value)
    }

    // DialogBox open
    const handleDialogOpen = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };

    const hrInfoValidationSchema = Yup.object().shape({
        // full_name: Yup.string().required('Required'),
        // address: Yup.string().required('Required'),
        // houseNumber: Yup.string().required('Required'),
        // city: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email'),
        // mobile: Yup.string().required('Required'),
        // emgfull_name: Yup.string().required('Required'),
        // emgaddress: Yup.string().required('Required'),
        // emghouseNumber: Yup.string().required('Required'),
        // emgcity: Yup.string().required('Required'),
        // emgstate: Yup.string().required('Required'),
        // emgpostalcode: Yup.string().required('Required'),
        // emgcountry: Yup.string().required('Required'),
        emgemail: Yup.string().email('Invalid email'),
        // emgphone: Yup.string().required('Required'),
        // ProfessionalIndemnity: Yup.string().required('Required'),
        // dateAdded: Yup.string().required('Required'),
        // license: Yup.string().required('Required'),
        // li_authority: Yup.string().required('Required'),
        // dateIssue: Yup.string().required('Required'),
        // dateExpiry: Yup.string().required('Required')
    })


    return (
        <div style={{ width: '100%' }} className={classes2.root}>
            <Formik
                initialValues={hrinfo}
                onSubmit={value => {

                    const { full_name, houseNumber, city, state, postalcode, email, emgfull_name, emghouseNumber, emgcity, emgstate, emgpostalcode, emgemail, dateAdded, li_authority, dateIssue, dateExpiry } = value;
                    const obj = {
                        full_name, houseNumber, city, state, postalcode, country, email, mobile, emgfull_name, emghouseNumber, emgcity, emgstate, emgpostalcode, emgcountry, emgemail, emgphone, professional_indemnity, dateAdded, li_authority, dateIssue, dateExpiry, docStatus
                    }

                    setHrinfo(obj)
                    handleStepperNext()
                }}
                validationSchema={hrInfoValidationSchema}
            >
                {
                    ({ errors, touched }) => (
                        <Form style={{ width: '70%', margin: 'auto' }}>
                            <Grid spacing={3} container>
                                <Grid item xs={12}>
                                    <label className={classes.labelBold}>Next of Kin</label>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Full name</div>
                                    <Field
                                        fullWidth
                                        name="full_name"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.full_name && errors.full_name}
                                        helperText={touched.full_name && errors.full_name}
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Address</div>
                                    <Field
                                        fullWidth
                                        name="houseNumber"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.houseNumber && errors.houseNumber}
                                        helperText={touched.houseNumber && errors.houseNumber}
                                        placeholder="House name/number" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="city"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.city && errors.city}
                                        helperText={touched.city && errors.city}
                                        placeholder="City" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="state"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.state && errors.state}
                                        helperText={touched.state && errors.state}
                                        placeholder="State" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="postalcode"
                                        className={classes.primaryInput}
                                        variant="outlined"
                                        as={TextField}

                                        error={touched.postalcode && errors.postalcode}
                                        helperText={touched.postalcode && errors.postalcode}
                                        placeholder="Postal code" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Select name="country" value={country} onChange={handleCountry} variant="outlined" fullWidth className={classes.primaryInput} >
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
                                    <div className={classes.primaryLabel} >Mobile number</div>
                                    <MuiPhoneNumber defaultCountry={'us'} onChange={handleOnChange} fullWidth variant="outlined" className={classes.primaryInput} />
                                </Grid>
                                <Grid item xs={12}>
                                    <label className={classes.labelBold}>Emergency Contact</label>
                                    <div style={{ width: 'auto', height: '10px' }}></div>
                                    <div className={classes.primaryLabel} style={{ width: '70%' }}>
                                        Ignore these fields if the Next of Kin information is the same as the Emergency Contact
                            </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Full name</div>
                                    <Field
                                        fullWidth
                                        name="emgfull_name"
                                        variant="outlined"
                                        className={classes.primaryInput}

                                        as={TextField}
                                        error={touched.emgfull_name && errors.emgfull_name}
                                        helperText={touched.emgfull_name && errors.emgfull_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Address</div>
                                    <Field
                                        fullWidth
                                        name="emghouseNumber"
                                        variant="outlined"
                                        className={classes.primaryInput}

                                        as={TextField}
                                        error={touched.emghouseNumber && errors.emghouseNumber}
                                        helperText={touched.emghouseNumber && errors.emghouseNumber}
                                        placeholder="House name/number" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="emgcity"
                                        variant="outlined"
                                        className={classes.primaryInput}

                                        as={TextField}
                                        error={touched.emgcity && errors.emgcity}
                                        helperText={touched.emgcity && errors.emgcity}
                                        placeholder="City" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="emgstate"
                                        variant="outlined"
                                        className={classes.primaryInput}

                                        as={TextField}
                                        error={touched.emgstate && errors.emgstate}
                                        helperText={touched.emgstate && errors.emgstate}
                                        placeholder="State" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        name="emgpostalcode"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.emgpostalcode && errors.emgpostalcode}
                                        helperText={touched.emgpostalcode && errors.emgpostalcode}
                                        placeholder="Postal code" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Select name="country" value={emgcountry} onChange={handleemgCountry} variant="outlined" fullWidth className={classes.primaryInput} >
                                        <option aria-label="None" value="" disabled selected hidden>Country</option>
                                        <option value="USA">USA</option>
                                        <option value="India">India</option>
                                        <option value="Other">Other</option>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Email address</div>
                                    <Field
                                        fullWidth
                                        name="emgemail"
                                        variant="outlined"
                                        className={classes.primaryInput}

                                        as={TextField}
                                        error={touched.emgemail && errors.emgemail}
                                        helperText={touched.emgemail && errors.emgemail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.primaryLabel}>Mobile number</div>
                                    <MuiPhoneNumber defaultCountry={'us'} onChange={handleEmgPhone} fullWidth variant="outlined" className={classes.primaryInput} />
                                </Grid>
                                {/* Changes */}
                                <Grid item xs={12}>
                                    <label className={classes.labelBold}>Professional Indemnity</label>
                                    <div style={{ width: 'auto', height: '10px' }}></div>
                                    <div style={{ display: 'flex' }}>
                                        <Checkbox className={classes.checkbox} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" checked={professional_indemnity} onClick={() => setProInd(!professional_indemnity)} />
                                        <div className={classes.primaryLabel} style={{ width: '70%' }}>This confirms that Dr. {firstName} has been added to Doctall Group PI Policy</div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Date added</div>
                                    <Field
                                        fullWidth
                                        variant="outlined"
                                        name="dateAdded"
                                        type="date"

                                        as={TextField}
                                        className={classes.DateInput}
                                        error={touched.dateAdded && errors.dateAdded}
                                        helperText={touched.dateAdded && errors.dateAdded}

                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <label className={classes.labelBold}>Doctors License</label>
                                    <div style={{ width: 'auto', height: '10px' }}></div>
                                    <div className={classes.primaryLabel}>Licensing Authority</div>
                                    <Field
                                        fullWidth
                                        name="li_authority"
                                        variant="outlined"
                                        className={classes.primaryInput}
                                        as={TextField}

                                        error={touched.license && errors.license}
                                        helperText={touched.license && errors.license}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Date of Issue</div>
                                    <Field
                                        fullWidth
                                        variant="outlined"
                                        name="dateIssue"
                                        type="date"
                                        as={TextField}
                                        className={classes.DateInput}

                                        error={touched.dob && errors.dob}
                                        helperText={touched.dob && errors.dob}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.primaryLabel}>Date of Expiry</div>
                                    <Field
                                        fullWidth
                                        variant="outlined"
                                        name="dateExpiry"
                                        type="date"
                                        as={TextField}
                                        className={classes.DateInput}
                                        error={touched.dob && errors.dob}
                                        helperText={touched.dob && errors.dob}


                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <label className={classes.labelBold}>Required documents</label>
                                    <div style={{ width: 'auto', height: '10px' }}></div>
                                    <div className={classes.primaryLabel} style={{ width: '70%' }}>
                                        Please ensure the documents listed below are all uploaded and check them when uploaded.</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className={classes.uploadButton1} onClick={handleDialogOpen} >
                                    Upload Documents
                                    <img src={upload} alt="upload" style={{ marginLeft: '20px' }} />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Educational Certifications</div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Professional Certifications</div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Personal Identification (International Passport, National ID, Voters Card, etc.)</div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Professional Licenses</div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Proof of Address (Utility Bill, Phone Bill etc. not older than 3 months)</div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox className={classes.checkbox} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
                                    <div className={classes.primaryLabel} >Curriculum Vitae</div>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div style={{ width: 'auto', height: '10px' }}></div>
                                <Button className={classes.stepperButton} style={{ textTransform: 'capitalize' }} type="submit">Create Account <img src={Tick} alt="logo" className={classes.stepperButtonLogo} /></Button>
                            </Grid>


                        </Form>
                    )
                }
            </Formik>

            <Dialog
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
                open={open}
                // fullScreen={true}
                maxWidth="lg"
            >
                <DialogContent style={{ backgroundColor: '#F0F5F5', }}>
                    <DocumentsUpload uploadDocumentDetails={uploadDocumentDetails} documentsHandleFunction={documentsHandleFunction} />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default HrInfo
