import React from 'react'
import './App.css';
import {Route } from 'react-router-dom'
// Main pages
import Home from './Home'
import Maleshounen from './maleshounen'
import MHAM from './mhapage'
import Femaleshounen from './femaleshounen'
// characters
import DekuEquip from './components/mha/deku/deku-equip'
import Allmightequip from './components/mha/allmight/allmightequipment'
import Shotoequip from './components/mha/shoto/shotoequipment'
import Bakugouequip from './components/mha/bakugou/bakugouequip'
// Workouts
import Dekuworkout1 from './components/mha/deku/dekubandworkout'

function App() {
  return (
    <div className="app">
      <Route exact path='/' component={Home} />
      <Route exact path='/maleshounen' component={Maleshounen}/>
      <Route exact path='/MHAM' component={MHAM} />
      <Route exact path ='/deku-equip' component={DekuEquip} />
      <Route exact path ='/allmightequipment' component={Allmightequip} />
      <Route exact path ='/shotoequipment' component={Shotoequip} />
      <Route exact path ='/bakugouequip' component={Bakugouequip} />
      <Route exact path ='/Femaleshounen' component={Femaleshounen} />
      {/* Workouts */}
      <Route exact path ='/dekubandworkout' component={Dekuworkout1} />
    </div>
  );
}

export default App;
