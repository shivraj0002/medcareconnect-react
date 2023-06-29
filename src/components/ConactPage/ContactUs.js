import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, TextField, Button, styled, Box } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const backgroundImage = 'https://images.unsplash.com/photo-1567333971983-7ba18485eaad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoYXJtYWNpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';

const StyledContainer = styled(Box)`
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;



const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled('span')`
  margin-right: 10px;
`;

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    };

    return (
        <StyledContainer>
            <Container maxWidth="lg">


                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <StyledPaper>
                            <Typography variant="h4" gutterBottom>
                                Contact Us
                            </Typography>
                            <IconWrapper>
                                <Icon>
                                    <LocationOnIcon />
                                </Icon>
                                <Typography variant="body1">123 Medical Avenue, City, Country</Typography>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon>
                                    <PhoneIcon />
                                </Icon>
                                <Typography variant="body1">+1 (123) 456-7890</Typography>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon>
                                    <EmailIcon />
                                </Icon>
                                <Typography variant="body1">info@medicalwebsite.com</Typography>
                            </IconWrapper>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />

                                <Button type="submit" variant="contained" color="primary">
                                    Send Message
                                </Button>
                            </form>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>
        </StyledContainer>)
}
export default ContactUs
