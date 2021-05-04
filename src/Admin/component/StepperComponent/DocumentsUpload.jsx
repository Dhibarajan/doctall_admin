import React from 'react'
import { Grid, TextField, makeStyles, Container, Select, Button, Dialog } from '@material-ui/core'
import { Field, Form, Formik } from 'formik';
import { useStyle } from "../../style/style";
import * as Yup from 'yup';
import uploadDocument from '../../images/icons/uploadDocument.png';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import UploadSuccessfull from './UploadSuccessfull';


const useStyle2 = makeStyles(theme => ({
    root: {
        width: '700px',
        [theme.breakpoints.down("sm")]: {
            width: '400px'
        },
        // padding: '20px 40px',

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
            // color: '#00839B',
            // textTransform: 'uppercase',

        }


    },
    uploadDocumentButton: {
        display: 'flex',
        // justifyContent: 'space-between',
        background: '#04A9C8',
        color: '#FFFFFF',
        fontSize: '25px',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: '100%',
        // textAlign: 'left',
        textTransform: 'capitalize',
        height: '74px',
        borderRadius: '15px',
        padding: '0 30px',
        marginBottom: '20px',
        '&:hover': {
            backgroundColor: '#00839B',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: '10rem',
            height: '3.5rem',
        },
    }

}))

export const DocumentsUpload = ({ uploadDocumentDetails, documentsHandleFunction }) => {
    const classes = useStyle();
    const classes2 = useStyle2();
    // const [selectDocument, setSelectDocument] = React.useState('')
    const [progress, setProgress] = React.useState(0);
    const [progressBarComponent, setProgressBarComponent] = React.useState(false)
    const [handleCompleteStatus, setHandleCompleteStatus] = React.useState(false)
    const [docType, setDocType] = React.useState('')
    const [docName, setDocName] = React.useState('')
    const [docDate, setdocDate] = React.useState('')
    const [notes, setNotes] = React.useState('')

    const [docres, setDocres] = React.useState()


    const DocumentValidation = Yup.object().shape({
        // docName: Yup.string().required('Required'),
    })

    const handleProgressCompleteClose = () => {
        setHandleCompleteStatus(false)
    }

    function handleSelectDocument(event) {
        setDocType(event.target.value)
    }




    const UploadProgress = (percentCompleted) => {
        if (percentCompleted === 100) {
            setProgressBarComponent(false)
            setHandleCompleteStatus(true)
        } else {
            setProgressBarComponent(true)
        }
    }


    const handleDocumentSubmit = async ({ target: { files } }) => {
        const file = files[0]

        const formData = new FormData()

        formData.append('media', file)

        const config = {
            method: 'post',
            url: 'http://test-api.doctall.com/api/v1/upload/doctor-record',
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

        const res = await axios(config)



        const documentData = {
            docName, docType, docDate, notes, location: res.data.url
        }


        const config2 = {
            method: 'post',
            url: 'http://test-api.doctall.com/api/v1/upload/doctorDocumentDetails',
            headers: {
                'Content-Types': 'multipart/form-data',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlOTE3MGQ1ZjVmYjAwMTQ0MmI2NjMiLCJ1dWlkIjoiQ04tQ0M1MjBDODUiLCJncm91cCI6ImNvbnN1bWVyIiwiZnVsbF9uYW1lIjoic3Mgc3NzIiwic3Vic2NyaXB0aW9uIjpmYWxzZSwiaWF0IjoxNjE3ODU4OTI4fQ.29JtWwv8V1Mv9M4nMfAYfr6C-DYKnNKV6Rvv24VLQ-4'

            },
            data: documentData
        }

        const documentRes = await axios(config2)

        documentsHandleFunction(documentRes.data)


    }

    return (
        <div className={classes2.root} >
            <Formik initialValues={uploadDocumentDetails}
                onSubmit={value => console.log(value)}
                validationSchema={DocumentValidation}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <Container style={{ padding: '30px 80px' }}>
                                <Grid spacing={5} container>
                                    <Grid item xs={12}>
                                        <label className={classes.labelBold} style={{ fontSize: '25px' }}>Upload Form Details</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.primaryLabel} style={{ fontWeight: 'bold' }}>Document Name:</div>
                                        <Field
                                            fullWidth
                                            name="docName"
                                            variant="outlined"
                                            value={docName}
                                            onChange={e => setDocName(e.target.value)}
                                            as={TextField}
                                            error={touched.docName && errors.docName}
                                            helperText={touched.docName && errors.docName}
                                        />

                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.primaryLabel} style={{ fontWeight: 'bold' }} >Type of Document:</div>
                                        <Select name="selectDocument" value={docType} onChange={handleSelectDocument} variant="outlined" fullWidth required={true}>
                                            <option aria-label="None" value="" disabled selected hidden>Select type of document</option>
                                            <option value="EducationalCertifications">Educational Certifications</option>
                                            <option value="ProfessionalCertifications ">Professional Certifications </option>
                                            <option value="PersonalIdentification">Personal Identification (International Passport, National ID etc.)</option>
                                            <option value="ProfessionalLicenses">Professional Licenses Proof of Address (Utility Bill, Phone Bill etc. not older than 3 months)</option>
                                            <option value="CurriculumVitae">Curriculum Vitae</option>
                                        </Select>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className={classes.primaryLabel} style={{ fontWeight: 'bold' }}>Date on the Document (optional):</div>
                                        <Field
                                            fullWidth
                                            variant="outlined"
                                            name="docDate"
                                            type="date"
                                            value={docDate}
                                            onChange={e => setdocDate(e.target.value)}
                                            as={TextField}
                                            className={classes.DateInput}
                                            error={touched.docDate && errors.docDate}
                                            helperText={touched.docDate && errors.docDate}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.primaryLabel} style={{ fontWeight: 'bold' }}>Additional Notes (optional):</div>
                                        <Field
                                            fullWidth
                                            name="notes"
                                            variant="outlined"
                                            value={notes}
                                            onChange={e => setNotes(e.target.value)}
                                            as={TextField}
                                            placeholder="Please leave any additional Information of document here. Character limit: 60"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label className={classes.labelBold}>Max file size: 5MB</label>
                                        <div className={classes.primaryLabel} ><span className={classes.labelBold}>Accepted Formats:</span> pdf, jpeg, png, docx, tiff, xml, bmp,</div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <label className={classes2.uploadDocumentButton} style={{ display: 'flex', alignItems: 'center' }} htmlFor="documentUpload">
                                            <div>Upload document </div><img src={uploadDocument} alt="logo" className={classes.stepperButtonLogo} />
                                            <input type="file" className={classes.uploadButton} id="documentUpload" onChange={handleDocumentSubmit} />
                                            <input type="submit" className={classes.uploadButton} id="documentUpload" />
                                        </label>


                                    </Grid>
                                </Grid>
                            </Container>
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

        </div>
    )
}


