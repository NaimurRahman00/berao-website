import { useContext, useEffect, useState } from "react";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextData } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { PiEyeClosed } from "react-icons/pi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(ContextData);

  // Dynamic title
  useEffect(() => {
    document.title = "Berao | Log In";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    login(email, password);
  };



  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-tl from-green-500 from-20% via-emerald-600 via-50% to-teal-600 to-80% backdrop-blur-3xl">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white/50"></div>
      <div className="flex w-[100%] mx-auto max-w-[1400px] items-center justify-center p-6 md:p-0 relative">
        <div className="flex px-16 h-full w-full rounded-3xl shadow-lg shadow-black/20 bg-black/35 z-20 md:h-[90%] md:w-[80%] lg:h-[85%] backdrop-blur-md border-black/20 border">
          {/* input side  */}
          <form
            onSubmit={handleLogin}
            className="flex ps-20 py-20 w-full flex-col justify-end lg:w-[65%] rounded-2xl"
          >
            <div className="absolute flex items-center top-10 left-10">
              <Link to="/" className="text-3xl font-bold text-white/80">
                Berao
              </Link>
              <Link
                to="/"
                className="relative inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-black/80 rounded-full shadow-2xl group mx-5 hover:scale-105 transition"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-emerald-600 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-teal-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-black/80 font-bold">Home</span>
              </Link>
            </div>
            <div className="flex h-[90%] w-[85%] flex-col justify-center gap-3">
              <h1 className="text-white/90 text-4xl font-medium">
                Welcome back
              </h1>
              <h2 className="pb-4 text-lg text-white/80">
                Please, Enter your login information
              </h2>
              <p className="text-emerald-200">Email</p>
              <input
                className="w-[80%] text-white/80 bg-black/80 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 md:w-full"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <p className="text-emerald-200">Password</p>
              <div className="relative">
                <input
                  className="w-[80%] text-white/80 rounded-full bg-black/80 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 md:w-full"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  required
                />
                <span onClick={()=> setShowPassword(!showPassword)} className="absolute text-xl text-white top-1/2 -translate-y-1/2 right-5">
                  {
                    showPassword? <FaRegEye /> : <PiEyeClosed />
                    
                  }

                </span>
              </div>
              <p className="text-emerald-200 hover:underline cursor-pointer text-end">
                Forget password
              </p>
              <input
                type="submit"
                name="Sign in"
                value="Sign in"
                className="text-black/80 w-full font-bold text-lg btn border-none rounded-full px-5 py-2.5 overflow-hidden group bg-gradient-to-r from-green-500 to-green-500/80 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300"
              ></input>

              <div className="flex justify-center text-3xl gap-4 mt-6">
                {/* sign with google */}
                <div className="bg-white p-2 rounded-full hover:scale-105 transition-all cursor-pointer">
                  <FcGoogle />
                </div>
                {/* sign with github */}
                <div className="bg-white p-2 rounded-full hover:scale-105 transition-all cursor-pointer">
                  <FaGithub />
                </div>
              </div>
            </div>
          </form>
          {/* register design side  */}
          <div className="relative flex flex-col m-10 md:flex md:w-[60%] lg:w-[35%] overflow-hidden">
            <div className="bg-black rounded-tr-3xl rounded-tl-2xl h-[7%] w-[75%] relative">
              <div
                className="size-6 bg-transparent rounded-full absolute -right-6 bottom-0"
                style={{ boxShadow: "-10px 10px black" }}
              ></div>
            </div>
            <div className="px-10 pt-10 flex items-center justify-end flex-grow flex-col w-full h-[93%] bg-gradient-to-b from-black to-black/25 rounded-b-2xl rounded-tr-3xl overflow-hidden">
              <div className="z-20 flex-grow">
                <h2 className="text-4xl font-bold text-white/80 leading-[3rem] pt-5">
                  A travel lover said that ,
                </h2>
                <h3 className="text-6xl text-white mt-10">“</h3>
                <p className="text-base text-white/80">
                  The world is a book, and those who do not travel read only a
                  page.
                </p>
                <h3 className="text-6xl text-white text-end">”</h3>
              </div>
              <p className="text-[14px] text-white/80 mb-10">
                Do not have an account ?{" "}
                <Link to="/register" className="text-emerald-200 font-bold">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
