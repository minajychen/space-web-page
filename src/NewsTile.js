function NewsTile({newsItem}){
    return(
        <div>
            <h5><a href={newsItem.links.article} target="_blank">{newsItem.title}</a></h5>
            <p>{newsItem.event_date_utc}</p>
            <p>{newsItem.details}</p>
        </div>
    );
}

export default NewsTile;