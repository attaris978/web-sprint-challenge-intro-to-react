import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api_url from "./components/constants";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api_url);
      const json = await response.json();
      json.ok ? setData(json.results) : console.error(`fetch error: ${json}`);
      document.querySelector("p").innerText = json.results[0].name;
      console.log(json.results);
    };
    fetchData().catch((err) => console.error(err));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    return ( 
      
      <div className="App">
        <h1 className="Header">Characters</h1>
        <p>Hi</p>
      </div>
    ) 
};

export default App;
