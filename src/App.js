import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './app.css'
import {Action,Orginals, romance} from './url'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <RowPost url={Orginals} title='Netflix Orginals'/>
     <RowPost url={Action} title='Action Movies' isSmall/>
     <RowPost url={romance} title='Romance Movies' isSmall/>

    </div>
  );
}

export default App;
