import "./assets/main.css";
import { useLocation } from "react-router-dom";
import Left from "./left/left";
import Right from "./right/right";
import Center from "./center/center";
import { useState } from "react";

function Main() {
const location =useLocation();
const {playername1,playername2}=location.state
const [leftbalance,setleftbalance]=useState(1000)
const [rightbalance,setrightbalance]=useState(1000)
const [leftspend,setleftspend]=useState(0)
const [rightspend,setrightspend]=useState(0)
const [teammi,setteammi]=useState([])
const [teamcsk,setteamcsk]=useState([])


  return (
    <div>
       <div class="wrapper-main">
        <Left playername1={playername1} leftbalance={leftbalance} leftspend={leftspend} teammi={teammi} /> 
        <Center setleftbalance={setleftbalance} setrightbalance={setrightbalance} setleftspend= {setleftspend}setrightspend={setrightspend}setteammi={setteammi} setteamcsk={setteamcsk}teammi={teammi} teamcsk={teamcsk}/> 
        <Right playername2={playername2}rightbalance={rightbalance} rightspend={rightspend} teamcsk={teamcsk}/>
    </div>
    </div>
  );
}
export default Main;
 