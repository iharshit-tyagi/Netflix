import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    //Sign out Code

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

    navigate("/");
  };

  return (
    <div className="flex justify-between w-full bg-gradient-to-b from-black">
      <img
        className="w-48 pl-4 pt-3   "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
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
