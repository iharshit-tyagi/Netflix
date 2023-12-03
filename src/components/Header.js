import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NF_URL } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user);
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

  return (
    <div className="flex justify-between w-full bg-gradient-to-b from-black">
      <img className="w-48 pl-4 pt-3   " src={NF_URL} alt="logo" />
      {user && (
        <div>
          <button
            onClick={handleSignOut}
            className="border bg-white mt-5 mr-5 px-2 py-1  "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
