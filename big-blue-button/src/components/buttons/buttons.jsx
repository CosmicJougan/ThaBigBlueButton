import React from "react";
import "./buttons.css";

function Buttons(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="startButton" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="stopButton" onClick={props.stop}>
            Stop
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="startButton" onClick={props.resume}>
            Hervat
          </button>
          <button className="stopButton" onClick={props.reset}>
            Reset
          </button>
          <button className="saveButton" onClick={props.register}>
            Opslaan
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Buttons;
