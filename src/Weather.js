import Reach from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Miami</h1>
      <ul>
        <li>Friday 10:30</li>
        <li>Partly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="Partly Sunny"
          />
          69°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 71%</li>
            <li>Wind: 12mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
