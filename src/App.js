import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// Main pages
import Nav from "./components/navbar";
import Home from "./Home";
import Maleshounen from "./maleshounen";
import MHAM from "./mhapage";
import Femaleshounen from "./femaleshounen";
// Login
import Login from "./components/login/login";
// characters
import DekuEquip from "./components/mha/deku/deku-equip";
import Allmightequip from "./components/mha/allmight/allmightequipment";
import Shotoequip from "./components/mha/shoto/shotoequipment";
import Bakugouequip from "./components/mha/bakugou/bakugouequip";
// Workouts
import Dekuworkout1 from "./components/mha/deku/dekubandworkout";
import Allmightworkout1 from "./components/mha/allmight/allmightbandworkout";
import Shotobandworkout1 from "./components/mha/shoto/shotoband";
function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/maleshounen" component={Maleshounen} />
        <Route exact path="/MHAM" component={MHAM} />
        <Route exact path="/deku-equip" component={DekuEquip} />
        <Route exact path="/allmightequipment" component={Allmightequip} />
        <Route exact path="/shotoequipment" component={Shotoequip} />
        <Route exact path="/bakugouequip" component={Bakugouequip} />
        <Route exact path="/Femaleshounen" component={Femaleshounen} />
        {/* Login page */}
        <Route exact path="/login" component={Login} />
        {/* Workouts */}
        <Route exact path="/dekubandworkout" component={Dekuworkout1} />
        <Route exact path="/allmightbandworkout" component={Allmightworkout1} />
        <Route exact path="/shotoband" component={Shotobandworkout1} />
      </Switch>
    </div>
  );
}

export default App;
