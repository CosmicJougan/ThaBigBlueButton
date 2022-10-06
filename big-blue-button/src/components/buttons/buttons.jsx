import React, { useState } from "react";
import { fetchWrapper } from "utils/fetchWrapper";
import "./buttons.css";

function Buttons() {
  const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
  };

  const [time, setTime] = useLocalStorage("timerValue", {
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useLocalStorage("timerRunning", 0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if (updatedM === 59) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 59) {
      updatedM++;
      updatedS = -1;
    }
    // if (updatedMs === 100) {
    //   updatedS++;
    //   updatedMs = 0;
    // }
    updatedS++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const calculateTimestamp = () => {
    return time.s + time.m * 60 + time.h * 60 * 60;
  };

  const resume = () => start();

  // https://docs.google.com/spreadsheets/d/1d_2S2XhV6ZHfxXu89PLBuVNN4kOX-Fi3YQ6801eEWL4/edit?usp=sharing
  const register = async () => {
    await fetchWrapper
      .post(
        "https://sheet.best/api/sheets/7ddd0021-8bb1-4be3-badd-0bf2ecb932f8",
        {
          users: "Michael",
          sunday: calculateTimestamp(),
        }
      )
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((error) =>
        console.error("There was an error adding to sheets!", error)
      );
  };
  const h = () => {
    if (time.h === 0) {
      return "";
    } else {
      return <span>{time.h >= 10 ? time.h : "0" + time.h}</span>;
    }
  };

  return (
    <div>
      {status === 0 ? (
        <button className="startButton" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div>
          <button className="stopButton" onClick={stop}>
            Stop
          </button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button className="startButton" onClick={resume}>
            Hervat
          </button>
          <button className="stopButton" onClick={reset}>
            Reset
          </button>
          <button className="saveButton" onClick={register}>
            Opslaan
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="clock-holder">
        <div className="stopwatch">
          {h()}&nbsp;&nbsp;
          <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
          &nbsp;:&nbsp;
          <span>{time.m >= 10 ? time.m : "0" + time.m}</span>
          &nbsp;:&nbsp;
          <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
