import "./assets/teams.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Teams() {
  const navigatenext = useNavigate();
  const [Value1, setvalue1] = useState("");
  const [Value2, setvalue2] = useState("");

  const handleChange1 = (event) => {
    setvalue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setvalue2(event.target.value);
  };

  const handlenext = (event) => {
    event.preventDefault();

    if (Value1 && Value2) {
      navigatenext("/Main",{state:{playername1:Value1,playername2:Value2}});
    } else {
      alert("Enter the player name!");
    }
  };

  return (
    <div>
      <div className="wrapper-teams">
        <div className="chooseteam">
          <h1>CHOOSE YOUR TEAM</h1>
        </div>
        <div className="teams">
            <div className="team1">
              <div className="circle1"></div>
              <h4>TEAM 1</h4>
              <input
                type="text"
                name="text1"
                value={Value1}
                onChange={handleChange1}
                placeholder="Type your name"
              ></input>
            </div>
            <div className="team2">
              <div className="circle2"></div>
              <h4>TEAM 2</h4>
              <input
                type="text"
                name="text2"
                value={Value2}
                onChange={handleChange2}
                placeholder="Type your name"
              ></input>
            </div>
          </div>
        </div>
        <div class="next">
          <button type="submit" onClick={handlenext}>
            next
          </button>
        </div>
      </div>
    
  );
}
export default Teams;
