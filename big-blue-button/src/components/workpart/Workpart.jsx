import Buttons from "../buttons/buttons";
import ResponsiveAppBar from "../navBar/navBar";
import Overzicht from "../overview/overview";
import Files from "../files/files";
import { useState } from "react";
import Overview from "../overview/overview";


function Workpart(props) {

  const [Active, setActive] = useState(<Buttons/>)

  const openOverview = () => {
    setActive(<Overview/>)
  }
  const openFiles = () => {
    setActive(<Files/>)
  }
  const openTimer = () => {
    setActive(<Buttons/>)
  }

  return (
    <div className="App-header">
      <ResponsiveAppBar openOverview={openOverview}
                        openFiles={openFiles}
                        openTimer={openTimer}
      />
      {Active}
    </div>
  );
}

export default Workpart;
