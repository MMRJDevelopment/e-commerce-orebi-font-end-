import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";


import Flex from "./Flex";
import { useState } from "react";
import LeftSidebarItem from "./LeftSidebarItem";
export default function LeftSidebarContent({ dropDown, dropTitle }) {
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(dropDown);

  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="items-center justify-between flex cursor-pointer mt-[53px] mb-[35px]  "
        >
          <div className="text-xl text-primary font-sans font-bold ">
            {dropTitle}
          </div>

          {show ? (
            <GoTriangleUp className="text-[#262626] text-base" />
          ) : (
            <GoTriangleDown className="text-[#262626] text-base" />
          )}
        </div>
      ) : (
        <div className="text-xl text-primary font-sans font-bold mb-[35px]">
          {dropTitle}
        </div>
      )}

      {show && (
        <div>
          <LeftSidebarItem subDrop={true} subTitle="Category 1" color="red" />
          <LeftSidebarItem subDrop={false} subTitle="Category 2"  />
          <LeftSidebarItem subDrop={true} subTitle="Category 3" color="red" />
          <LeftSidebarItem subDrop={false} subTitle="Category 4" color="red" />
          <LeftSidebarItem subDrop={false} subTitle="Category 5" color="red" />
        </div>
      )}
      {drop == false && (
        <div>
          <LeftSidebarItem subDrop={true} subTitle="Category 1"  color="red"/>
          <LeftSidebarItem subDrop={false} subTitle="Category 2"  color="red"/>
          <LeftSidebarItem subDrop={true} subTitle="Category 3"  color="red"/>
          <LeftSidebarItem subDrop={false} subTitle="Category 4"  color="red"/>
          <LeftSidebarItem subDrop={false} subTitle="Category 5" color="red" />
        </div>
      )}
    </div>
  );
}
