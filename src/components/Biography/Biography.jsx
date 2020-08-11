import React from 'react';
import Text from '../../ui/Text/Text';
import globalStyles from '../../index.css';
import styles from './Biography.css';

export default function Biography({ data }) {
    const {
        firstName,
        lastName,
        age,
        avatarSrc,
        location: { country, town },
        occupation,
    } = data;

    return (
        <div className={styles.wrapper}>
            <Text colorText="text-white" className={styles.titleWrapper}>
                Biography...
            </Text>
            <div className={`${globalStyles['d-flex']}`}>
                <div className={globalStyles['flex-center']}>
                    <div className={styles['content-block-avatar']}>
                        <img src={avatarSrc} alt="avatar" className={styles.avatar} />
                        <Text
                            className={`${globalStyles['text-white']} ${globalStyles['text-center']} ${globalStyles['text-center']}`}
                        >
                            It&apos;s me &#128522;
                        </Text>
                    </div>
                </div>
                <div className={`${globalStyles['flex-center']} ${styles['content-block-biography-text-wrapper']}`}>
                    <Text className={styles['content-block-biography-text']} colorText="text-white">
                        Hello, My name is {firstName} {lastName}.
                    </Text>
                    <Text className={styles['content-block-biography-text']} colorText="text-white">
                        I am {age} years old.
                    </Text>
                    <Text className={styles['content-block-biography-text']} colorText="text-white">
                        I am from {country}, town {town}.
                    </Text>
                    <Text className={styles['content-block-biography-text']} colorText="text-white">
                        {occupation}
                    </Text>
                </div>
            </div>
        </div>
    );
}
