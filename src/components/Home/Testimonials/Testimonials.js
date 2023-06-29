import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const imgu = 'https://plus.unsplash.com/premium_photo-1671886498603-a71f79861aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'

const Testimonials = () => {
  return (
    <>
      <div style={{ background: "rgb(0 86 140 / 7%)", marginBottom: "40px" }}>
        <div className="testimonial-section">
          <h1 className="testimonial-heading">
            <span className="underline"></span>Our Testimonials
          </h1>
          <p className="testimonial-para">
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
            <img alt="" src={imgu} />
            <div className="myCarousel">
              <h3>xyz xyz</h3>
              <h4>Doctor</h4>
              <p>
                Est eu voluptate occaecat velit do tempor consequat nostrud do in in culpa fugiat cupidatat. Amet est velit id culpa est id aliqua incididunt amet qui laborum. Enim fugiat in incididunt id laboris.
              </p>
            </div>
          </div>

          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img alt="" src={imgu} />
            <div className="myCarousel">
              <h3>xyz xyz</h3>
              <h4>Doctor</h4>
              <p>
                Est eu voluptate occaecat velit do tempor consequat nostrud do in in culpa fugiat cupidatat. Amet est velit id culpa est id aliqua incididunt amet qui laborum. Enim fugiat in incididunt id laboris.
              </p>
            </div>
          </div>

          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img alt="" src={imgu} />
            <div className="myCarousel">
              <h3>xyz xyz</h3>
              <h4>Doctor</h4>
              <p>
                Est eu voluptate occaecat velit do tempor consequat nostrud do in in culpa fugiat cupidatat. Amet est velit id culpa est id aliqua incididunt amet qui laborum. Enim fugiat in incididunt id laboris.
              </p>
            </div>
          </div>

          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img alt="" src={imgu} />
            <div className="myCarousel">
              <h3>xyz xyz</h3>
              <h4>Doctor</h4>
              <p>
                Est eu voluptate occaecat velit do tempor consequat nostrud do in in culpa fugiat cupidatat. Amet est velit id culpa est id aliqua incididunt amet qui laborum. Enim fugiat in incididunt id laboris.
              </p>
            </div>
          </div>

          <div style={{ background: "rgb(0 86 140 / 7%)" }}>
            <img alt="" src={imgu} />
            <div className="myCarousel">
              <h3>xyz xyz</h3>
              <h4>Doctor</h4>
              <p>
                Est eu voluptate occaecat velit do tempor consequat nostrud do in in culpa fugiat cupidatat. Amet est velit id culpa est id aliqua incididunt amet qui laborum. Enim fugiat in incididunt id laboris.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
