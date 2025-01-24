import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
      <div className="bg-[#344B8F] h-screen flex justify-center p-10 relative ">
        <div className="absolute top-0 left-0 m-2">
          <Link className="flex items-center gap-3 underline" to={"/"}>
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back To Home
          </Link>
        </div>
        <div className="bg-[#344B8F] bg shadow-2xl p-10 space-y-5">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <form className="space-y-5">
            <div>
              <label className="font-bold" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="w-full px-3 py-2 border-2 border-gray-800"
                type="email"
                name="email"
                id=""
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label className="font-bold" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                className="w-full px-3 py-2 border-2 border-gray-800"
                type="password"
                name="password"
                id=""
                placeholder="******"
              />
            </div>

            <div>
              <input
                className="cursor-pointer btn w-full font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <div>
            <p className="text-center">Or</p>
            <div className="flex justify-center space-x-5 mt-3">
              <button className="cursor-pointer">
                <FaGoogle className="text-xl text-yellow-300"></FaGoogle>
              </button>
              <button className="cursor-pointer">
                <FaFacebook className="text-xl text-blue-500"></FaFacebook>
              </button>
              <button className="cursor-pointer">
                <FaTwitter className="text-xl text-black"></FaTwitter>
              </button>
            </div>
          </div>
          <div>
            <p>If You haven&apos;t account? Please <Link to={"/register"} className="underline text-amber-400">Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;