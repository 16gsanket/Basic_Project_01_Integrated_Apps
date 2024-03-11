import "./App.css";
import ToDoList from "./pages/ToDoList";
import Skeleton from "./components/Skeleton";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvicesApp from "./pages/AdvicesApp";
import Dark from "./components/Dark";
import Clean from "./components/Clean";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(100);

  function deduce_coins() {
    setCoins((coins) => coins - 1);
  }

  return (
    <div className="h-screen w-screen bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage coins={coins} />} />
          <Route
            path="todolist"
            element={<ToDoList coins={coins} deduce_coins={deduce_coins} />}
          />
          <Route path="skeleton" element={<Skeleton coins={coins} />} />
          <Route
            path="AdviceApp"
            element={<AdvicesApp coins={coins} deduce_coins={deduce_coins} />}
          >
            <Route
              path=":advice"
              element={
                <>
                  {" "}
                  <p>Section Comming Soon</p>{" "}
                </>
              }
            />
            {/* <Route index element={<Navigate replace to="dark" />} /> */}
            <Route
              path="dark"
              element={<Dark coins={coins} deduce_coins={deduce_coins} />}
            />
            <Route
              path="clean"
              element={<Clean coins={coins} deduce_coins={deduce_coins} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
