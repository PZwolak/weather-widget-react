import React from 'react';
import styles from './RightSectionApi.module.scss';
import compassIcon from '../../../img/compass-arrow.png';
import cx from 'classnames';
import { sliderFunction } from './sliderFunction';
// import Arrows from './Arrows';

// main classes for RightSectionApi component
const rightSection = "rightSection";
const rightSectionContainer = styles.rightSectionContainer;

const RightSectionApi = (props) => {

    // initialed variables for possibility to use in this and deeper scope
    let hours;
    let dayIndex = 0;

    // on first render result from API is undefined so this condition protect against destroy whole APP
    if (props.weatherResults.hourly !== undefined) {

        // settings and functions responsible for smooth dragging content
        sliderFunction();

        // request from API saved in variables below
        const weatherHourly = props.weatherResults.hourly;

        // set max temperature for possibility to set yellow lines
        const tempArr = weatherHourly.map(el => el.temp);
        const tempMax = Math.floor(Math.max(...tempArr));

        // set max pressure for possibility to set black lines
        const pressArr = weatherHourly.map(el => el.pressure);
        const pressMax = Math.floor(Math.max(...pressArr));


        // main array which contain arranged elements for displayin in return as result
        hours = weatherHourly.map(el => {

            // part responsible for convert unix timestamp to standard hour format (HH:MM)
            const unix_timestamp = el.dt;
            const hour = new Date(unix_timestamp * 1000).getHours().toString().padStart(2, '0') + ":00";

            // condition which set another new days
            let day;
            if (dayIndex === 0) {
                if (hour === "00:00") {
                    day = "Jutro";
                    dayIndex = 1;
                }
            } else {
                if (hour === "00:00") {
                    day = "Pojutrze";
                }
            }

            // get image icons from Open Weather page
            const imgUrl = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
            const imgAlt = el.weather[0].main

            // set correct temperature position
            const elTemp = Math.floor(el.temp);
            const tempPeak = tempMax / (tempMax + elTemp);
            const tempCur = elTemp / (tempMax + elTemp);
            const tempPosition = tempCur * 300 / tempPeak;

            // set correct pressure position
            const elPress = Math.floor(el.pressure);
            const pressPeak = pressMax / (pressMax + elPress);
            const pressCur = elPress / (pressMax + elPress);
            const pressPosition = pressCur * 1500 / pressPeak;


            // set correct rain height
            let rainFall;
            let rainHeight;
            if (el.rain === undefined) {
                rainFall = false;
            } else {
                rainFall = el.rain['1h'].toFixed(1);
                rainHeight = rainFall * 10;
            }

            // set correct name wind direction
            let windDirection;
            if (el.wind_deg > 22.5 && el.wind_deg <= 67.5) {
                windDirection = "Pn.-Wsch.";
            } else if (el.wind_deg > 67.5 && el.wind_deg <= 112.5) {
                windDirection = "Wschodni";
            } else if (el.wind_deg > 112.5 && el.wind_deg <= 157.5) {
                windDirection = "Pd.-Wsch.";
            } else if (el.wind_deg > 157.5 && el.wind_deg <= 202.5) {
                windDirection = "Południowy";
            } else if (el.wind_deg > 202.5 && el.wind_deg <= 247.5) {
                windDirection = "Pd.-Zach.";
            } else if (el.wind_deg > 247.5 && el.wind_deg <= 292.5) {
                windDirection = "Zachodni";
            } else if (el.wind_deg > 292.5 && el.wind_deg <= 337.5) {
                windDirection = "Pn.-Zach.";
            } else if ((el.wind_deg > 337.5 && el.wind_deg <= 360) || (el.wind_deg >= 0 && el.wind_deg <= 22.5)) {
                windDirection = "Północny";
            }

            // set correct name wind speed
            let windSpeed;
            if (el.wind_speed < 15) {
                windSpeed = "Słaby";
            } else if (el.wind_speed >= 15 && el.wind_speed < 30) {
                windSpeed = "Umiar.";
            } else if (el.wind_speed >= 30 && el.wind_speed < 45) {
                windSpeed = "Silny";
            } else if (el.wind_speed >= 45 && el.wind_speed < 60) {
                windSpeed = "Bd.Silny";
            } else if (el.wind_speed >= 60) {
                windSpeed = "Zagrożenie";
            }




            // main arranged element which return one whole structure for one hour
            return (

                <div key={el.dt} className={styles.hourlyItem}>
                    <div className={styles.hourlyItem__day}>
                        <span>{day}</span>
                    </div>
                    <div className={styles.hourlyItem__hour}>
                        <span>{hour}</span>
                    </div>
                    <div className={styles.hourlyItem__icon}>
                        <img src={imgUrl} alt={imgAlt} />
                    </div>
                    <div className={styles.hourlyItem__temperature}>
                        <div className={styles.hourlyItem__temperatureInner}>
                            <div className={styles.hourlyItem__temperatureInnerNumber}>
                                <span>{elTemp}°</span>
                            </div>
                            <div className={styles.hourlyItem__temperatureInnerGraphics}>
                                <div className={styles.hourlyItem__temperatureInnerGraphicsCircle}>

                                </div>
                                <div style={{ "height": `${tempPosition - 200}px` }} className={styles.hourlyItem__temperatureInnerGraphicsLine}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hourlyItem__rainfall}>
                        <div className={styles.hourlyItem__rainfallInner}>
                            <div className={styles.hourlyItem__rainfallInnerNumber}>
                                <span>{el.rain === undefined ? false : el.rain['1h'].toFixed(1) + " mm"}</span>
                            </div>
                            <div style={{ "height": `${rainHeight}px` }} className={styles.hourlyItem__rainfallInnerGraphic}>

                            </div>
                        </div>

                    </div>
                    <div className={styles.hourlyItem__windDirection}>
                        <div className={styles.hourlyItem__windDirectionIcon}>
                            <img style={{ "transform": `rotate(${el.wind_deg}deg)` }} src={compassIcon} alt="" />
                        </div>
                        <div className={styles.hourlyItem__windDirectionText}><span>{windDirection}</span></div>

                    </div>
                    <div className={styles.hourlyItem__windSpeed}>
                        <div className={styles.hourlyItem__windSpeedText}>{windSpeed}</div>
                        <div className={styles.hourlyItem__windSpeedNumber}>{Math.floor(el.wind_speed) + " km/h"}</div>

                    </div>
                    <div className={styles.hourlyItem__pressure}>
                        <div className={styles.hourlyItem__pressureInner}>
                            <div className={styles.hourlyItem__pressureInnerNumber}>
                                <span>{el.pressure} hPa</span>
                            </div>
                            <div className={styles.hourlyItem__pressureInnerGraphics}>
                                <div className={styles.hourlyItem__pressureInnerGraphicsCircle}>
                                </div>
                                <div style={{ "height": `${pressPosition - 1400}px` }} className={styles.hourlyItem__pressureInnerGraphicsLine}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }
    return (

        < div className={cx(rightSection, rightSectionContainer)} > {hours}</div >

    );
}

export default RightSectionApi;
