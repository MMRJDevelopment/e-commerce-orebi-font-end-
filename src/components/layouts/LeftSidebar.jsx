import React from 'react'
import LeftSidebarContent from './LeftSidebarContent';

export default function LeftSidebar() {
  return (
    <div>
      <LeftSidebarContent dropDown={false} dropTitle="Shop by Category" />
      <LeftSidebarContent dropDown={true} dropTitle="Shop by Color" />
    </div>
  );
}
