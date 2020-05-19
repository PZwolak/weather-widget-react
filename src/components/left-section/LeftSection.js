import React from 'react';
import styles from './LeftSection.module.scss';


const LeftSection = () => {

    // data object for possibility to display properties in left section
    const data = [
        { name: "Dzień", height: 34 },
        { name: "Godzina", height: 60 },
        { name: "Prognoza", height: 70 },
        { name: "Temperatura", height: 220 },
        { name: "Opady", height: 120 },
        { name: "Kierunek wiatru", height: 120 },
        { name: "Prędkość wiatru", height: 100 },
        { name: "Ciśnienie", height: 200 },
    ];

    // two classes for main div on LeftSection component
    const leftSection = "leftSection";
    const leftSectionContainer = styles.leftSectionContainer;

    // array with every data elements wrapped in div
    const leftSectionProperties = data.map(el => {
        return (
            <div key={el.name} className={styles.propertyElement} style={{ height: el.height }}>
                <p>{el.name}</p>
            </div>
        )
    })

    return (
        <div className={leftSection, leftSectionContainer}>{leftSectionProperties}</div>
    );
}

export default LeftSection;