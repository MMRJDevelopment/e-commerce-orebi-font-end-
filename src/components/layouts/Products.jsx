import proimg from "../../assets/proimg.png"
import Badge from "./Badge";
import { IoMdHeart } from "react-icons/io";
import Flex from "./Flex";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";


export default function Products({ className, badge }) {
  return (
    <div>
      <div className={`relative group overflow-y-hidden ${className}`}>
        <img src={proimg} alt="" />
        {badge && <Badge className="mt-5 ml-5" title="New" />}
        <div className="py-[25px] group-hover bg-white pr-6 group-hover:bottom-0 absolute bottom-[-162px] w-full duration-500 ease-in-out">
          <Flex className="items-center justify-end gap-[15px]">
            <p className="text-base font-sans font-normal text-[#767676]">
              Add to Wish List
            </p>
            <IoMdHeart className="text-base text-primary " />
          </Flex>
          <Flex className="items-center justify-end gap-[15px] py-5 ">
            <p className="text-base font-sans font-normal text-[#767676]">
              Compare
            </p>
            <TfiReload className="text-base text-primary " />
          </Flex>
          <Flex className="items-center justify-end gap-[15px]">
            <p className="text-base font-sans font-bold text-primary">
              Add to Cart
            </p>
            <FaShoppingCart className="text-base text-primary " />
          </Flex>
        </div>
      </div>
      <div className="mt-6">
        <Flex className="items-center justify-between">
          <h5 className="font-sans font-bold text-5 text-primary">
            Basic Crew Neck Tee
          </h5>
          <p className="text-4 font-sans font-normal text-[#767676]">$44.00</p>
        </Flex>
        <p className="text-4 font-sans font-normal text-[#767676] mt-[15px]">Black</p>
      </div>
    </div>
  );
}
