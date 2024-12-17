import { useState, useEffect,useRef } from "react";
import "./assets/center.css";

function Center({
  setleftbalance,
  setrightbalance,
  setleftspend,
  setrightspend,
  setteammi,
  setteamcsk,
  teammi,
  teamcsk,
}) {
  
  const[leftrightsellskip,setleftrightsellskip]=useState("")
  const [setno, newsetno] = useState(-1);
  const [typeofplayer, newtypeofplayer] = useState("BATSMEN");
  const [no, newno] = useState(1);
  const [totalbid, settotalbid] = useState(0);
  const [playername, newplayername] = useState([
    { name: "Rohit", price: 40, type: "batsmen" },
    { name: "Virat", price: 40, type: "batsmen" },
    { name: "surya", price: 40, type: "batsmen" },
    { name: "Head", price: 40, type: "batsmen" },
    { name: "Dhoni", price: 40, type: "wicketkeeper" },
    { name: "Kl rahul", price: 40, type: "wicketkeeper" },
    { name: "Ishan", price: 40, type: "wicketkeeper" },
    { name: "buttler", price: 40, type: "wicketkeeper" },
    { name: "Bumrah", price: 40, type: "fastbowler" },
    { name: "Shami", price: 40, type: "fastbowler" },
    { name: "Arshdeep", price: 40, type: "fastbowler" },
    { name: "Starc", price: 40, type: "fastbowler" },
    { name: "Hardik", price: 40, type: "allrounder" },
    { name: "Jadeja", price: 40, type: "allrounder" },
    { name: "Axar", price: 40, type: "allrounder" },
    { name: "Livingstone", price: 40, type: "allrounder" },
    { name: "Chahal", price: 40, type: "spinner" },
    { name: "Kuldeep", price: 40, type: "spinner" },
    { name: "Washington", price: 40, type: "spinner" },
    { name: "Rashid", price: 40, type: "spinner" },

    { name: "Gill", price: 20, type: "batsmen" },
    { name: "Iyer", price: 20, type: "batsmen" },
    { name: "Tilak", price: 20, type: "batsmen" },
    { name: "Faf", price: 20, type: "batsmen" },
    { name: "pant", price: 20, type: "wicketkeeper" },
    { name: "Samson", price: 20, type: "wicketkeeper" },
    { name: "Klassen", price: 20, type: "wicketkeeper" },
    { name: "salt", price: 20, type: "wicketkeeper" },
    { name: "chahar", price: 20, type: "fastbowler" },
    { name: "siraj", price: 20, type: "fastbowler" },
    { name: "Boult", price: 20, type: "fastbowler" },
    { name: "Rabada", price: 20, type: "fastbowler" },
    { name: "Russel", price: 20, type: "allrounder" },
    { name: "Cummins", price: 20, type: "allrounder" },
    { name: "Stoinis", price: 20, type: "allrounder" },
    { name: "Maxwell", price: 20, type: "allrounder" },
    { name: "Hasaranga", price: 20, type: "spinner" },
    { name: "Nabi", price: 20, type: "spinner" },
    { name: "Varun", price: 20, type: "spinner" },
    { name: "Noor", price: 20, type: "spinner" },

    { name: "Rinku", price: 10, type: "batsmen" },
    { name: "Jaiswal", price: 10, type: "batsmen" },
    { name: "Ruturaj", price: 10, type: "batsmen" },
    { name: "Rachin", price: 10, type: "batsmen" },
    { name: "Glenn", price: 10, type: "wicketkeeper" },
    { name: "Gurbaz", price: 10, type: "wicketkeeper" },
    { name: "Pooran", price: 10, type: "wicketkeeper" },
    { name: "De kock", price: 10, type: "wicketkeeper" },
    { name: "Bhuvi", price: 10, type: "fastbowler" },
    { name: "Harshal", price: 10, type: "fastbowler" },
    { name: "Hazlewood", price: 10, type: "fastbowler" },
    { name: "Archer", price: 10, type: "fastbowler" },
    { name: "Ashwin", price: 10, type: "allrounder" },
    { name: "Reddy", price: 10, type: "allrounder" },
    { name: "Santner", price: 10, type: "allrounder" },
    { name: "Narine", price: 10, type: "allrounder" },
    { name: "Bishnoi", price: 10, type: "spinner" },
    { name: "Theekshana", price: 10, type: "spinner" },
    { name: "Rahul chahar", price: 10, type: "spinner" },
    { name: "Karan", price: 10, type: "spinner" },

    { name: "Saikishore", price: 1, type: "batsmen" },
    { name: "Miller", price: 1, type: "batsmen" },
    { name: "Willjacks", price: 1, type: "batsmen" },
    { name: "Abhishek", price: 1, type: "batsmen" },
    { name: "Dk", price: 1, type: "wicketkeeper" },
    { name: "vishnu vinod", price: 1, type: "wicketkeeper" },
    { name: "Jitesh", price: 1, type: "wicketkeeper" },
    { name: "Bairstow", price: 1, type: "wicketkeeper" },
    { name: "Natarajan", price: 1, type: "fastbowler" },
    { name: "Mohit", price: 1, type: "fastbowler" },
    { name: "Ferguson", price: 1, type: "fastbowler" },
    { name: "Nortje", price: 1, type: "fastbowler" },
    { name: "Sam curran", price: 1, type: "allrounder" },
    { name: "Krunal", price: 1, type: "allrounder" },
    { name: "Rahul Tewatia ", price: 1, type: "allrounder" },
    { name: "Dube", price: 1, type: "allrounder" },
    { name: "zampa", price: 1, type: "spinner" },
    { name: "Allah", price: 1, type: "spinner" },
    { name: "Chawla", price: 1, type: "spinner" },
    { name: "Gopal", price: 1, type: "spinner" },
  ]);

  const [bidteam, setbidteam] = useState();
  const [currentplayerindex, newplayerindex] = useState(0);

  useEffect(() => {
    if (playername[currentplayerindex].type === "batsmen") {
      newtypeofplayer("BATSMEN");
    } else if (playername[currentplayerindex].type === "fastbowler") {
      newtypeofplayer("FASTBOWLER");
    } else if (playername[currentplayerindex].type === "allrounder") {
      newtypeofplayer("ALLROUNDER");
    } else if (playername[currentplayerindex].type === "spinner") {
      newtypeofplayer("SPINNER");
    } else if (playername[currentplayerindex].type === "wicketkeeper") {
      newtypeofplayer("WICKETKEEPEER");
    }
  }, [playername, currentplayerindex]);
  useEffect(()=>{
    
    if (leftrightsellskip === "sell" || leftrightsellskip === "skip"){
      lefthide.current.disabled=false
      righthide.current.disabled=false
       lefthide.current.style.backgroundColor=""
      righthide.current.style.backgroundColor=""
    }
    else if(leftrightsellskip==="left")
    {
      lefthide.current.disabled=true
      righthide.current.disabled=false
      lefthide.current.style.backgroundColor="white"
      righthide.current.style.backgroundColor=""
    }
    else if(leftrightsellskip==="right")
      {
        righthide.current.disabled=true
        lefthide.current.disabled=false
         righthide.current.style.backgroundColor="white"
         lefthide.current.style.backgroundColor=""
      }

  },[leftrightsellskip])
  const lefthide= useRef(null)
  const righthide= useRef(null)

  const handlesell = () => {
    // if(no<=playername.length)
    console.log(bidteam);
    setleftrightsellskip("sell")
    
    if (bidteam === "MI" || bidteam === "CSK") {
      if (bidteam === "MI") {
        setleftbalance(
          (prevleftbalance) =>
            prevleftbalance - playername[currentplayerindex].price
        );
        setleftspend(
          (prevleftspend) =>
            prevleftspend + playername[currentplayerindex].price
        );
        setteammi((prevteammi) => [
          ...prevteammi,
          playername[currentplayerindex].name,
        ]);
      }
      if (bidteam === "CSK") {
        setrightbalance(
          (prevrightbalance) =>
            prevrightbalance - playername[currentplayerindex].price
        );
        setrightspend(
          (prevrightspend) =>
            prevrightspend - playername[currentplayerindex].price
        );
        setteamcsk((prevteamcsk) => [
          ...prevteamcsk,
          playername[currentplayerindex].name,
        ]);
      }
      setbidteam("");
      newplayerindex(currentplayerindex + 1);
      newno(no + 1);
      settotalbid(0);
    } else {
      alert("BID to SELL");
    }
  };
  console.log(totalbid);

  const handleskip = () => {
    setleftrightsellskip("skip")
    
    const skippedplayer = playername[currentplayerindex];
    newplayername((skip) => [...skip, skippedplayer]);
    newplayerindex(currentplayerindex + 1);

    newno(no + 1);
  };

  const handleleftbid = () => {
    
    setleftrightsellskip("left")
    if (teammi.length < 15) {
      if (totalbid < 10) {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 1 }
              : player
          )
        );
      } else if (totalbid < 20) {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 2 }
              : player
          )
        );
      } else {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 5 }
              : player
          )
        );
      }

      settotalbid(totalbid + 1);
      setbidteam("MI");
    } else {
      alert("No extra player can be added");
    }
  };
  const handlerightbid = () => {
    setleftrightsellskip("right")
   
    if (teamcsk.length < 15) {
      if (totalbid < 10) {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 1 }
              : player
          )
        );
      } else if (totalbid < 20) {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 2 }
              : player
          )
        );
      } else {
        newplayername(
          playername.map((player, index) =>
            index === currentplayerindex
              ? { ...player, price: player.price + 5 }
              : player
          )
        );
      }
      settotalbid(totalbid + 1);
      setbidteam("CSK");
    } else {
      alert("No extra player can be added");
    }
  };

  useEffect(() => {
    if (typeofplayer) {
      newsetno((prevsetno) => prevsetno + 1);
    }
  }, [typeofplayer]);

 



  return (
    <div class="center-main">
      <div class="setno">
        <h6>setno:{setno}</h6>
      </div>
      <div class="playerstype">
        <h6>{typeofplayer}</h6>
      </div>
      <div class="noofplayers">
        <h6>NO:{no}</h6>
      </div>
      <div class="playprice">
        <p>
          Playername
          <br />
          {playername[currentplayerindex].name}
          <br />
          Price
          <br />
          {playername[currentplayerindex].price}
        </p>
      </div>
      <div class="bid1">
        <button type="submit"ref={lefthide} onClick={handleleftbid}>
          BID
        </button>
      </div>
      <div class="bid2">
        <button type="submit"ref={righthide} onClick={handlerightbid}>
          BID
        </button>
      </div>
      <div class="sell">
        <button type="submit" onClick={handlesell}>
          SELL
        </button>
      </div>
      <div class="skip">
        <button type="submit" onClick={handleskip}>
          skip
        </button>
      </div>
      <div class="submit">
        <button type="submit">submit</button>
      </div>
    </div>
  );
}
export default Center;
