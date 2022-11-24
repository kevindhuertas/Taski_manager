import React from "react";

const Colums = ({ children, className, style }) => {
  return (
    <div className={`col ${className}`} style={style}>
      {" "}
      {children}
    </div>
  );
};

Colums.defaultPorps ={
    children: null,
    className:"",
    style:{}
}

export default Colums