import React from 'react'


const Btn = ({children, className}) => {
  return (
    <button className={`btn btn-primary ${className}`}>{children}</button>
  );
}

export default Btn
