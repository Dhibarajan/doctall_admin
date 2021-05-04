
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import icon from '../../images/icons/triangle.png'

const useStyle = makeStyles(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#04A9C8',
        color: '#FFFFFF',
        padding: '0 26px',
        fontSize: '18px',
        textTransform: 'capitalize',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: '14rem',
        height: '4.625rem',
        backgroundColor: '#04A9C8',
        borderRadius: '20px',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: '10rem',
            height: '3.5rem',
        },
    }
}))

function ButtonComponent({ btntext, width }) {
    const classes = useStyle()
    return (
        <div>
            <Button className={classes.button} style={{ width: `${width}` }}>
                {btntext}
                <img src={icon} alt="icon" />
            </Button>
        </div >
    )
}

export default ButtonComponent
