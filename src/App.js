import React from "react";
import "./App.css";
import { BoxCntent } from "./components/BoxCntent";
import { FourCart } from "./components/FourCart";
import Lauch from "./components/Lauch";
import { Lastcomponent } from "./components/Lastcomponent";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import PartnerShip from "./components/PartnerShip";
import ChooseUs from "./components/ChooseUs";



function App() {

  return (
    <div className="App">
      <Navbar/>
      <PartnerShip/>
      <Services/>
      <ChooseUs/>
      <Lauch/>
      <FourCart/>
      <BoxCntent/>
      <Lastcomponent/>
    </div>
  );
}

export default App;
