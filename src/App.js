import "./App.css";
import ReactDOM from "react-dom";

const api = {
  key: "46809d474ad542556436c5fa627a7f5b",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

// function date() {
//   const element = <span>{new Date().toLocaleDateString()}</span>;
//   ReactDOM.render(element, document.getElementById("date"));
// }

// function time() {
//   const element = <span>{new Date().toLocaleTimeString()}</span>;
//   ReactDOM.render(element, document.getElementById("time"));
// }
// setInterval(date, 1000);
// setInterval(time, 1000);

let date = String(new window.Date());
date = date.slice(3, 15);

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Chennai City, India</div>
          <div className="date">{date}</div>
        </div>
        <div className="weather-box">
          <div className="temp">23*c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;

// const apiKey = "46809d474ad542556436c5fa627a7f5b";
// const openWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather";
