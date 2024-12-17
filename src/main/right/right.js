import "./assets/right.css";
function Right({playername2,rightbalance,rightspend,teamcsk}){
    return(
            <div class="right-main">
          <div class="tname2"></div>
          <div class="pname2">{playername2}</div>
          <div class="balance2">Balance:{rightbalance}</div>
          <div class="squad2">
            <div class="pplayer1">{teamcsk[0]}</div>
            <div class="pplayer2">{teamcsk[1]}</div>
            <div class="pplayer3">{teamcsk[2]}</div>
            <div class="pplayer4">{teamcsk[3]}</div>
            <div class="pplayer5">{teamcsk[4]}</div>
            <div class="pplayer6">{teamcsk[5]}</div>
            <div class="pplayer7">{teamcsk[6]}</div>
            <div class="pplayer8">{teamcsk[7]}</div>
            <div class="pplayer9">{teamcsk[8]}</div>
            <div class="pplayer10">{teamcsk[9]}</div>
            <div class="pplayer11">{teamcsk[10]}</div>
            <div class="pplayer12">{teamcsk[11]}</div>
            <div class="pplayer13">{teamcsk[12]}</div>
            <div class="pplayer14">{teamcsk[13]}</div>
            <div class="pplayer15">{teamcsk[14]}</div>
          </div>
          <div class="spend1">spend:{rightspend}</div>
        </div>
    )
}
export default Right