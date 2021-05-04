import { makeStyles } from '@material-ui/core';
import backgroundImage from '../images/BackgroundImage.png'

const useStyle = makeStyles(theme => ({
    main: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    gridContainer: {
        height: '100%',
        width: '100%',
    },
    rightGrid: {
        display: 'flex',
        justifyContent: 'center',
        border: '3px solid #00839B',
        borderRadius: '50px 0px 0px 50px',
        margin: '0 0 0 auto',
        background: '#FFFFFF',
        opacity: '0.95',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '3px',
        },
    },
    sigin_register_container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5% 6%'
    },
    sign_in: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#013C44',
        fontWeight: 'bold',
        fontStyle: 'normal',
        width: '88px',
        height: '39px',
        background: 'rgba(102, 181, 195, 0.15)',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        borderRadius: '7px',

    },
    register: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        width: '78px',
        height: '12px',
        color: '#013C44',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontSize: '16px',
        fontStyle: 'normal',
        margin: 'auto',


    },
    stepper: {
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "#04A9C8",
            // fontSize: "36px",
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "#04A9C8"
        },
        "& .makeStyles-root-7 .MuiStepIcon-root": {
            fontSize: "36px"
        },
        "& .MuiStepIcon-root": {
            color: "#04A9C8"
        },
        "& .MuiStepLabel-label.MuiStepLabel-active": {
            color: "#04A9C8"
        },
        "& .MuiStepLabel-label": {
            color: "#04A9C8"
        },
        "& .MuiStepConnector-line": {
            border: '1px solid #04A9C8'
        }
    },
    primaryLabel: {
        color: '#013C44',
        fontStyle: 'normal',
        fontSize: '18px',
        lineHeight: '23px',
        letterSpacing: '-0.291346px',
        marginBottom: '5px',
    },
    primaryInput: {
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
    },
    DateInput: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #66B5C3',
            opacity: '0.95',
            textTransform: 'uppercase'
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
    },
    dropDownInput: {
        "& .MuiSelect-outlined.MuiSelect-outlined": {
            color: '#00839B'
        },
        "& .MuiPaper-root": {
            // color: 'red !important',
        }
    },
    uploadLabel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '91px',
        height: '91px',
        cursor: 'pointer',
        border: '1px solid #00839B',
        background: '#DBE4F1',
        borderRadius: '50%',
    },
    uploadButton: {
        position: 'absolute',
        opacity: '0',
        zIndex: -1,
    },
    uploadContainer: {
        width: '288px',
        marginLeft: '60px',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    uploadHeading: {
        color: '#013C44',
        fontSize: '20px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: '-0.291346px',
        marginBottom: '10px'
    },
    uploadInstruction: {
        textAlign: 'justify',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '19px',
        fontWeight: 'normal',
        letterSpacing: '-0.291346px',
        color: 'rgba(4, 102, 115, 0.5)'
    },
    stepperButton: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#04A9C8',
        color: '#FFFFFF',
        fontSize: '25px',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: 'auto',
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
    },
    stepperButtonLogo: {
        marginLeft: '60px',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '40px',
            width: '10px'
        }

    },
    uploadButton1: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        padding: '0 26px',
        fontSize: '18px',
        textTransform: 'capitalize',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        margin: '10px 0 20px 0',
        width: 'auto',
        height: '4.625rem',
        backgroundColor: '#00839B',
        borderRadius: '15px',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        '&:hover': {
            backgroundColor: '#04A9C8',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: 'auto',
            height: '3.5rem',
        },
    },
    labelBold: {
        fontWeight: 'bold',
        color: '#013C44',
        lineHeight: '22px',
        fontSize: '18px'
    }




}))


export { useStyle };










