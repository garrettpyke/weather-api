import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./Grid.css";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import Home from "./Home/Home";
import Form from "./Form/Form";
import WeatherData from "./WeatherData/WeatherData";
import About from "./About/About";
import Aaron from "./Aaron/Aaron";

const baseUrl = "https://api.weatherapi.com/v1/forecast.json?key=";
const apiKey = "46678c32bebd4d5da6e192958221102";
const locationParam = "&q=";
const daysUrlParam = "&days=3";
const aqiUrlParam = "&aqi=yes";
const alertsParam = "&alerts=yes";

function App() {
  const [currentData, setCurrentData] = useState({});

  const handleSubmit = async (loc) => {
    let url = `${baseUrl}${apiKey}${locationParam}${loc}${daysUrlParam}${aqiUrlParam}${alertsParam}`;

    const data = await fetch(url);
    const jsonData = await data.json();
    setCurrentData(jsonData);
  };

  console.log("3. currentData: ", currentData);

  return (
    <>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/Aaron"
            element={<Aaron handleSubmit={handleSubmit} />}
          />
        </Routes>
        <Form handleSubmit={handleSubmit} />
        {currentData.location ? (
          <WeatherData currentData={currentData} />
        ) : null}
        <Footer />
      </div>
    </>
  );
}

export default App;
