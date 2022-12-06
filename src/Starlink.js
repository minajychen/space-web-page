import { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import StarlinkRow from "./StarlinkRow";

function Starlink() {
    const [starlinks, setStarlinks]=useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/starlink")
        .then((response)=> response.json())
        .then((data) => setStarlinks(data))
    }, [])
    return (
      <div className="Block">
        <h2 className="title">Starlinks</h2>
        <div className="scrollable">
        <Table>
            <thead>
                <tr>
                    <th>Starlink Name</th> <th>Center Name</th> <th>Height</th>
                </tr>
            </thead>
            <tbody >
                {starlinks.filter((item)=> item.height_km).map((starlinkItem)=> <StarlinkRow starlink={starlinkItem}/>)}
            </tbody>
        </Table>
        </div>
      </div>
    );
  }
  
  export default Starlink;
