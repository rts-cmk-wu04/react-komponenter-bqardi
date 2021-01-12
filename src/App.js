import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Collection from './components/Collection';
import Outdoor from './components/Outdoor';
import Services from './components/Services';
import Travel from './components/Travel';
import Places from './components/Places';
import LatestNews from './components/LatestNews';

function App() {
  var [details, setDetails] = useState({});

  useEffect(() => {
    fetch("./details.json")
      .then(res => res.json())
      .then(data => setDetails(data));
    }, []);

  return (
    <section className="Cards">
      <Card details={details.travel}>
        <Travel item={details.travel}/>
      </Card>
      <Card details={details.outdoor}>
        <Outdoor item={details.outdoor}/>
      </Card>
      <Card details={details.delivery}>
        <Services item={details.delivery}/>
      </Card>
      <Card details={details.parcels}>
        <Services item={details.parcels}/>
      </Card>
      <Card details={details.quality}>
        <Services item={details.quality}/>
      </Card>
      <Card details={details.customer}>
        <Services item={details.customer}/>
      </Card>
      <Card details={details.collection10}>
        <Collection item={details.collection10}/>
      </Card>
      <Card details={details.collection1}>
        <Collection item={details.collection1}/>
      </Card>
      <Card details={details.collection123}>
        <Collection item={details.collection123}/>
      </Card>
      <Card details={details.places}>
        <Places item={details.places}/>
      </Card>
      <Card details={details.latest}>
        <LatestNews item={details.latest}/>
      </Card>
    </section>
  );
}

export default App;

// SMALL COMPONENTS:
// Link
// TopHeading
// Square
// Round
// Icon
// Button

// SUB COMPONENTS:
// TitleText (title + text)
// ImgTxt (Image + TitleText)

// MAJOR COMPONENTS:
// Layout (this file - App)
// Card