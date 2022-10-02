import Buttons from "../buttons/buttons";
import ResponsiveAppBar from "../navBar/navBar";
import Clock from "../clock/clock";
import Overview from "../overview/overview";
import Files from "../files/files";
import { useState } from "react";

function Workpart(props) {
  const [Active, setActive] = useState(<Buttons />);

  const openOverview = () => {
    setActive(<Overview />);
  };
  const openFiles = () => {
    setActive(<Files />);
  };
  const openTimer = () => {
    setActive();
  };

  return (
    <div className="App-header">
      <ResponsiveAppBar
        openOverview={openOverview}
        openFiles={openFiles}
        openTimer={openTimer}
      />
      <Buttons
        status={props.status}
        resume={props.resume}
        reset={props.reset}
        stop={props.stop}
        start={props.start}
        register={props.register}
      />
      <div className="clock-holder">
        <div className="stopwatch">
          <Clock time={props.time} />
        </div>
      </div>
    </div>
  );
}

export default Workpart;
