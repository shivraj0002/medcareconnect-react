import { Box, Grid, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { Component } from "react";
import Slider from "react-slick";

const images = [
  {
    review:
      "I've been using Vashan Pharma's gastric medicine for a few weeks now, and it's been a lifesaver. I used to have terrible stomach pains all the time, but now they're gone. I'm so grateful for this product!",
    imgPath: require("../../../assets/people/abhishek-kumar.jpg"),
    name: "Abhishek Kumar",
  },
  {
    review:
      "I've been taking Vashan Pharma's vitamin D supplements for a few months now, and I've noticed a big difference in my energy levels. I feel so much more alert and awake now. I highly recommend these supplements!",
    imgPath: require("../../../assets/people/rani-chandra.jpg"),
    name: "Rina Chandra",
  },
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
    return (
      <Box sx={{ p: "15px", pb: "30px" }} bgcolor={"lightgreen"}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2.5} flexDirection={"column"}></Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ width: "98%", mb: { sm: "30px", md: "0px" } }}>
              <Typography
                variant="h5"
                color="initial"
                fontFamily={"Poppins"}
                gutterBottom
                sx={{ mt: "15px" }}
                textAlign={"center"}
              >
                Happy Customers
              </Typography>
              <Slider {...settings}>
                {images.map((item, index) => {
                  return (
                    <Box>
                      <img
                        src={item.imgPath}
                        alt=""
                        height={"65px"}
                        width={"65px"}
                        style={{ borderRadius: "50%" }}
                      />
                      <Typography
                        variant="body1"
                        color="inherit"
                        fontFamily={"Poppins"}
                        fontSize={"1.1rem"}
                      >
                        {item.review}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={deepOrange[600]}
                        fontFamily={"Poppins"}
                        fontSize={"0.8rem"}
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} md={2.5} flexDirection={"column"}></Grid>
        </Grid>
      </Box>
    );
  }
}
