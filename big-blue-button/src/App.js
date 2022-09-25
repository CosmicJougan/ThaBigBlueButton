import "./App.css";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import Buttons from "./components/buttons/buttons";
import ResponsiveAppBar from "./components/navBar/navBar";

function App() {
  return (
      <div className="App-header">
      <ResponsiveAppBar/>
        <Buttons />
      </div>

  );
}

export default App;
