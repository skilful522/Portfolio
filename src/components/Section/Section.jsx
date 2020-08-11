import React from 'react';
import styles from './Section.css';
import globalStyles from '../../index.css';

function getClassName(theme) {
    switch (theme) {
        case 'success':
            return globalStyles['bg-success'];
        case 'danger':
            return globalStyles['bg-danger'];
        case 'black':
            return globalStyles['bg-black'];
        default:
            return globalStyles['bg-warning'];
    }
}

export default function Section({ theme, children }) {
    const className = getClassName(theme);

    return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
}
