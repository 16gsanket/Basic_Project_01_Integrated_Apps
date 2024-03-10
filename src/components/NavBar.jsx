import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-10 w-full bg-indigo-600 text-white pl-10 pt-1 items-center">
      <NavLink to="/">

      <h2>Home</h2>
      </NavLink>
    </div>
  );
}

export default NavBar;
