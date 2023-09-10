import React from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import ProductCarousel from "../../Utils/ProductCarousel";
import prod1 from "../../../assets/Products/vanozyme-1-1.png";
import prod2 from "../../../assets/Products/vanzit_d3.png";
import prod3 from "../../../assets/Products/biafe-xt-1.png";
import prod4 from "../../../assets/Products/pimtop-1.jpg";

const imgu =
  "https://plus.unsplash.com/premium_photo-1671886498603-a71f79861aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80";

const medicalProducts = [
  {
    name: "VanoZyme",
    category: "Category 1",
    price: 10.99,
    description:
      "It is used to help growth and good health. This vitamin is used to stop or treat niacin deficiency.",
    imgUrl: prod1,
  },
  {
    name: "VanZit-D3",
    category: "Category 2",
    price: 19.99,
    description:
      "Vitamin D (ergocalciferol-D2, cholecalciferol-D3, alfacalcidol) is a fat-soluble vitamin that helps your body absorb calcium and phosphorus.",
    imgUrl: prod2,
  },
  {
    name: "Biafe XT",
    category: "Category 1",
    price: 15.49,
    description:
      "Ferrous Ascorbate+Folic Acid is used for iron deficiency and anemia.",
    imgUrl: prod3,
  },
  {
    name: "PimTop D-SR",
    category: "Category 2",
    price: 8.99,
    description:
      "Pantoprazole Sodium IP equivalent Pantoprazole 40 mg, Domperidone IP 30 mg, Excipients q,s.",
    imgUrl: prod4,
  },
];

const Products = () => {
  return (
    <Box>
      <ProductCarousel>
        {medicalProducts.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </ProductCarousel>
    </Box>
  );
};

export default Products;
