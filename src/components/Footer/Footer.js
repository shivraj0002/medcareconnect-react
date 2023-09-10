import React from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Stack,
  Typography,
  Container,
  Divider,
  Avatar,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { deepOrange, grey } from "@mui/material/colors";
import logoIcon from "../../assets/icon-only.png";
import logoIconBase from "../../assets/icon-base.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: grey[100] }}>
      <Box sx={{ bgcolor: grey[100] }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack
              direction={"row"}
              sx={{ color: "black", height: "100%", width: "100%" }}
              alignItems={"center"}
            >
              <Avatar
                variant="square"
                src={logoIcon}
                alt="Logo Icon"
                sx={{
                  mr: { xs: 0.5, md: 1 },
                  width: { xs: 40, md: 56 },
                  height: { xs: 40, md: 56 },
                }}
              />
              <Box
                component={"img"}
                src={logoIconBase}
                alt="logo"
                sx={{
                  mr: { xs: 0.5, md: 1 },
                  height: { xs: 31, md: 45 },
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={1} columnSpacing={1}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={deepOrange[600]}
                  fontFamily={"Poppins"}
                  fontSize={"1rem"}
                  gutterBottom
                  component={Link}
                  to={"/products"}
                >
                  Resources
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={deepOrange[600]}
                  fontFamily={"Poppins"}
                  fontSize={"1rem"}
                  gutterBottom
                  component={Link}
                  to={"/"}
                >
                  Follow US
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={grey[900]}
                  fontFamily={"Poppins"}
                  fontSize={"0.8rem"}
                  gutterBottom
                  component={Link}
                  to={"/contact"}
                >
                  Cantact US
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={grey[900]}
                  fontFamily={"Poppins"}
                  fontSize={"0.8rem"}
                  gutterBottom
                  component={Link}
                  to={"/"}
                >
                  Instagram
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={grey[900]}
                  fontFamily={"Poppins"}
                  fontSize={"0.8rem"}
                  gutterBottom
                  component={Link}
                  to={"/contact"}
                >
                  Request for Call
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={grey[900]}
                  fontFamily={"Poppins"}
                  fontSize={"0.8rem"}
                  gutterBottom
                  component={Link}
                  to={"/"}
                >
                  Facebook
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          variant="fullWidth"
          orientation="horizontal"
          sx={{ bgcolor: "white", color: "white", mt: "10px", mb: "10px" }}
        />
        <Box width={"100%"}>
          <Typography
            variant="body1"
            color={grey[900]}
            fontFamily={"Poppins"}
            fontSize={"0.8rem"}
            gutterBottom
          >
            © 2023 All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
