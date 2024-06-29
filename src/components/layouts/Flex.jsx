import React from 'react'

export default function Flex({className, children}) {
  return <div className={`flex ${className}`}>{children}</div>;
}
