import React, { Component } from 'react';
import RightSectionApi from './right-section-api/RightSectionApi';
// import styles from './RightSection.module.scss';

export default class RightSection extends Component {

    state = {
        weather: []
    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.08&lon=-19.92&%20exclude=hourly,daily&appid=1b81eb78ab8355d704a61e9b09a9d4f3")
            .then(res => res.json())
            .then(json => this.setState({ weather: json }));
    }
    render() {

        return (
            <RightSectionApi weatherResults={this.state.weather} />
        )
    }
}
