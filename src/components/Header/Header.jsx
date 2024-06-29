import { useEffect, useRef, useState } from "react";
import Container from "../layouts/Container";
import Search from "../Header/Search";
import Flex from "../layouts/Flex";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "../layouts/Dropdown";
import { ImCross } from "react-icons/im";
import productimg from "/Image.png";

export default function Header() {
  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  const [categoryShow, setCategoryShow] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserShow(true);
      } else {
        setUserShow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartShow(true);
      } else {
        setCartShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] ">
      <Container className="py-7 ">
        <Flex className="justify-between">
          <Dropdown className="z-10" dorpRef={categoryRef}>
            <div className=" flex items-center  gap-x-2.5 text-[#262626] font-sans font-normal text-sm	">
              <HiMiniBars3CenterLeft className="text-xl" />
              <p>Shop by Category</p>
            </div>
            {categoryShow && (
              <ul className="absolute bg-primary w-[263px] text-[#BDBDBD] font-sans text-sm mt-[23px]">
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Accesories
                </li>
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Furniture
                </li>
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Electronics
                </li>
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Clothes
                </li>
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Bags
                </li>
                <li className="py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:font-bold hover:px-7 hover:mx-2.5 ease-in duration-300">
                  Home appliances
                </li>
              </ul>
            )}
          </Dropdown>

          <div className="relative">
            <Search
              className="bg-white py-4 px-5 outline-none w-[600px] text-sm boder-rounded rounded-lg text-[#C4C4C4]"
              placeholder="Search Products"
            />
            <IoSearch className="top-5 right-5 absolute " />
          </div>
          <div className="items-center flex gap-x-10">
            <Dropdown dorpRef={userRef} className="relative z-10">
              <Flex className="text-xl  items-center">
                <BsFillPersonFill />
                <GoTriangleDown />
              </Flex>
              {userShow && (
                <div className="absolute text-[#BDBDBD] font-sans text-sm right-0 w-[200px] top-[50px]">
                  <p></p>
                  <button className="py-4 bg-primary px-14">My Account</button>
                  <p className="py-4 bg-white px-14">Log Out</p>
                </div>
              )}
            </Dropdown>
            <Dropdown dorpRef={cartRef} className="relative z-10">
              <FaShoppingCart className="text-xl" />
              {cartShow && (
                <div className="absolute text-[#BDBDBD] font-sans text-sm right-0 top-[50px] w-[360px] bg-black ">
                  <div className="flex h-[120px] py-5 px-5 gap-5 text-sm font-bold items-center bg-[#F5F5F3] w-[360px] ">
                    <img
                      src={productimg}
                      alt=""
                      className="bg-red-500 w-[80px] h-[80px]"
                    />
                    <div className="space-y-3 text-[#262626]">
                      <p>Black Smart Watch</p>
                      <p>$44.00</p>
                    </div>
                  </div>
                  <ImCross className="absolute	top-0 right-0	mt-[55px] mr-[20px]	" />
                  <p className="py-[14px] px-5  ">
                    Subtotal:
                    <samp className="font-sans font-bold text-base text-whit">
                      $44.00
                    </samp>
                  </p>
                  <Flex className="px-5 pb-5 space-x-5">
                    <button className="py-4 px-10 border font-sans font-bold text-sm  ">
                      View Cart
                    </button>
                    <button className="py-4 px-10 bg-[#F5F5F3] font-sans font-bold text-sm ">
                      Checkout
                    </button>
                  </Flex>
                </div>
              )}
            </Dropdown>
          </div>
        </Flex>
      </Container>
    </div>
  );
}
