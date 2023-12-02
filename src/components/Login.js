import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] min-h-screen bg-cover bg-no-repeat">
      <Header />
      <form className="bg-black bg-opacity-80 p-12 w-2/5 flex flex-col mx-auto mt-10">
        {isSignInForm}&&
        <h3 className="text-white text-3xl font-semibold mb-3">Sign In</h3>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-3 text-lg bg-[#333] text-white "
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-3 text-lg bg-[#333] text-white "
        ></input>
        <button className="p-4 m-3 text-xl bg-red-600 text-white  text-center font-semibold">
          Sign In
        </button>
        <div className="flex justify-between">
          <div>
            <span>
              <input type="checkbox"></input>
            </span>{" "}
            <label className="text-[#b2b2b2] ml-2">Remember Me</label>
          </div>
          <div>
            <p className="text-[#b2b2b2] ml-2">Need help ?</p>
          </div>
        </div>
        <p className="text-[#b2b2b2] ml-2 mt-6">
          New to Netflix?
          <span className="text-white cursor-pointer" onClick={toggleForm}>
            {" "}
            Sign up now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
