import React from "react";
import "./App.css";
import { BoxCntent } from "./components/BoxCntent";
import { FourCart } from "./components/FourCart";
import Lauch from "./components/Lauch";
import { Lastcomponent } from "./components/Lastcomponent";



function App() {

  return (
    <div className="App">
      <Lauch/>
      <FourCart/>
      <BoxCntent/>
      <Lastcomponent/>
    </div>
  );
}

export default App;
