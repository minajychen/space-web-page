import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LaunchCard({launchItem}) {
  return (
    <Card style={{ minWidth: 'fit-content' }}>
      <div style={{height:'350px', overflowY:'hidden'}}><Card.Img variant="top" src={launchItem.links.flickr.original[0]} /></div>
      <Card.Body>
        <Card.Title>{launchItem.name}</Card.Title>
        {/* <Card.Text>
          {launchItem.details}
        </Card.Text> */}
        
      </Card.Body>
    </Card>
  );
}

export default LaunchCard;