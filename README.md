### In the project directory, you can run:
#### `npm start`

### In the project directory, you can build:
#### `npm run build`

### Main information:
- Project is based on React framework
- Project use cx - classname [https://zeph.co/multiple-classnames-css-modules-react]
- Project use CSS Modules Stylessheet [https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/]
- Project use OpenWeather from: [https://openweathermap.org/api]
- Almost whole important parts is available in file `src/components/right-section/RightSection/right-section-api/RightSectionApi.js`
- Exact API request visible in this example is here: [https://api.openweathermap.org/data/2.5/onecall?lat=50.08&lon=-19.92&%20exclude=hourly&appid=1b81eb78ab8355d704a61e9b09a9d4f3&lang=pl&units=metric]

### Settings:
- You can change location, language or units etc. in file `src/components/right-section/RightSection.js`:
```javascript
        const lat = 50.08;
        const lon = -19.92;
        const appid = "1b81eb78ab8355d704a61e9b09a9d4f3";
        const lang = "pl";
        const units = "metric"
```


### Project available is in link below:
#### [https://pzwolak.github.io/weather-widget-react/]
