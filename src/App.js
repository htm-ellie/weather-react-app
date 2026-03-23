import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Key Largo" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://ellie-litt-creative.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Ellie Litt,
        </a>{" "}
        is open-sourced on{" "}
        <a
          href="https://github.com/htm-ellie/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub,{" "}
        </a>
        and is hosted on{" "}
        <a
          href="https://react-weather-app-elitt.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}
