import { useContext, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextData } from "../../provider/AuthProvider";

const Login = () => {
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
            <h2 className="absolute top-10 left-10 text-3xl font-bold text-white/80">
              Berao
            </h2>
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
              <input
                className="w-[80%] text-white/80 rounded-full bg-black/80 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 md:w-full"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <p className="text-emerald-200 underline text-end">Forget password</p>
              {/* <input
                className="w-[80%] rounded-full bg-emerald-700 px-6 py-2 font-medium text-white md:w-[60%]"
                type="submit"
              /> */}
              <div className="btn border-none relative rounded-full px-5 py-2.5 overflow-hidden group bg-gradient-to-r from-green-500 to-green-500/80 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300">
              <input
                type="submit"
                name="Sign in"
                value="Sign in"
                className="text-black/80 font-bold text-lg"
              >
              </input>
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-700 blur-lg transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-[40rem] ease"></span>
              </div>
              <div className="flex justify-center">
                {/* sign with google */}
                <div className="mx-auto flex h-[50px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                  <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
                    Sign With
                  </div>
                  <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                  <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">
                    G+
                  </span>
                </div>
                {/* sign with google */}
                <div className="mx-auto flex h-[50px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                  <div className="flex h-full w-[50%] items-center bg-gray-600 pl-4 text-sm text-white">
                    Sign With
                  </div>
                  <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-gray-600 group-hover:hidden"></span>
                  <span className="pr-4 text-4xl font-bold text-gray-600">
                    <FaGithub />
                  </span>
                </div>
              </div>
            </div>
          </form>
          {/* register design side  */}
          <div className="relative flex flex-col m-10 md:flex md:w-[60%] lg:w-[35%] overflow-hidden">
            <div className="bg-black rounded-tr-3xl rounded-tl-2xl h-[10%] w-[75%] relative">
              <div
                className="size-6 bg-transparent rounded-full absolute -right-6 bottom-0"
                style={{ boxShadow: "-10px 10px black" }}
              ></div>
            </div>
            <div className="px-10 pt-10 flex items-center justify-end flex-grow flex-col w-full h-[80%] bg-gradient-to-b from-black to-black/25 rounded-b-2xl rounded-tr-3xl overflow-hidden">
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
