import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function LeftSidebarItem({ subDrop, subTitle, color }) {
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(subDrop);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="items-center justify-between flex cursor-pointer border-b border-[#F0F0F0] pb-4 mb-4 "
        >
          <p className="text-base font-sans font-normal text-[#767676]  ">
            {subTitle}
          </p>

          {show ? (
            <FaMinus className="text-[#767676] text-[10px]" />
          ) : (
            <FaPlus className="text-[#767676] text-[12px]" />
          )}
        </div>
      ) : (
        <p className="text-base font-sans font-normal text-[#767676]  border-b border-[#F0F0F0] pb-4 mb-4">
          {color && (
            <span
              className={`inline-block h-[11px] w-[11px] rounded-full mr-[10px]`}
              style={{ background: color }}
            />
          )}
          {subTitle}
        </p>
      )}

      {show && (
        <div>
          <p className=" pl-2 border-b border-[#F0F0F0] pb-2 mb-2 text-sm text-[#767676] font-sans font-normal ">
            items
          </p>
          <p className=" pl-2 border-b border-[#F0F0F0] pb-2 mb-2 text-sm text-[#767676] font-sans font-normal ">
            items
          </p>
          <p className=" pl-2 border-b border-[#F0F0F0] pb-2 mb-2 text-sm text-[#767676] font-sans font-normal ">
            items
          </p>
          <p className=" pl-2 border-b border-[#F0F0F0] pb-2 mb-2 text-sm text-[#767676] font-sans font-normal ">
            items
          </p>
        </div>
      )}
    </div>
  );
}
