function PhotoTile({launchItem}){
    return(
        <div>
            <h5><a href={launchItem.links.webcast} target="_blank">{launchItem.name}</a></h5>
            <img src={launchItem.links?.flickr?.original[0]} className="launchPhoto"/>
        </div>
    );
}

export default PhotoTile;