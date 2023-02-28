import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import loaderImage from '../src/images/loading_image.png'
import axios from 'axios';
import { useColorMode } from 'daisyui';


function App() {

  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState('');
  const [getData, setGetData] = useState([] || searched);
  const [getSearchedData, setGetSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState([])
  const [isSearchLensClicked, setIsSearchLensClicked] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [isFromNav, setIsFromNav] = useState(false)
  const [hideBanner, setHideBanner] = useState(false)
  const [theme, setTheme] = useState('light');
  const [isDarkMode, setIsDarkMode] = useState(false);




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


  //console.log(searched)

  const url = `https://api.unsplash.com/search/photos?page=1&2&query=${searched}&client_id=${process.env.REACT_APP_ACCESS_KEY}`

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        //console.log(res.data)
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


  const handleResetSearch = () => {
    setSearched('')
    setIsSearching(false);
    setIsSearchLensClicked(false);
    setHideBanner(false)
  }


  const handleInputBox = () => {
    setIsSearchLensClicked(true)
  }



  const handleChange = (e) => {
    setIsSearching(true);
    const searchedInfo = e.target.value
    setSearched(searchedInfo)

    let matches = []
    if (searchedInfo.length > 0) {
      matches = getSearchedData.map(data => { return (data.tags[0].title || data.tags[0].source?.title || data.tags[0]?.source?.ancestry?.category?.pretty_slug || data.tags[0]?.source?.ancestry?.subcategory?.pretty_slug || data.tags[1]?.source?.ancestry?.subcategory?.pretty_slug || data.tags[0]?.source?.cover_photo?.alt_description || data.tags[1]?.source?.cover_photo?.alt_description || data.tags[2]?.title) })
    }
    setSuggestions(matches)
    console.log(matches)
    if (searchedInfo === '') {
      setIsSearching(false);
    }
  }



  const suggestionHandler = data => {
    setSearched(data);
    setSuggestions([])
  }


  const handleSearchFromNav = () => {
    setIsFromNav(true)
  }


  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setHideBanner(true)
    }
  }





  return (
    <div className="App max-w-[1440]" data-theme={theme}>

      <NavBar handleChange={handleChange} handleResetSearch={handleResetSearch} handleInputBox={handleInputBox} isSearchLensClicked={isSearchLensClicked} searched={searched} suggestions={suggestions} suggestionHandler={suggestionHandler} handleSearchFromNav={handleSearchFromNav} isFromNav={isFromNav} handleKeyDown={handleKeyDown} hideBanner={hideBanner} theme={theme} setTheme={setTheme}/>

      <Header handleChange={handleChange} searched={searched} suggestions={suggestions} suggestionHandler={suggestionHandler} isSearchLensClicked={isSearchLensClicked} isFromNav={isFromNav} setIsFromNav={setIsFromNav} handleKeyDown={handleKeyDown} hideBanner={hideBanner} theme={theme} />

      <Gallery getData={getData} getSearchedData={getSearchedData} isSearching={isSearching} modalData={modalData} setModalData={setModalData} searched={searched} theme={theme}/>

    </div>
  );
}

export default App;
