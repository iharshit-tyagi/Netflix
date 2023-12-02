import { useLayoutEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const formType = useRef(null);
  const name = useRef(null);
  const handleSubmit = () => {
    console.log(formType.current.innerText);
    console.log(password.current.value);
    // console.log(name.current.value);
    const validationResult =
      formType.current.innerText === "Sign up"
        ? validateData(
            email.current.value,
            password.current.value,
            name.current.value
          )
        : validateData(email.current.value, password.current.value);
    setValidationMessage(validationResult);
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setValidationMessage(null);
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] min-h-screen bg-cover bg-no-repeat">
      <Header />
      <form className="bg-black bg-opacity-80 p-9 w-2/5 flex flex-col mx-auto mt-10">
        <h3 className="text-white text-3xl font-semibold mb-3">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h3>
        {isSignInForm || (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2  bg-[#333] text-white "
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-2  bg-[#333] text-white "
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-2  bg-[#333] text-white "
        ></input>
        {isSignInForm || (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 m-2 bg-[#333] text-white "
          ></input>
        )}
        <button
          ref={formType}
          type="button"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-4 m-2  bg-red-600 text-white  text-center font-semibold"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        {validationMessage && (
          <p className="mt-2 text-red-500">{validationMessage}</p>
        )}
        <div className="flex justify-between mt-2">
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

        {isSignInForm ? (
          <p className="text-[#b2b2b2] ml-2 mt-5">
            New to Netflix?
            <span className="text-white cursor-pointer" onClick={toggleForm}>
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-[#b2b2b2] ml-2 mt-5">
            Already a User?
            <span className="text-white cursor-pointer" onClick={toggleForm}>
              Sign in.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
