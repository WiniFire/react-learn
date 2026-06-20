import "./App.css";
import {Outlet, NavLink} from "react-router";
import Search from "./components/Search";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext);

  

  return (
    <div className={`theme-${theme}`}>
    <Search />
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/todo">ToDo</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
    </nav>
    <button onClick={toggleTheme}>Toggle Theme (current: {theme})</button>
    <Outlet />
    </div>
  );
}

export default App;
