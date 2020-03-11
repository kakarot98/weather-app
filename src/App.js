import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "4f4a3a63272d57b4c7758cb58c2e3ad1";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
      );
      const data = await api_call.json();
      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the City and Country information"
        });
      }
    } catch (err) {
      alert("You have entered wrong information");
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
