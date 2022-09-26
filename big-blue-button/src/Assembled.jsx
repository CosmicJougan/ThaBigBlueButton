import "./App.css";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import Buttons from "./components/buttons/buttons";
import ResponsiveAppBar from "./components/navBar/navBar";
import { useState } from "react";
import Werkdeel from "./components/werkdeel/Werkdeel";

function Assembled() {
    const[Active,setActive] = useState(<Login/>)

    
    const handleLogin = () => {
        setActive(<Werkdeel/>)
    }

  return (
    <div>
        {Active}
    </div>
  );
}

export default Assembled;
