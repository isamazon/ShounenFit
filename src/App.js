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


function App() {
  return (
    <div className="app">
      <Route exact path='/' component={Home} />
      <Route exact path='/maleshounen' component={Maleshounen}/>
      <Route exact path='/MHAM' component={MHAM} />
      <Route exact path ='/deku-equip' component={DekuEquip} />
      <Route exact path ='/allmightequipment' component={Allmightequip} />
      <Route exact path ='/shotoequipment' component={Shotoequip} />
      <Route exact path ='/Femaleshounen' component={Femaleshounen} />
    </div>
  );
}

export default App;
