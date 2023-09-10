import React from "react";
import Graph from "./../../../assets/SVG/Graph.svg";
import Globe from "./../../../assets/SVG/Globe.svg";
import Industry from "./../../../assets/SVG/Industry.svg";
import Lab from "./../../../assets/SVG/Lab.svg";
import { Box, Stack } from "@mui/material";
import Feature from "./Feature";
import ProductCarousel from "../../Utils/ProductCarousel";

const featuresArray = [
  {
    logo: Graph,
    title: "Research Legacy",
    desc: "Benefit from our rich research history, driving medical innovation.",
  },
  {
    logo: Industry,
    title: "Advanced Manufacturing",
    desc: "Precision manufacturing for top-quality medical products.",
  },
  {
    logo: Lab,
    title: "Cutting-Edge Research",
    desc: "Leaders in medical research, solving healthcare challenges.",
  },
  {
    logo: Globe,
    title: "Global Innovation",
    desc: "Access world-class healthcare innovation through collaboration.",
  },
];

const Features = () => {
  return (
    <Box>
      <ProductCarousel>
        {featuresArray.map((item, index) => {
          return (
            <Feature
              key={index}
              title={item.title}
              logo={item.logo}
              desc={item.desc}
            />
          );
        })}
      </ProductCarousel>
    </Box>
  );
};

export default Features;
