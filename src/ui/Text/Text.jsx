import React from 'react';
import globalStyles from '../../index.css';

function chooseColorText(colorText) {
    switch (colorText) {
        case 'text-white': {
            return globalStyles['text-white'];
        }
        case 'text-success': {
            return globalStyles['text-success'];
        }
        case 'text-danger': {
            return globalStyles['text-danger'];
        }
        case 'text-warning': {
            return globalStyles['text-warning'];
        }
        default:
            break;
    }
}

function chooseFontSize(fontSize) {
    switch (fontSize) {
        case 'sm': {
            return globalStyles['fontSize-sm'];
        }
        case 'lg': {
            return globalStyles['fontSize-lg'];
        }
        case 'extraLg': {
            return globalStyles['fontSize-extraLg'];
        }
        case 'giant': {
            return globalStyles.giant;
        }
        default:
            return globalStyles['fontSize-default'];
    }
}

function getTheme({ colorText, fontSize, bold }) {
    const choosenColorText = chooseColorText(colorText);
    const choosenFontSize = chooseFontSize(fontSize);

    return `${choosenColorText} ${choosenFontSize} ${bold && globalStyles['fontWeight-bold']}`;
}

export default function Text({ children, colorText, fontSize, className }) {
    const theme = getTheme({ colorText, fontSize });
    return <div className={`${theme} ${className && className}`}>{children}</div>;
}
