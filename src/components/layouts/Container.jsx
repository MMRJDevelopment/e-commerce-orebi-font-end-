import React from "react";

export default function Container({ className, children }) {
  return (
    <div className={`max-w-container mx-auto ${className}`}>{children}</div>
  );
}
