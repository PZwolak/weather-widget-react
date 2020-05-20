import React from 'react';
import styles from './Arrows.module.scss';

const Arrows = () => {

    const arrow = <div className={styles.arrowCircle}>
        <div className="arrowCircle__triangle"></div>
    </div>

    return (arrow);
}

export default Arrows;