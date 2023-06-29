import React from 'react'
import "./Services.css"
import Service from "./Service"

import { Link } from 'react-router-dom'
import tempSvg from './../../../assets/SVG/cardiogram-heart.svg'

const Services = () => {

  const services = [
    {
      name: "1Qui labore irure excepteur id.",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(203 220 237 / 47%)",
      link: "/",

    },
    {
      name: "1Qui labore irure excepteur id.",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(233 233 233 / 47%)",
      link: "/"
    },
    {
      name: "1Qui labore irure excepteur id.",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(241 243 220 / 47%)",
      href: "/",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(255 232 209 / 47%)",
      link: "/"
    },
    {
      name: "Lorem ipsum dolor sit amet",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(223 225 224 / 47%)",
      link: "/"
    },
    {
      name: "Lorem ipsum dolor sit amet",
      img: tempSvg,
      tags: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      bgColor: "rgb(208 241 240 / 47%)",
      link: "/"
    }
  ];

  return (
    <>
      <div className='service-section'>
        <div className='service-left'>
          <h1 className='service-heading'>
            Lorem ipsum dolor sit amet?
          </h1>
          <p className='service-para'>
            Anim exercitation tempor eiusmod proident sint esse incididunt culpa adipisicing non culpa officia sit irure.

          </p>
          <button className='service-button'>Contact Now</button>
        </div>
        <div className='service'>
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
  )
}

export default Services;