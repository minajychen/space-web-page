import { useState, useEffect } from "react";
import RocketTile from "./RocketTile";

function Rocketinfo() {
    const [rocketInfo, setRocketInfo]=useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
        .then((response)=> response.json())
        .then((data) => setRocketInfo(data))
    }, [])
    return (
      <div className="Block">
        <h2>Rockets</h2>
        <div className="scrollable d-flex">
            {rocketInfo.filter((items)=> items.flickr_images.length>0).map((item)=> <RocketTile rocketItem={item}/>)}
        </div>
      </div>
    );
  }
  
  export default Rocketinfo;