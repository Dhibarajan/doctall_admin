import React from 'react';
import Checkbox1 from '../../icons/Checkbox1.png';
import Checkbox2 from '../../icons/Checkbox2.png';
import { Checkbox, makeStyles } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LabelText from '../LabelText/LabelText';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        "& .MuiCheckbox-root": {
            color: '#00839B',
        },
        "& .MuiCheckbox-colorSecondary.Mui-checked": {
            color: '#00839B',
        }


    },
    input: {
        appearance: 'none',
        WebkitAppearance: 'none',
        height: '32px',
        width: '32px',
        backgroundImage: `url(${Checkbox1})`,
        cursor: 'pointer',
        backgroundPosition: 'center',
        backgroundSize: 'contain    '
    },

}))

function CheckBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} style={{ transform: "scale(1.5)" }} id="check" />
        </div>
    )
}

export default CheckBox
