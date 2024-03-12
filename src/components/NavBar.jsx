import { Link } from "react-router-dom";
import { logout } from "../config/firebase";
import logo from "../../public/static/assets/mentorheal-logo.png";
import searchlogo from "../../public/static/assets/searchIcon.svg";
import userProfile from "../../public/static/assets/profile-user.png";

const NavBar = () => {
  return (
    <div className="h-[60px] shadow flex justify-between items-center px-14">
      <Link to="/">
        <img
          className="w-[208px] h-[26.44px] hover:cursor-pointer "
          src={logo}
          alt=""
        />
      </Link>

      <div className="w-96 flex items-center relative">
        <img className="w-5 h-5 absolute left-4" src={searchlogo} alt="" />
        <input
          className="w-96 bg-slate-200 p-2 rounded-3xl focus:outline-none pl-12"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex justify-between items-center gap-8">
        <button
          className="bg-red-500 hover:bg-red-600 py-2 px-5 rounded-3xl text-white font-semibold"
          onClick={logout}
        >
          Logout
        </button>
        <div className="w-10 h-10 hover:cursor-pointer">
          <img src={userProfile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
