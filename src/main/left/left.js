
import "./assets/left.css";
function Left({playername1,leftbalance,leftspend,teammi})
{


    return(
             <div class="left-main">
          <div class="tname1"></div>
          <div class="pname1">{playername1}</div>
          <div class="balance1">Balance:{leftbalance}</div>
          <div class="squad1">
            <div class="player1">{teammi[0]}</div>
            <div class="player2">{teammi[1]}</div>
            <div class="player3">{teammi[2]}</div>
            <div class="player4">{teammi[3]}</div>
            <div class="player5">{teammi[4]}</div>
            <div class="player6">{teammi[5]}</div>
            <div class="player7">{teammi[6]}</div>
            <div class="player8">{teammi[7]}</div>
            <div class="player9">{teammi[8]}</div>
            <div class="player10">{teammi[9]}</div>
            <div class="player11">{teammi[10]}</div>
            <div class="player12">{teammi[11]}</div>
            <div class="player13">{teammi[12]}</div>
            <div class="player14">{teammi[13]}</div>
            <div class="player15">{teammi[14]}</div>
          </div>
          <div class="spend1">spend:{leftspend}</div>
        </div>

        

    )
}
export default Left