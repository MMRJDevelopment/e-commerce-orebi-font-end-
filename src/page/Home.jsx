import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import Advertise from "../components/Advertise/Advertise";
import Award from "../components/Award/Award";
import NewBanner from "../components/Banner/NewBnner"
import BestSellers from "../components/BestSells/BestSellers";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import SpecialOffers from "../components/Offers/SpecialOffers";

const Home = () => {
  return (
    <div>
      <NewBanner />
      <AdditionalInfo/>
      <Advertise/>
      <NewArrivals/>
      <BestSellers/>
      <Award/>
      <SpecialOffers/>
    </div>
  );
}

export default Home
