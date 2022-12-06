import { useState, useEffect } from "react";
import NewsTile from "./NewsTile";

function LatestNews() {
    const [latestNews, setLatestNews]=useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/history")
        .then((response)=> response.json())
        .then((data) => {
            const sortedData= data.sort((a,b)=>{
                if (a.event_date_utc < b.event_date_utc) {
                    return 1;
                }
                if (a.event_date_utc > b.event_date_utc){
                    return -1;
                }
                return 0;
            });
            setLatestNews(sortedData.slice(0,4));
        })
    }, [])
    return (
      <div className="Block">
        <h2 className="title">Latest History Events</h2>
        <div className="scrollable">
            {latestNews.map((latestItem)=> <NewsTile newsItem={latestItem}/>)}
        </div>
      </div>
    );
  }
  
  export default LatestNews;