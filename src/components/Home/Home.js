import React from "react";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Features from "./components/Features";
import Typography from "@mui/material/Typography";
import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="testimonial-section">
        <h1 className="testimonial-heading">
          <span className="underline"></span>What We Provide?
        </h1>
        <p className="testimonial-para">
        Leading Experts in Digestive Health SolutionsWe take pride in being the leading manufacturer of top-grade, adult-focuseddigestive health solutions. Our Vitamin D3 Drops for Kids serves as a steppingstone for a healthy life. Vitamin D3 is crucial for bone health and immunity ingrowing children. We ensure our drops are easy to administer and have apleasant taste, making healthcare a hassle-free process for both parents and children.{" "}
        </p>
      </div>
      <Services />
      <div className="testimonial-section">
        <h1 className="testimonial-heading">
          <span className="underline"></span>Our Achivements
        </h1>
        <p className="testimonial-para">Discover What Sets Us Apart. </p>
      </div>
      <Features />
      <div className="testimonial-section">
        <h1 className="testimonial-heading">
          <span className="underline"></span>Customer Reviews
        </h1>
        <p className="testimonial-para">
          Adipisicing enim Lorem dolor id quis velit aute aute proident et et
          laboris eiusmod.{" "}
        </p>
      </div>
      <CustomerReviews />
      <div className="testimonial-section">
        <h1 className="testimonial-heading">
          <span className="underline"></span>Our Procucts
        </h1>
        <p className="testimonial-para">
          Adipisicing enim Lorem dolor id quis velit aute aute proident et et
          laboris eiusmod.{" "}
        </p>
      </div>
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
