import Button from "react-bootstrap/Button";
import React from "react";
import "./button.component.scss";

const UIButton = ({ children, variant = "primary", className }) => {
  return (
    <div className={` ui-btn ${className}`} variant={variant}>
      {children}
    </div>
  );
};

export default UIButton;
