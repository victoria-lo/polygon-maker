import React from 'react';

function Polygon(props) {
    const square = {
      background: props.color,
      width: "100px",
      height: "100px"
    };

    const rectangle = {
        background: props.color,
        width: "200px",
        height: "100px"
    }

    const oval = {
        background: props.color,
        width: "200px",
        height: "100px",
        borderRadius: "100px / 50px"
    }

    const triangleUp = {
        width: "0",
        height: "0",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: `100px solid ${props.color}`
    }

    const triangleDown = {
        width: "0",
        height: "0",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderTop: `100px solid ${props.color}`
    }
  
    const trapezoid = {
        borderBottom: `100px solid ${props.color}`,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        height: "0",
        width: "100px"
    }

    const parallelogram = {
        width: "150px",
        height: "100px",
        transform: "skew(20deg)",
        background: props.color
    }
    return (
      <div style={eval(props.shape)}>
        
      </div>
    );
  }
  
  export default Polygon;