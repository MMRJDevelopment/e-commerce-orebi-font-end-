import React from "react";

export default function Dropdown({ children, className, dorpRef }) {
  return (
    <div className={className} ref={dorpRef}>
      {children}
    </div>
  );
}
