import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import loaderImage from '../src/images/loading_image.png'
import axios from 'axios';

function App() {

  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState([]);
  const [getData, setGetData] = useState([] || searched);
  const [getSearchedData, setGetSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState([])


  if (isLoading) {
    <img src={loaderImage} alt="" />
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      .then(res => res.json())
      .then(data => {
        setGetData(data);
        setIsLoading(false);
      })
  }, []);




  const handleChange = (e) => {
    setIsSearching(true);
    const searchedInfo = e.target.value
    setSearched(searchedInfo)
    if(searchedInfo === ''){
      setIsSearching(false);
    }
  }

  //console.log(searched)

  const url = `https://api.unsplash.com/search/photos?page=1&2&query=${searched}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(url)
        .then(res => {
          console.log(res.data)
          if (isSearching) {
            setGetSearchedData(res.data.results);
            setIsLoading(false);
          }
        })
        .catch(error => console.log(error))
    }, [url, isSearching, modalData]);

/*   useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (isSearching) {
          setGetSearchedData(data.results);
          setIsLoading(false);
        }
      })
  }, [url, isSearching]); */




  //console.log(getData)

  return (
    <div className="App max-w-[1440]">
      <NavBar />
      <Header handleChange={handleChange} />
      <Gallery getData={getData} getSearchedData={getSearchedData} isSearching={isSearching} modalData={modalData} setModalData={setModalData}/>

    </div>
  );
}

export default App;
