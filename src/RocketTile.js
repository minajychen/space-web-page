function RocketTile({rocketItem}){
    return(
        <div>
            <h5><a href={rocketItem.wikipedia} target="_blank">{rocketItem.name}</a></h5>
            <img src={rocketItem.flickr_images[0]} className="launchPhoto"/>
        </div>
    );
}

export default RocketTile;