import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Outdoor from './components/Outdoor';
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