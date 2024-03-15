import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import ProjectCards from "../components/ProjectCards";
import { NavLink } from "react-router-dom";
import CoinsContext from "../context/CoinContext";
import { useContext } from "react";

const PROJECT_LIST = [
  {
    name: "To Do List",
    link_to_project: "todolist",
  },
  {
    name: "Skeleton App",
    link_to_project: "skeleton",
  },
  {
    name: "Advice App",
    link_to_project: "AdviceApp",
  },
];

function Homepage() {
  const { coins } = useContext(CoinsContext);
  return (
    <div className="h-screen w-screen">
      <NavBar coins={coins} />
      <MainPage>
        <div className="h-full w-full flex gap-2 flex-wrap p-3 align-middle justify-center items-center">
          {PROJECT_LIST.map((project) => (
            // project_name = project.name

            <NavLink to={project.link_to_project}>
              <ProjectCards name={project.name} />
            </NavLink>
          ))}
        </div>
      </MainPage>
    </div>
  );
}

export default Homepage;
