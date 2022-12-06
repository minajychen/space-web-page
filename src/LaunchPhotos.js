import { useState, useEffect } from "react";
import PhotoTile from "./PhotoTile";

function LaunchPhotos() {
    const [launchPhotos, setLaunchPhotos]=useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v5/launches")
        .then((response)=> response.json())
        .then((data) => setLaunchPhotos(data))
    }, [])
    return (
      <div className="Block">
        <h2 className='title'>Launches</h2>
        <p className='glitter-bg'>Click on the links to take you to the relevant Webcast</p>
        <div className="scrollable d-flex">
            {launchPhotos.filter((item)=> item.links.flickr.original.length>0).map((launchPhoto)=> <PhotoTile launchItem={launchPhoto}/>)}
        </div>
      </div>
    );
  }
  
  export default LaunchPhotos;