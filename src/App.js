import "./App.css";
import Parent from "./components/main/parent.js";
import NavBar from "./components/navbar/navbar.js";
import Temperature from "./components/temperature/temperature.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />,<Parent />
            </>
          }
        >
          {" "}
        </Route>
        <Route
          path="temperature"
          element={
            <>
              <NavBar />
              <Temperature />
            </>
          }
        />
        <Route
          path="parent"
          element={
            <>
              <NavBar />
              <Parent />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
