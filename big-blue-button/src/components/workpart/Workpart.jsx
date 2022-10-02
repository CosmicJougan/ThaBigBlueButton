import Buttons from "../buttons/buttons";
import ResponsiveAppBar from "../navBar/navBar";
import { useState } from "react";

function Workpart() {

  const [Active, setActive] = useState(<Buttons/>)

  return (
    <div className="App-header">
      <ResponsiveAppBar />
      {Active}
    </div>
  );
}

export default Workpart;
