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
  const [quote, setQuote] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setQuote(data.slip.advice);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="quote-card">
      <div className="inner-space">
        <h1>{quote}</h1>
        <button onClick={fetchData}>GIVE ME A QUOTE!</button>
      </div>
    </div>
  );
}

export default QuoteBox;
