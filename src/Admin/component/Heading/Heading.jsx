import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme =>({
    heading:{
        display: 'block',
        fontSize: '1.875rem',
        fontWeight: 'bold',
        lineHeight: '2.25rem',
        letterSpacing: '-0.291346px',
        color: '#00839B',
        marginBottom: '8%',
        textAlign: 'center'
    }
}))

function Heading({heading}) {
    const classes = useStyle()
    return (
        <div>
            <Typography variant="h4" component="h3" className={classes.heading} >{heading}</Typography>
        </div>
    )
}

export default Heading
