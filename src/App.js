import { useEffect, useState } from 'react';
import './App.css';
import TopHeading from './components/TopHeading';

function App() {
  var [details, setDetails] = useState({});

  useEffect(() => {
    fetch("./details.json")
      .then(res => res.json())
      .then(data => setDetails(data));
    }, []);

  return (
    <section className="Components">
      <TopHeading color="blue">{details.Outdoor?.title}</TopHeading>
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