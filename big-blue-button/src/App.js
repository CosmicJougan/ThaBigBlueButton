import "./App.css";
import Assembled from "./Assembled";
import Workpart from "./components/workpart/Workpart";
import Registration from "./components/registration/registration";
import { useState } from "react";
import React from "react";
import { fetchWrapper } from "./utils/fetchWrapper";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
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

  return (
    <div>
      <Workpart
        status={status}
        resume={resume}
        reset={reset}
        stop={stop}
        start={start}
        time={time}
        register={register}
      />
    </div>
  );
}

export default App;
