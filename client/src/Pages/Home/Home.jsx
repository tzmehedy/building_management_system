import AboutBuilding from "./AboutBuilding";
import Banner from "./Banner";


const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <div className="container mx-auto p-3 md:p-0">
          <AboutBuilding></AboutBuilding>
        </div>
      </div>
    );
};

export default Home;