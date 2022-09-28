import React, { useState, useEffect } from "react";
import "./buttons.css";
import Infoscreen from "../infoscreen/infoscreen";

function Buttons() {
  const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
  };

  const [Active, setActive] = useState(<StartButton />);
  const [Start, setStart] = useLocalStorage("startTimestamp", 0);
  const [Stop, setStop] = useLocalStorage("stopTimestamp", 0);

  const handleStart = () => {
    setStart(Date.now());
    setActive(<StopButton />);
    console.log(Start);
  };
  const handleStop = () => {
    setStop(Date.now());
    setActive(<InfoFunction />);
    console.log(Stop);
  };
  const handleInfo = () => {
    console.log(Stop - Start);
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
  return <div>{Active}</div>;
}
export default Buttons;
