import React, { Component } from 'react';
import Weather from '../components/Weather/Weather';
import Hourly from '../components/Hourly/Hourly';
import Daily from '../components/Daily/Daily';
import './App.css';

const API_key_weather = 'e9015bc185a17574d90f6da4a2957692';
//const API_key_location = 'AIzaSyAH3i3Cq4cuJeqjpQxGgw-Vb6gcABGcwlU';


class App extends Component {  

  constructor(){
    super();
    this.state = {
      city: '',
      temp_min: '',
      temp_max: '',
      temp_curr: '',
      weather_type: '',
      time: '',
    };
    this.getWeather();
  }

  getTime = () => {
    const date_today = new Date();
    const time = `${date_today.getHours() + ':'+ date_today.getMinutes()}`;
    return time;
  }

  calCelcius(temp){
    const cel = Math.floor(temp - 273);
    return cel;
  }

  getWeather = async() => {
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Guna,IN&appid=${API_key_weather}`);
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      city: response.name, 
      temp_min: this.calCelcius(response.main.temp_min),
      temp_max: this.calCelcius(response.main.temp_max),
      temp_curr: this.calCelcius(response.main.temp),
      weather_type: response.weather[0].main,
      time: this.getTime()
    });
  }
  
  render () {
    return(
      <div className="App">
        <span className="heading"> <img src="umbrella.svg"/> Weather </span>
        <Weather 
          city={this.state.city}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max} 
          temp_curr={this.state.temp_curr}
          weather_type={this.state.weather_type}
          time={this.state.time}
           />
        <Daily />
        <Hourly />
      </div>  
    )
  }
}


export default App;
