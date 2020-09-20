# Demonstration of consuming services over HTTP.

Design a weather application that displays the current weather, daily forecasts, and hourly
forecasts based on your current geolocation.

# The weather application is composed of the following components:

1. Header - A heading that displays application title
2. WeatherDashboard - The primary (root) component that manages state for all
underlying components. It is also responsibly for connecting to and retrieving data
from a weather and geolocation service.
3. CurrentWeatherDisplay - Displays weather information for the current point in time
based on current location.
4. DailyWeatherDisplay - Displays a 7 day weather forecast in the form of a scrollable
carousel.
5. DailyWeatherForecastCard - Displays weather summary for a given day
6. HourlyWeatherDisplay - Displays a 24 hour weather forecast in the form of a
scrollable carousel.
7. HourlyWeatherForecastCard - Displays weather summary for a given hour

# The following services are used to obtain weather and location data:
1. WeatherService - A wrapper that is responsible for integrating with the  OpenWeather
Api . It provides an interface that allows one to obtain current weather, daily forecast,
and hourly forecast information.
2. GeolocationService - A wrapper that is responsible for integrating with the Google
Geolocation API. It provide an interface that allows one to obtain the current GPS
coordinates. These coordinates are used by the WeatherService to obtain weather
information.

# Features
1. Display current weather
2. Display 7 day weather forecast
3. Display 24 hour weather forecast
