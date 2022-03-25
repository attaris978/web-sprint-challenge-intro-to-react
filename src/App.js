import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api_url from "./components/constants";

const App = () => {
  const [data, setData] = useState();

  //The error catching may appear redundant, but it is my understanding that fetch will
  //only through an error on connectivity issues, and any other 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api_url);
      const json = await response.json();
      response.ok ? setData(json.results) : console.error(`fetch error: ${response.status}`);
   
    };
    fetchData().catch((err) => console.error(err));
  }, []);
  
    return ( 
      
      <div className="App">
        <h1 className="Header">Characters</h1>
        <p>{data? data[0].name : ""}</p>
      </div>
    ) 
};

export default App;
