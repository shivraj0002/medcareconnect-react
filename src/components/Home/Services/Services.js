import React from "react";
import "./Services.css";
import Service from "./Service";

import { Link, useNavigate } from "react-router-dom";
import tempSvg from "./../../../assets/SVG/cardiogram-heart.svg";
import Button from '@mui/material/Button'


const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Digestive health products.",
      img: tempSvg,
      tags: ["We offer a wide range of digestive health products, including digestive enzymes, probiotics, prebiotics, fiber supplements, laxatives, anti-diarrheal medications, and antacids. These products are designed to help adults with a variety of digestive problems, such as gas, bloating, constipation, diarrhea, and heartburn."],
      bgColor: "rgba(203, 220, 237, 0.47)",
      link: "/",
    },
    {
      name: "Multivitamins and iron tablets for women",
      img: tempSvg,
      tags: ["Our multivitamins and iron tablets are specifically formulated for women's needs. They contain essential vitamins and minerals, including iron, folate, and calcium. These products can help women maintain their health and well-being throughout their lives, including during pregnancy.."],
      bgColor: "rgba(233, 233, 233, 0.47)",
      link: "/",
    },
    {
      name: "Vitamin D3 Drops for Kids",
      img: tempSvg,
      tags: ["Our Vitamin D3 Drops are a great way to ensure that your child gets the vitamin D they need for healthy bones and immunity. Vitamin D is essential for the absorption of calcium, which is important for strong bones and teeth. It also plays a role in the immune system. Our drops are easy to administer and have a pleasant taste, making them a hassle-free way to support your child's health"],
      bgColor: "rgba(241, 243, 220, 0.47)",
      link: "/",
    },
    {
      name: "Committed to You.",
      img: tempSvg,
      tags: ["At  Vanshan Pharmaceuticals, we place top priority on safety and effectiveness. Our products undergo rigorous testing and conform to all health regulations. We are committed to delivering exceptional pharmaceutical products your family can trust. The Made In India Medicines are clinically tested and doctor's approved. Our guiding principle is 'Quality Medicine for All."],
      bgColor: "rgba(255, 232, 209, 0.47)",
      link: "/",
    },
    // {
    //   name: "Nurturing The Young Generation for Long-Term Health",
    //   img: tempSvg,
    //   tags: ["Young Generation", "Premium Healthcare"],
    //   bgColor: "rgba(223, 225, 224, 0.47)",
    //   link: "/",
    // },
    // {
    //   name: "Committed to Your Trust and Choice",
    //   img: tempSvg,
    //   tags: ["Trust", "Choice"],
    //   bgColor: "rgba(208, 241, 240, 0.47)",
    //   link: "/",
    // },
  ];

  return (
    <>
      <div className="service-section">
        <div className="service-left" onClick={()=>{
              navigate("/contact");
        }}>
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
