import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import loaderImage from '../src/images/loading_image.png'

function App() {

  const [getImages, setGetImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading){
    <img src={loaderImage} alt="" />
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    .then(res => res.json())
    .then(data => {
      setGetImages(data);
      setIsLoading(false);
    })
  }, []);




//console.log(getImages)

  return (
    <div className="App max-w-[1440]">
      <NavBar/>
      <Header/>
      <Gallery getImages={getImages}/>

    </div>
  );
}

export default App;
