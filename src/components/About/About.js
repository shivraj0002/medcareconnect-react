import React from 'react';
import { Container, Typography, Grid, Paper, styled } from '@mui/material';
// import doctorImage from './doctor.jpg';
import stethoscopeIcon from './../../assets/SVG/StethoscopeIcon.svg';

const doctorImage = 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled('img')`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledIcon = styled('img')`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const AboutUsPage = () => {
    return (
        <StyledContainer maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StyledPaper variant='outlined'>
                        <StyledImage src={doctorImage} alt="Doctor" />
                        <Typography variant="h4" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" align="center">
                            <StyledIcon src={stethoscopeIcon} alt="Stethoscope Icon" />
                            Welcome to our medical website! We are dedicated to providing high-quality healthcare services to our patients. Our team of experienced doctors, nurses, and staff work together to ensure that you receive the best possible care.
                        </Typography>
                        <Typography variant="body1" align="center">
                            At our medical center, we offer a wide range of medical services, including preventive care, diagnostics, treatments, and personalized care plans. We believe in a patient-centered approach, where your health and well-being are our top priorities.
                        </Typography>
                        <Typography variant="body1" align="center">
                            Our state-of-the-art facilities and advanced medical equipment enable us to deliver accurate diagnoses and effective treatments. We stay up-to-date with the latest medical advancements and follow evidence-based practices to ensure the best outcomes for our patients.
                        </Typography>
                        <Typography variant="body1" align="center">
                            Whether you need a routine check-up, ongoing care for a chronic condition, or specialized medical attention, our team is here to help. We value open communication and encourage you to ask questions and actively participate in your healthcare decisions.
                        </Typography>
                        <Typography variant="body1" align="center">
                            Thank you for choosing our medical center. We look forward to serving you and helping you achieve optimal health and wellness. If you have any questions or would like to schedule an appointment, please don't hesitate to contact us.
                        </Typography>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default AboutUsPage;
