import { FaArrowRightLong } from "react-icons/fa6";
export default function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-[#c2c2c2] h-[64px] w-[64px] absolute top-[40%] right-0 rounded-full items-center !flex justify-center "
      onClick={onClick}
    >
      <FaArrowRightLong className="text-white text-xl" />
    </div>
  );
}
