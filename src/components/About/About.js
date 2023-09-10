import React from "react";
import { Container, Typography, Grid, Paper, styled } from "@mui/material";
// import doctorImage from './doctor.jpg';
import stethoscopeIcon from "./../../assets/SVG/StethoscopeIcon.svg";

const doctorImage =
  "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
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

const StyledImage = styled("img")`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledIcon = styled("img")`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const AboutUsPage = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper variant="outlined">
            <StyledImage src={doctorImage} alt="Doctor" />
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" align="center">
              <StyledIcon src={stethoscopeIcon} alt="Stethoscope Icon" />
              Vanshan Pharmaceuticals stands as a vibrant and rapidly expanding
              pharmaceutical company in India, having been established in 2018.
              Our unwavering commitment revolves around the provision of
              top-tier medicines, characterized by uncompromising quality.
              Within the medical landscape, we have fortified our presence with
              a focus on Gynecology, Pediatrics, Orthopedics, Dental, and
              General Medicine, offering a comprehensive array of solutions.
            </Typography>
            <Typography variant="body1" align="center">
              What sets Vanshan Pharmaceuticals apart is our relentless
              dedication to quality assurance. Every product in our portfolio
              undergoes rigorous clinical testing to ensure suitability across
              diverse geographical areas, age groups, and for individuals from
              all walks of life, all while maintaining the highest standards of
              quality.
            </Typography>
            <Typography variant="body1" align="center">
              Over the years, we have forged strong bonds with esteemed medical
              professionals, garnering valuable prescriptions that have, in
              turn, fostered relationships with satisfied customers who have
              entrusted us with their healthcare needs. At Vanshan
              Pharmaceuticals, our journey is guided by the pursuit of
              excellence, quality, and the wellbeing of all those we serve.
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutUsPage;
