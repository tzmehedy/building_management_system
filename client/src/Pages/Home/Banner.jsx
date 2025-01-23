import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/images/bannerImg1.jpg"
import bannerImg2 from "../../assets/images/bannerImage2.jpg"
import bannerImg3 from "../../assets/images/bannerImage3.jpg"
import video1 from "../../assets/images//1826150-hd_1920_1080_24fps.mp4"
const Banner = () => {
  return (
    <div className="">
      <Carousel className="">
        <div
          className="h-[700px] bg-cover bg-no-repeat bg-fixed flex justify-center items-center "
          style={{ backgroundImage: `url(${bannerImg1})` }}
        >
          <div>
            <h1 className="text-6xl text-white font-bold">
              A New Standard <br /> in Living
            </h1>
            <button className="w-40 h-40 hover:cursor-pointer">
              <video className="rounded-full" src={video1} autoPlay></video>
            </button>
          </div>
        </div>
        <div
          className="min-h-[700px] bg-cover bg-no-repeat bg-fixed flex justify-center items-center "
          style={{ backgroundImage: `url(${bannerImg2})` }}
        >
          <div>
            <h1 className="text-6xl text-white font-bold">
              A New Standard <br /> in Living
            </h1>
            <button className="w-40 h-40 hover:cursor-pointer">
              <video className="rounded-full" src={video1} autoPlay></video>
            </button>
          </div>
        </div>
        <div
          className="min-h-[700px] bg-cover bg-no-repeat bg-fixed flex justify-center items-center "
          style={{ backgroundImage: `url(${bannerImg3})` }}
        >
          <div>
            <h1 className="text-6xl text-white font-bold">
              A New Standard <br /> in Living
            </h1>
            <button className="w-40 h-40 hover:cursor-pointer">
              <video className="rounded-full" src={video1} autoPlay></video>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
