import logo from './logo.svg';
import './App.css';
import Starlink from './Starlink';
import LatestNews from './LatestNews';
import RocketInfo from './RocketInfo';
import LaunchPhotos from './LaunchPhotos';
import {Row, Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="title">SpaceX Dashboard</h1> <h5 className="subtitle">by Mina Chen</h5>
      <Row>
        <Col sm={12} md={6}><Starlink/></Col>
        <Col sm={12} md={6}><LatestNews/></Col>
      </Row>
      
      <LaunchPhotos/>
      <RocketInfo/>
    </div>
  );
}

export default App;
