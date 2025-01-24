import { FaArrowAltCircleLeft} from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="bg-[#344B8F] min-h-screen flex justify-center p-10 relative ">
        <div className="absolute top-0 left-0 m-2">
          <Link className="flex items-center gap-3 underline" to={"/"}>
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back To Home
          </Link>
        </div>
        <div className="bg-[#344B8F] bg shadow-2xl p-10 space-y-5">
          <h1 className="text-3xl font-bold text-center">Register</h1>

          <form className="space-y-5">
            <div>
              <label className="font-bold" htmlFor="name">
                Name
              </label>{" "}
              <br />
              <input
                className="w-full px-3 py-2 border-2 border-gray-800"
                type="text"
                name="name"
                id=""
                placeholder="Enter Your Name"
              />
            </div>
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
              <label className="font-bold" htmlFor="photo">
                Photo URL
              </label>{" "}
              <br />
              <input className="border-none shadow-2xl cursor-pointer" type="file" name="photo" id="" />
            </div>

            <div>
              <input
                className="cursor-pointer btn w-full font-bold"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div>
            <p>
              If You already have an account? Please{" "}
              <Link to={"/login"} className="underline text-amber-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;