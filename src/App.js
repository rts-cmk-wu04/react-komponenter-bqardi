import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

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
        <img src={`./images/${details.travel?.content[0].images[0]}`} alt="Travel" style={{width: "100%"}}/>
        <h2>{details.travel?.title}</h2>
        <h1>{details.travel?.content[0].title}</h1>
        <p>{details.travel?.content[0].text}</p>
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