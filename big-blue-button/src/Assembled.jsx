import "./App.css";
import { useState } from "react";
import Workpart from "./components/workpart/Workpart";

function Assembled() {
  const [Active, setActive] = useState(<Workpart />);

  return <div>{Active}</div>;
}

export default Assembled;
