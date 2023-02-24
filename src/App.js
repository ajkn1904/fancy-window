import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';

function App() {

  const [getImages, setGetImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    .then(res => res.json())
    .then(data => setGetImages(data))
  }, []);




//console.log(getImages)

  return (
    <div className="App max-w-[1440]">
      <NavBar/>
      <Header/>
      <Gallery/>

    </div>
  );
}

export default App;
