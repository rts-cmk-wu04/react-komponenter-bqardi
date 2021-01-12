import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Travel from './components/Travel';
import Outdoor from './components/Outdoor';
import Services from './components/Services';
import Collection from './components/Collection';
import Places from './components/Places';
import LatestNews from './components/LatestNews';
import Lifestyle from './components/Lifestyle';
import Location from './components/Location';
import Digest from './components/Digest';
import NewYorkTimes from './components/NewYorkTimes';
import VirtualReality from './components/VirtualReality';

var Components = {
  "Travel": Travel,
  "Outdoor": Outdoor,
  "Services": Services,
  "Collection": Collection,
  "Places": Places,
  "LatestNews": LatestNews,
  "Lifestyle": Lifestyle,
  "Location": Location,
  "Digest": Digest,
  "NewYorkTimes": NewYorkTimes,
  "VirtualReality": VirtualReality
}

function App() {
  var [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("./details.json")
      .then(res => res.json())
      .then(data => setDetails(data));
    }, []);

  return (
    <section className="Cards">
      {details?.map(detail => {
        let Component = Components[detail.component];
        return (
          <Card key={detail.name} details={detail}>
            <Component item={detail}/>
          </Card>
        )
      })}
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