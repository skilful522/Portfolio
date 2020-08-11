import React from 'react';
import styles from './Background.css';

export default function Background({ children }) {
    return <div className={styles.fullscreenBackground}>{children}</div>;
}
