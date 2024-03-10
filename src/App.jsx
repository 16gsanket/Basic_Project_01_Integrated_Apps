import "./App.css";
import ToDoList from "./pages/ToDoList";
import Skeleton from "./components/Skeleton";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdvicesApp from "./pages/AdvicesApp";
import Dark from "./components/Dark";
import Clean from "./components/Clean";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="todolist" element={<ToDoList />} />
          <Route path="skeleton" element={<Skeleton />} />
          <Route path="AdviceApp" element={<AdvicesApp />}>
            <Route index element={<Navigate replace to="dark" />} />
            <Route path="dark" element={<Dark />} />
            <Route path="clean" element={<Clean />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
