import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchPage } from "../utils/gptSlice";
import { NF_URL } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { updateLang } from "../utils/configSlice";
import { langTranslation } from "../utils/languageTranslations";
const Header = () => {
  const lang = useSelector((store) => store.config.lang);
  const user = useSelector((store) => store.user);
  const showTranlsate = useSelector((store) => store.gpt.showGptSearchPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { email, displayName, uid } = user;
        dispatch(addUser({ email: email, displayName: displayName, uid: uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Removing listener when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    //Sign out Code

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchPageToggle = () => {
    dispatch(toggleGptSearchPage());
  };
  const handleLanguageChange = (e) => {
    dispatch(updateLang(e.target.value));
  };
  return (
    <div className="flex-col md:flex-row flex justify-between w-full  bg-gradient-to-b from-black absolute z-10 top-0">
      <img className="mx-auto md:mx-0 w-48 pl-4 pt-3" src={NF_URL} alt="logo" />
      {user && (
        <div className="mx-auto md:mx-0 ">
          {showTranlsate && (
            <select
              className="bg-gray-600 text-base md:text-xl m-4 px-2 py-2  text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((ele) => {
                return (
                  <option key={ele.code} value={ele.code}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            onClick={handleGptSearchPageToggle}
            className="border bg-white mt-5 mr-5 px-2 py-1  rounded-lg  text-base md:text-xl"
          >
            {showTranlsate ? langTranslation[lang]?.browse : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="border bg-white mt-5 mr-5 px-2 py-1  rounded-lg text-base md:text-xl "
          >
            {showTranlsate ? langTranslation[lang]?.signOut : "Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
