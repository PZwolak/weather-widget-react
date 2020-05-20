import React, { Component } from 'react';
import RightSectionApi from './right-section-api/RightSectionApi';

export default class RightSection extends Component {

    // state will contains results from OpenWeather api
    state = {
        weather: []
    }


    componentDidMount() {
        // basic query variables for possibility to choose/change city, api id, lang etc.
        const lat = 50.08;
        const lon = -19.92;
        const appid = "1b81eb78ab8355d704a61e9b09a9d4f3";
        const lang = "pl";
        const units = "metric"

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly&appid=${appid}&lang=${lang}&units=${units}`)
            .then(res => res.json())
            .then(json => this.setState({ weather: json }));
    }
    render() {

        return (
            <RightSectionApi weatherResults={this.state.weather} />
        )
    }
}
