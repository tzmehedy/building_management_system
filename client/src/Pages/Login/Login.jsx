import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { loginWithGoogle, loginWithEmailAndPassword } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const handelLogiWithGoogle = () =>{
    loginWithGoogle()
    .then(()=>{
      toast.success("Login Successfully")
      navigate(`${location?.state ? location?.state?.from: "/"}`)

    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  const handelLoginWithEmailPassword = async(e) =>{
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    loginWithEmailAndPassword(email,password)
    .then(()=>{
      toast.success("Login Successfully")
      navigate(`${location?.state ? location?.state?.from : "/"}`);
    })
    .catch(err=>{
      toast.error(err.message)
    })

  }


    return (
      <div className="bg-[#344B8F] min-h-screen flex justify-center p-10 relative ">
        <div className="absolute top-0 left-0 m-2">
          <Link className="flex items-center gap-3 underline" to={"/"}>
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back To Home
          </Link>
        </div>
        <div className="bg-white bg shadow-2xl p-10 space-y-5">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <form onSubmit={handelLoginWithEmailPassword} className="space-y-5">
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
                className="cursor-pointer btn w-full font-bold bg-[#344B8F]"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <div>
            <p className="text-center">Or</p>
            <div className="flex justify-center space-x-5 mt-3">
              <button onClick={handelLogiWithGoogle} className="cursor-pointer">
                <FaGoogle className="text-xl text-amber-500"></FaGoogle>
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
            <p>
              If You haven&apos;t account? Please{" "}
              <Link
                to={"/register"}
                className="underline font-bold text-amber-400"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;