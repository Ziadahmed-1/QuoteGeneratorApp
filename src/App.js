import "./App.css";
import sample from "./games.mp4";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

function App() {
  return (
    <>
      <BackGround />
      <QuoteBox />
    </>
  );
}

function BackGround() {
  return (
    <div className="main">
      <video autoPlay muted loop playsInline className="back-ground">
        <source src={sample} type="video/mp4" />
        <source src={sample} type="video/ogg" />
      </video>
    </div>
  );
}

function QuoteBox() {
  // const { isLoading, error, data } = useFetch("https://ultima.rest/api/random");
  // console.log(dat);
  const [quote, setQuote] = useState("");

  async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setQuote(json.slip.advice);
  }
  fetchData();

  return (
    <div className="quote-card">
      <div className="inner-space">
        {" "}
        <h1>{quote}</h1>
        <button onClick={fetchData}>GIVE ME A QUOTE!</button>
      </div>
    </div>
  );
}

export default App;
