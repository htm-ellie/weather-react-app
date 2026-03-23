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
          Ellie Litt
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/htm-ellie/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
