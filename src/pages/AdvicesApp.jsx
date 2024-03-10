import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Skeleton from "../components/Skeleton";

function AdvicesApp() {
  // Use the useParams hook to extract the dynamic part of the URL
  const { adviceType } = useParams();
  console.log(adviceType);

  return (
    <div>
      <Skeleton>
        <div className="h-1/6 w-full  flex align-middle justify-center items-center">
          <div className="w-3/12 h-2/6 bg-slate-400 rounded-2xl flex align-middle justify-center gap-1 overflow-hidden">
            {/* Update NavLink to use the dynamic adviceType */}
            <NavLink
              to={`dark`}
              className="h-full w-1/2 flex align-middle justify-center items-center"
            >
              <div>
                <h3>Dark</h3>
              </div>
            </NavLink>
            {/* Update NavLink to use the dynamic adviceType */}
            <NavLink
              to={`clean`}
              className="h-full w-1/2 flex align-middle justify-center items-center"
            >
              <div>
                <h3>Clean</h3>
              </div>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </Skeleton>
    </div>
  );
}

export default AdvicesApp;
