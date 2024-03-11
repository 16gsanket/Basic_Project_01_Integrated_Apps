import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import NavBar from "../components/NavBar";

function AdvicesApp({ coins, deduce_coins }) {
  // Use the useParams hook to extract the dynamic part of the URL
  const { advice } = useParams();
  console.log(advice);

  return (
    <div>
      <Skeleton coins={coins}>
        <div className="h-1/6 w-full  flex align-middle justify-center items-center">
          <div className="w-3/12 h-2/6 bg-slate-400 rounded-2xl flex align-middle justify-center gap-1 overflow-hidden">
            {/* Update NavLink to use the dynamic adviceType */}
            <NavLink
              to={`dark`}
              className="h-full w-1/2 flex align-middle justify-center items-center"
              onClick={deduce_coins}
            >
              <div>
                <h3>Dark</h3>
              </div>
            </NavLink>
            {/* Update NavLink to use the dynamic adviceType */}
            <NavLink
              to={`clean`}
              className="h-full w-1/2 flex align-middle justify-center items-center"
              onClick={deduce_coins}
            >
              <div>
                <h3>Clean</h3>
              </div>
            </NavLink>
          </div>
          <h3>{advice}</h3>
        </div>
        <Outlet
        // number_jokes={number_jokes}
        // change_number_of_jokes={change_number_of_jokes}
        
        />
      </Skeleton>
    </div>
  );
}

export default AdvicesApp;
