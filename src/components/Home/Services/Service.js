import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, img, tags, bgColor, link, href, external } = props.service;

  const tagHandler = () =>
    tags.map((tag, index) => {
      return <li className="service-tag">{tag}</li>;
    });

  return (
    <>
      {link ? (
        <Link
          to={link}
          className="service-container"
          style={{ backgroundColor: bgColor }}
        >
          <img  className='service-image' src={img}/>
          <h1 className="service-name">{name}</h1>
          <ul className="service-tags">{tagHandler()}</ul>
        </Link>
      ) : (
        <a
          href={href}
          className="service-container"
          style={{ backgroundColor: bgColor }}
        >
          <img className="service-image" src={img} />
          <h1 className="service-name">{name}</h1>
          <ul className="service-tags">{tagHandler()}</ul>
        </a>
      )}
    </>
  );
};

export default Service;
