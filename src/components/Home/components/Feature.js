import React from 'react'
import Paper from '@mui/material/Paper'
import { deepOrange } from '@mui/material/colors';
import { Typography } from '@mui/material';

const Feature = ({ title, logo, desc }) => {
    return (
        <Paper variant="elevation" elevation={1} sx={{ p: '15px', minWidth: '300px', m: '10px', width: '320px' }}>
            <img src={logo} alt='' height={'65px'} width={'65px'} />
            <Typography variant="body1" color={deepOrange[600]} fontFamily={'Poppins'} fontSize={'1.2rem'} gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" color="initial" fontFamily={'Poppins'}>
                {desc}
            </Typography>
        </Paper>
    )
}

export default Feature