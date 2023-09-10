import React from "react";
import wpLogo from "./assets/whatsapp.png";

const Styles = {
  position: "fixed",
  bottom: "30px",
  right: "40px",
  zIndex: 50,
  display: "flex",
  justifyContent: "space-between",
  width: "60px",
  padding: "1px",
  cursor: "pointer",
};
const WhatsappIntegration = () => {
  return (
    <a href="https://wa.me/+919955273559" target="_blank">
      <img src={wpLogo} style={Styles} />
    </a>
  );
};

export default WhatsappIntegration;
