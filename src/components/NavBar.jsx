import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  return (
    <div className="h-10 w-full bg-indigo-600 text-white pl-10 pt-1 items-center">
      {/* <NavLink to="/"> */}

      <h2 onClick={() => navigate("/")}>Home</h2>
      {/* </NavLink> */}
    </div>
  );
}

export default NavBar;
