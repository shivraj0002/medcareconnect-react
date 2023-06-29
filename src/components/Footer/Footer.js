import React from 'react'
import Box from '@mui/material/Box'
import { Grid, Stack, Typography, Container, Divider } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { deepOrange, grey } from '@mui/material/colors';

const Footer = () => {
    return (
        <Container maxWidth="lg" sx={{ bgcolor: grey[100] }}>
            <Box sx={{ bgcolor: grey[100] }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Stack direction={'row'} sx={{ color: 'black', height: '100%', width: '100%' }} alignItems={'center'}>
                            <AdbIcon sx={{ mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={1} columnSpacing={1}>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={deepOrange[600]} fontFamily={'Poppins'} fontSize={'1rem'} gutterBottom>

                                    Resources
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={deepOrange[600]} fontFamily={'Poppins'} fontSize={'1rem'} gutterBottom>
                                    Follow US
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={grey[900]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                                    Cantact US
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={grey[900]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                                    Instagram
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={grey[900]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                                    Request for Call
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" color={grey[900]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                                    Facebook
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    sx={{ bgcolor: 'white', color: 'white', mt: '10px', mb: '10px' }}
                />
                <Box width={'100%'}>
                    <Typography variant="body1" color={grey[900]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                        © 2023 All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer