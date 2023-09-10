import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div style={{ background: "rgb(0 86 140 / 7%)", marginBottom: "40px" }}>
        <div className="testimonial-section">
          <h1 className="testimonial-heading">
            <span className="underline"></span>Our Testimonials
          </h1>
          <p className="testimonial-para-tst">
            Our client send us bunch of smiles with our services and we love
            them{" "}
          </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img alt="" src={require("../../../assets/people/haripriya.jpg")} />
            <div className="myCarousel">
              <h3>Dr.Haripriya</h3>
              <h4>Doctor</h4>
              <p>
                We've partnered with Vasan Pharma for several months now, and
                we're highly impressed. Their commitment to quality medicine,
                scientific expertise, and timely service has greatly benefited
                our patients. Their exceptional communication and customer
                service make them an invaluable partner.
              </p>
            </div>
          </div>

          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img
              alt=""
              src={require("../../../assets/people/rupesh-kumar.jpg")}
            />
            <div className="myCarousel">
              <h3>Dr. Rupesh Kumar</h3>
              <h4>Doctor</h4>
              <p>
                Our experience with Vasan Pharma has been outstanding. Their
                dedication to quality medicine and punctual service greatly
                benefits our patients. Their excellent communication and
                customer service set them apart as a valuable partner.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
