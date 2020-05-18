import React, { Component } from 'react'

export default class RightSection extends Component {

    state = {
        weather: []
    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=1b81eb78ab8355d704a61e9b09a9d4f3")
            .then(res => res.json())
            .then(json => this.setState({ weather: json.result }))
    }

    render() {
        console.log(this.state.weather);
        return (
            <div>
                {this.state.weather};
            </div>
        )
    }
}
