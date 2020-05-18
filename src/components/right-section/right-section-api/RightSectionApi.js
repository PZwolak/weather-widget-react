import React from 'react';
import styles from './RightSectionApi.module.scss';

const rightSection = "rightSection";
const rightSectionContainer = styles.rightSectionContainer;
console.log(styles)

const RightSectionApi = (props) => {
    let hours
    if (props.weatherResults.hourly !== undefined) {
        const weatherHourly = props.weatherResults.hourly;
        console.log(weatherHourly);
        hours = weatherHourly.map(el => {
            const unix_timestamp = el.dt;
            const hour = new Date(unix_timestamp * 1000).getHours().toString().padStart(2, '0') + ":00";


            return (<div key={el.dt} className="hourlyItem">
                <div className={styles.hourlyItem__day}>

                </div>
                <div className={styles.hourlyItem__hour}>
                    {hour}
                </div>
                <div className={styles.hourlyItem__icon}>

                </div>
                <div className={styles.hourlyItem__temperature}>
                    {el.temp}
                </div>
                <div className={styles.hourlyItem__rainfall}>

                </div>
                <div className={styles.hourlyItem__windDirection}>
                    {el.wind_deg}
                </div>
                <div className={styles.hourlyItem__windSpeed}>
                    {el.wind_deg}
                </div>
                <div className={styles.hourlyItem__pressure}>
                    {el.pressure}
                </div>
            </div>)
        });

    }
    return <div className={rightSection, rightSectionContainer}>{hours}</div>;
}

export default RightSectionApi;




// import React, { Component } from 'react'

// export default class RightSectionApi extends Component {

//     // weatherItem = weather => {
//     //     const timezone = weather.timezone;
//     //     return timezone;
//     // }

//     render() {
//         let newElo
//         if (this.props.weatherResults.hourly !== undefined) {
//             const elo = this.props.weatherResults.hourly;
//             newElo = elo.map(el => el.dt);
//         }
//         return (<div>{newElo}</div>)
//     }
// }