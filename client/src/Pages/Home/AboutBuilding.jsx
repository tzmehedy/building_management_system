import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/aboutBuildingImage.jpg"
import { FaArrowRight } from "react-icons/fa";


const AboutBuilding = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10">
      <div className="md:w-1/2 space-y-5 flex flex-col  justify-center md:border-r-2 md:border-gray-300 pr-2">
        <div className="w-1/3 border-b-4 border-gray-600">
          <h1 className="uppercase font-bold text-2xl">Welcome Home</h1>
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">
            Your place to live the way you’ve always wanted
          </h1>
          <p className="text-justify text-xl">
            With no more than three homes per floor, a semi-private or private
            landing affords a discreet front door experience. Each residence is
            designed with expansive windows to take advantage of corner
            exposures and mesmerizing views. Superior quality and craftsmanship
            abound at every touchpoint, and with individual climate controls,
            year–round comfort is assured.
          </p>
        </div>
        <div>
            <Link className="underline text-lg font-bold flex items-center gap-1">Explore The Residence <FaArrowRight className=""></FaArrowRight></Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img className="h-[500px] w-full" src={aboutImage} alt="" />
      </div>
    </div>
  );
};

export default AboutBuilding;
