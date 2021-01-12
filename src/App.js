import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Outdoor from './components/Outdoor';
import Services from './components/Services';
import Travel from './components/Travel';

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