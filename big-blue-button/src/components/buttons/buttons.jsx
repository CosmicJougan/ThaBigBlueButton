import React, { useState, useEffect } from "react";
import "./buttons.css";
import Infoscreen from "../infoscreen/infoscreen";

function Buttons() {
  const [Active, setActive] = useState(<StartButton />);
  const [Start, setStart] = useState(0);
  const [Stop, setStop] = useState(0);

  const handleStart = () => {
    setStart(Date.now());
    setActive(<StopButton />);
    console.log(Start);
  };
  const handleStop = () => {
    setStop(Date.now());
    setActive(<InfoFunction />);
    console.log(Start, Stop);
  };
  const handleInfo = () => {
    console.log(Stop);
    setActive(<StartButton />);
  };

  function StartButton() {
    return (
      <div>
        <button className="startButton" onClick={handleStart}>
          start
        </button>
      </div>
    );
  }
  function StopButton() {
    return (
      <div>
        <button className="stopButton" onClick={handleStop}>
          stop
        </button>
      </div>
    );
  }
  function InfoFunction() {
    return (
      <div>
        <Infoscreen />
        <button className="verderButton" onClick={handleInfo}>
          verder
        </button>
      </div>
    );
  }
  return (
    <div>
      <StartButton />
      <StopButton />
      <InfoFunction />
    </div>
  );
}
export default Buttons;
