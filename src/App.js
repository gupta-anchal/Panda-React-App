import "./App.css";
import Parent from "./components/main/parent.js";
import NavBar from "./components/navbar/navbar.js";
import Animal from "./components/animal/animal.js";
import About from "./components/about/about.js";
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
          path="animal"
          element={
            <>
              <NavBar />
              <Animal />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <NavBar />
              <About />
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
