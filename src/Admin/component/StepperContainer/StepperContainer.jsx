import React from 'react';
import { useStyle } from '../../style/style';
// Stepper component
import { PersonalInfo } from '../StepperComponent/PersonalInfo';
import { ContactInfo } from '../StepperComponent/ContactInfo';
import { ProfessionalInfo } from '../StepperComponent/ProfessionalInfo';
import { BankAccountInfo } from '../StepperComponent/BankAccountInfo';
import HrInfo from '../StepperComponent/HrInfo';
import Confirm from '../StepperComponent/Confirm'
import { Step, StepLabel, Stepper } from '@material-ui/core';
function StepperContainer() {
    const classes = useStyle()
    const [activeStep, setActiveStep] = React.useState(0);
    const [personalInfo, setPersonalinfo] = React.useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        languages: '',
        profile_pic: '',
        sign_pic: '',

    })
    const [contactInfo, setContactInfo] = React.useState({
        contactEmail: '',
        contactPhone: '',
        contactHouseno: '',
        contactCity: '',
        contactState: '',
        contactpostCode: '',
        contactCountry: ''
    });


    const [professionalInfo, setProfessionalInfo] = React.useState({
        professionalname: '',
        speciality: '',
        bio: '',
        folionumber: '',
        consultation_fee: '',
        profileVideoUrl1: '',
        profileVideoUrl2: '',
        profileVideoUrl3: '',
        fb: '',
        insta: '',
        linkedin: '',
        tw: '',
        youtube: '',
        other: '',
    })

    const [bankingAccountInfo, setBankingAccountInfo] = React.useState({
        acc_name: '',
        houseNumberName: '',
        streetName: '',
        area: '',
        bank_name: '',
        branch: '',
        acc_number: '',
        acc_type: '',
        routingNumber: '',
        bankSwiftIcd: '',
        bankIban: '',

    })

    const [hrinfo, setHrinfo] = React.useState({
        full_name: '',
        houseNumber: '',
        city: '',
        state: '',
        postalcode: '',
        country: '',
        email: '',
        mobile: '',
        emgfull_name: '',
        emghouseNumber: '',
        emgcity: '',
        emgstate: '',
        emgpostalcode: '',
        emgcountry: '',
        emgemail: '',
        emgphone: '',
        ProfessionalIndemnity: '',
        dateAdded: '',
        li_authority: '',
        dateIssue: '',
        dateExpiry: ''




    })

    // console.log(personalInfo)
    // console.log(contactInfo)
    // console.log(professionalInfo)
    // console.log(bankingAccountInfo)
    // console.log(hrinfo)

    function getSteps() {
        return ["Personal info", "Contact info", "Professional info", "Bank account info", "HR info"]
    }
    const steps = getSteps();

    const handleStepperNext = () => setActiveStep(preventActiveStep => preventActiveStep + 1);


    // multiple form component
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <PersonalInfo handleStepperNext={handleStepperNext} setPersonalinfo={setPersonalinfo} personalInfo={personalInfo} />
            case 1:
                return <ContactInfo handleStepperNext={handleStepperNext} setContactInfo={setContactInfo} contactInfo={contactInfo} />
            case 2:
                return <ProfessionalInfo handleStepperNext={handleStepperNext} setProfessionalInfo={setProfessionalInfo} professionalInfo={professionalInfo} />;
            case 3:
                return <BankAccountInfo handleStepperNext={handleStepperNext} setBankingAccountInfo={setBankingAccountInfo} bankingAccountInfo={bankingAccountInfo} />;
            case 4:
                return <HrInfo handleStepperNext={handleStepperNext} hrinfo={hrinfo} setHrinfo={setHrinfo} personalInfo={personalInfo} />;
            default: return <Confirm personalInfo={personalInfo} contactInfo={contactInfo} professionalInfo={professionalInfo} bankingAccountInfo={bankingAccountInfo} hrinfo={hrinfo} />
        }

    }

    return (
        <div className={classes.stepper} style={{ display: 'block', width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <>
                {getStepContent(activeStep)}
            </>
        </div>
    )
}

export default StepperContainer

