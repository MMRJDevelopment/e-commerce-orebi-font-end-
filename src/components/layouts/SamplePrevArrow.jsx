import { FaArrowLeftLong } from "react-icons/fa6";
export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-[#c2c2c2] h-[64px] w-[64px] absolute bottom-[45%] z-10 left-[-20px] rounded-full items-center !flex justify-center "
      onClick={onClick}
    >
      <FaArrowLeftLong className="text-white text-xl" />
    </div>
  );
}
