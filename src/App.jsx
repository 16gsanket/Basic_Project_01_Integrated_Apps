import "./App.css";
import ToDoList from "./pages/ToDoList";
import Skeleton from "./components/Skeleton";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvicesApp from "./pages/AdvicesApp";
import Dark from "./components/Dark";
import Clean from "./components/Clean";
import { useState } from "react";
import CoinContext from "./context/CoinContext";

function App() {
  const [coins, setCoins] = useState(90);

  function deduce_coins() {
    setCoins((coins) => coins - 1);
  }

  return (
    <div className="h-screen w-screen bg-slate-200">
      <CoinContext.Provider value={{ coins, deduce_coins }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="todolist"
              element={<ToDoList  />}
            />
            <Route path="skeleton" element={<Skeleton coins={coins} />} />
            <Route
              path="AdviceApp"
              element={<AdvicesApp  />}
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
                element={<Dark />}
              />
              <Route
                path="clean"
                element={<Clean />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
