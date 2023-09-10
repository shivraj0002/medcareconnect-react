import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "../../Utils/Carousel";

const crsImageLinks = [
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1880&q=80",
  "https://images.unsplash.com/photo-1577563651033-ec73e8228a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1580795479025-93d13fd9aa6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80",
];

const Banner = () => {
  const isSmall = useMediaQuery("(min-width: 5px) and (max-width: 530px)");
  const isMedium = useMediaQuery("(min-width: 530px) and (max-width: 735px)");
  const isLarge = useMediaQuery("(min-width: 735px) and (max-width: 900px)");

  return (
    <Box
      width={"100%"}
      height={
        isSmall ? "280px" : isMedium ? "330px" : isLarge ? "370px" : "500px"
      }
    >
      <Carousel>
        {crsImageLinks.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: isSmall
                  ? "280px"
                  : isMedium
                  ? "330px"
                  : isLarge
                  ? "380px"
                  : "500px",
                bgcolor: "secondary",
                backgroundImage: `url("${item}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Banner;
