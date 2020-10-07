import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';
import Photo from "./Photo";
import Details from './Details';

function App() {
  const [ nasaData, setNasaData ] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8Zj5bkXiKUlUsHAdfflbh4kkbRrLFeNRESLS7rrb')
      .then(res => {
        setNasaData(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

console.log(nasaData)

  return (
    <div className="App">
      <Photo data={nasaData} />
      <Details data={nasaData} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
