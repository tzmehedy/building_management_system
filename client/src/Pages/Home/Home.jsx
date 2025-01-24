import AboutBuilding from "./AboutBuilding";
import Banner from "./Banner";
import Coupon from "./Coupon";


const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <div className="container mx-auto space-y-20 p-3 md:p-0">
          <AboutBuilding></AboutBuilding>
          <Coupon></Coupon>
        </div>
      </div>
    );
};

export default Home;