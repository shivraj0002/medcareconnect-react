import React from "react";
import "./Services.css";
import Service from "./Service";

import { Link, useNavigate } from "react-router-dom";
import tempSvg from "./../../../assets/SVG/cardiogram-heart.svg";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Quality Healthcare Solutions for Every Generation",
      img: tempSvg,
      tags: ["Quality", "Health", "Solutions"],
      bgColor: "rgba(203, 220, 237, 0.47)",
      link: "/",
    },
    {
      name: "Wide Range of Pharmaceutical Offerings",
      img: tempSvg,
      tags: ["Pharmaceuticals"],
      bgColor: "rgba(233, 233, 233, 0.47)",
      link: "/",
    },
    {
      name: "Production and Distribution of Health-Centric Medicines",
      img: tempSvg,
      tags: ["Production", "Distribution", "Medicines"],
      bgColor: "rgba(241, 243, 220, 0.47)",
      link: "/",
    },
    {
      name: "Leading Experts in Digestive Health Solutions",
      img: tempSvg,
      tags: ["Digestive Health", "Top-Grade", "Experts"],
      bgColor: "rgba(255, 232, 209, 0.47)",
      link: "/",
    },
    {
      name: "Nurturing The Young Generation for Long-Term Health",
      img: tempSvg,
      tags: ["Young Generation", "Premium Healthcare"],
      bgColor: "rgba(223, 225, 224, 0.47)",
      link: "/",
    },
    {
      name: "Committed to Your Trust and Choice",
      img: tempSvg,
      tags: ["Trust", "Choice"],
      bgColor: "rgba(208, 241, 240, 0.47)",
      link: "/",
    },
  ];

  return (
    <>
      <div className="service-section">
        <div className="service-left">
          <h1 className="service-heading">Your Path to Optimal Health!</h1>
          <p className="service-para">
            Delivering Quality Healthcare Solutions and Pharmaceuticals for All.
          </p>
          <button
            className="service-button"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Now
          </button>
        </div>
        <div className="service">
          <div className="scroll-box__wrapper">
            <div className="scroll-box__container" role="list">
              {services.map((service, index) => {
                return <Service service={service} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
