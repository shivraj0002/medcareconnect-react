import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  styled,
  Box,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";

const backgroundImage =
  "https://images.unsplash.com/photo-1567333971983-7ba18485eaad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoYXJtYWNpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

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

const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled("span")`
  margin-right: 10px;
`;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
      console.log("Message:", message);

      const result = await emailjs.send(
        "service_cbfxuvi",
        "template_1mh4rhf",
        {
          from_name: name,
          to_name: "Vanshan Pharmaceuticals",
          message: `${message}, Customer Phone: ${phone}, Customer Email: ${email}`,
          reply_to: "Vanshan Pharmaceuticals Team",
        },
        "dBM9GTRyL8u8n1eUa"
      );

      // Reset form fields
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
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
                <Typography
                  variant="body1"
                  component={"a"}
                  href="https://goo.gl/maps/ggY8wxM5Sc2oBf5h9"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  House No. 125, Street No. 12, Vipin Garden Extension, Dwarka
                  Mor, New Delhi-110059
                </Typography>
              </IconWrapper>
              <IconWrapper>
                <Icon>
                  <PhoneIcon />
                </Icon>
                <Typography
                  variant="body1"
                  component={"a"}
                  href="tel:+919955273559"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  +91 9955273559
                </Typography>
              </IconWrapper>
              <IconWrapper>
                <Icon>
                  <EmailIcon />
                </Icon>
                <Typography
                  variant="body1"
                  component={"a"}
                  href="mailto:vanshanpharmaceuticals@gmail.com"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  vanshanpharmaceuticals@gmail.com
                </Typography>
              </IconWrapper>
              <form ref={formRef} onSubmit={handleSubmit}>
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
    </StyledContainer>
  );
};
export default ContactUs;
