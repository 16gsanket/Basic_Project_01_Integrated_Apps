import NavBar from "./NavBar";
import MainPage from "./MainPage";
import TaskCard from "./TaskCard";
import { useState } from "react";



function Skeleton({children , coins}) {
  //can use dumy to do list ---> (tasklist) 
  

  return (
    <div className="h-screen w-screen">
      <NavBar coins={coins}/>

      <MainPage>

        {children}
        
      </MainPage>
    </div>
  );
}

export default Skeleton;
