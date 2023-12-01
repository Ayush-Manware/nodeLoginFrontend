import "./App.css";
import { NavLink } from "react-router-dom";
import RoutesCompo from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Prepbytes</h1>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <RoutesCompo />
    </div>
  );
}

export default App;
