import React from 'react'


const Btn = ({children, className, ...params}) => {
  return (
    <button {...params} className={`btn btn-primary ${className}`}>{children}</button>
  );
}

export default Btn
