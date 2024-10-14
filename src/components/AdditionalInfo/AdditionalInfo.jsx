import Container from "../layouts/Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { SlReload } from "react-icons/sl";


export default function AdditionalInfo() {
  return (
    <div className="border-b-2 border-[#F0F0F0]">
      <Container className="flex justify-between py-[22px]">
        <div className="flex items-center">
          <PiNumberTwoBold className="text-xl text-[#262626]" />
          <p className="text-base font-sans text-[#6D6D6D] pl-2">
            Two years warranty
          </p>
        </div>
        <div className="flex items-center">
          <MdLocalShipping className="text-xl text-[#262626]" />
          <p className="text-base font-sans text-[#6D6D6D] pl-2">
            Free shipping
          </p>
        </div>
        <div className="flex items-center">
          <SlReload className="text-xl text-[#262626]" />
          <p className="text-base font-sans text-[#6D6D6D] pl-2">
            Return policy in 30 days
          </p>
        </div>
      </Container>
    </div>
  );
}
