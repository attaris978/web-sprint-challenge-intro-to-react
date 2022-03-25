import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api_url from "./components/constants";
import Characters from "./components/Characters";

const App = () => {
  const [data, setData] = useState();
  const [error,setError] = useState();
  //The error catching may appear redundant, but it is my understanding that fetch will
  //only through an error on connectivity issues, and any other 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api_url);
      const json = await response.json();
      response.ok ? setData(json) : console.error(`fetch error: ${response.status}`);
   
    };
    fetchData().catch((err) => setError(err));
  }, []);
    if (error) {
      return (
        <h1>We're sorry, but Tattooine satellite systems are currently inaccessible!</h1>
      )
    }
    else {  return ( 
      
      <div className="App">
        <h1 className="Header">Characters</h1>
        <Characters characters={data} /> 
      </div>
    ) }
};

export default App;
