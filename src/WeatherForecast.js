import React from "react";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }
    

    let apiKey = "84ob6879a3t305ff0c4b95aea130d3b6";
    let city= "Key Largo";
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <div className= "WeatherForecast-icon"> <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" /> </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}


