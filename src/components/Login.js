import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const handleSubmit = () => {
    const validationResult = !isSignInForm
      ? validateData(
          email.current.value,
          password.current.value,
          name.current.value
        )
      : validateData(email.current.value, password.current.value);
    setValidationMessage(validationResult);

    if (validationResult) return;
    //Below sigin in /sign up user
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setValidationMessage(errorCode + " -->" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...

              const { email, displayName, uid } = auth.currentUser;
              dispatch(
                addUser({ email: email, displayName: displayName, uid: uid })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setValidationMessage(errorCode + " -->" + errorMessage);
          // ..
        });
    }
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setValidationMessage(null);
  };
  return (
    <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] min-h-screen bg-cover bg-no-repeat">
      <Header />
      <div className="pt-48 md:pt-24">
        <form className="bg-black bg-opacity-80 p-6 w-11/12 md:w-2/5 flex flex-col mx-auto ">
          <h3 className="text-white text-xl md:text-3xl font-semibold mb-3">
            {isSignInForm ? "Sign in" : "Sign up"}
          </h3>
          {isSignInForm || (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-2 md:p-3 m-2  bg-[#333] text-white "
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-2 md:p-3 m-2  bg-[#333] text-white "
          ></input>
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 md:p-3 m-2  bg-[#333] text-white "
          ></input>
          {isSignInForm || (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 md:p-3 m-2 bg-[#333] text-white "
            ></input>
          )}
          <button
            type="button"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="p-2 md:p-3 m-2  bg-red-600 text-white  text-center font-semibold"
            onClick={handleSubmit}
          >
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>
          {validationMessage && (
            <p className="text-sm md:text-base mt-2 text-red-500">
              {validationMessage}
            </p>
          )}
          {/* <div className="flex justify-between mt-2">
            <div>
              <span>
                <input type="checkbox"></input>
              </span>{" "}
              <label className="text-[#b2b2b2] ml-2">Remember Me</label>
            </div>
            <div>
              <p className="text-[#b2b2b2] ml-2">Need help ?</p>
            </div>
          </div> */}

          {isSignInForm ? (
            <p className="text-[#b2b2b2] ml-2 mt-5">
              New to Netflix?
              <span className="text-white cursor-pointer" onClick={toggleForm}>
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-[#b2b2b2] ml-2 mt-3 md:mt-5">
              Already a User?
              <span className="text-white cursor-pointer" onClick={toggleForm}>
                Sign in.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
