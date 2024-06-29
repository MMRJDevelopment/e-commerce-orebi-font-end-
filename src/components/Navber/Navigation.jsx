import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import logo from "/logo.png";
const Navigation = () => {
  return (
    <Container>
      <Flex className="py-8">
        <div className="w-1/5">
          <img src={logo} />
        </div>
        <div className="w-4/5">
          <ul className="flex justify-center font-sans text-sm	font-normal pr-[400px]   text-[#767676]">
            <li className=" hover:text-primary hover:font-bold mr-10  hover:ease-in duration-300">
              Home
            </li>
            <li className="hover:text-primary hover:font-bold mr-10 hover:ease-induration-300">
              Shop
            </li>
            <li className="hover:text-primary hover:font-bold mr-10  hover:ease-in duration-300">
              About
            </li>
            <li className="  hover:text-primary hover:font-bold mr-10 hover:ease-in duration-300 ">
              Contacts
            </li>
            <li className="  hover:text-primary hover:font-bold hover:ease-in duration-300">
              Journal
            </li>
          </ul>
        </div>
        <div></div>
      </Flex>
    </Container>
  );
};

export default Navigation;
