import Buttons from "../buttons/buttons";
import ResponsiveAppBar from "../navBar/navBar";
import Clock from "../clock/clock";

function Workpart(props) {
  return (
    <div className="App-header">
      <ResponsiveAppBar />
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
