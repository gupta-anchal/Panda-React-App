import './App.css';
import Parent from './components/main/parent.js';
import NavBar from './components/navbar/navbar.js';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Parent />
      </BrowserRouter>
    </div>
  );
}

export default App;
