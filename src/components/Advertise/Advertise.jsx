import Container from "../layouts/Container";
import ads1 from "../../assets/adsone.png";
import ads2 from "../../assets/adstwo.png";
import ads3 from "../../assets/adsthree.png";

export default function Advertise() {
  return (
    <div className="pt-[174px]">
      <Container className="flex justify-between ">
          <div>
            <img src={ads1} alt="" />
          </div>
          <div>
            <img src={ads2} alt="" />
            <img className="pt-10" src={ads3} alt="" />
          </div>
      </Container>
    </div>
  );
}
