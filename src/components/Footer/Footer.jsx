import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import logo from "../../assets/Logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className="mt-[106px] py-[55px] bg-[#F5F5F3]">
      <Container>
        <Flex className="justify-between">
          <Flex className="justify-start ">
            <div>
              <h6 className="fhtext pb-[17px]">MENU</h6>
              <ul>
                <li className="fptext pb-[6px]">Home</li>
                <li className="fptext pb-[6px]">Shop</li>
                <li className="fptext pb-[6px]">About</li>
                <li className="fptext pb-[6px]">Contact</li>
                <li className="fptext">Journal</li>
              </ul>
            </div>
            <div className="px-[141px]">
              <h6 className="fhtext pb-[17px]">SHOP</h6>
              <ul>
                <li className="fptext pb-[6px]">Category 1</li>
                <li className="fptext pb-[6px]">Category 2</li>
                <li className="fptext pb-[6px]">Category 3</li>
                <li className="fptext pb-[6px]">Category 4</li>
                <li className="fptext">Category 5</li>
              </ul>
            </div>
            <div>
              <h6 className="fhtext pb-[17px]">HELP</h6>
              <ul>
                <li className="fptext pb-[6px]">Privacy Policy</li>
                <li className="fptext pb-[6px]">Terms & Conditions</li>
                <li className="fptext pb-[6px]">Special E-shop</li>
                <li className="fptext pb-[6px]">Shipping</li>
                <li className="fptext ">Secure Payments</li>
              </ul>
            </div>
          </Flex>
          <div>
            <a className="fhtext " href="">
              (052) 611-5711
            </a>
            <br />
            <a className="fhtext" href="">
              company@domain.com
            </a>
            <p className="text-sm text-[#6D6D6D] mt-4 font-normal font-sans">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div>
            <img src={logo} alt="" />
            <p className="text-sm text-[#6D6D6D] font-normal font-sans mt-[210px]">
              2024 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Flex>
        <Flex className="gap-x-[26px] text-primary text-[18px]">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
        </Flex>
      </Container>
    </div>
  );
}
