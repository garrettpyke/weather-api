export default function About() {
  return (
    <div className="about">
      <p>
        Weather data provided by
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          {" "}
          WeatherAPI.com
        </a>
      </p>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
}
