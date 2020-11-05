import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import Photo from './Photo';
import Details from './Details';
import Header from './Header';



function App() {
  const [ nasaData, setNasaData ] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8Zj5bkXiKUlUsHAdfflbh4kkbRrLFeNRESLS7rrb')
      .then(res => {
        setNasaData(res.data)
        console.log('Res Data', res.data)
      })
      .catch(err => {
        debugger
      })
  }, []);

  return (
    <div className='App'>
      <Header />
      <Photo data={nasaData} />
      <Details data={nasaData} />
    </div>
  );
}

export default App;
