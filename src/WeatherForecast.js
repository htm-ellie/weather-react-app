import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        
        return (
          <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[1]} />
              </div>
            </div>
          </div>
        );

    } else{
        let apiKey = "84ob6879a3t305ff0c4b95aea130d3b6";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }

  
}


