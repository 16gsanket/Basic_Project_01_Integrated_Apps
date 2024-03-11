import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ coins }) {
  let navigate = useNavigate();

  return (
    <div className="h-10 w-full bg-indigo-600 text-white pl-10 pt-1 items-center pr-10 flex align-middle justify-between">
      {/* <NavLink to="/"> */}

      <h2 onClick={() => navigate("/")}>Home</h2>
      {/* </NavLink> */}

      <h3>Coins : {coins}</h3>
    </div>
  );
}

export default NavBar;
