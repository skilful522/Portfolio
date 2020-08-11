import React from 'react';
import './App.css';
import Background from '../Background/Background';
import Section from '../Section/Section';
import Biography from '../Biography/Biography';

const DATA = [
    {
        firstName: 'Stanislav',
        lastName: 'Sergienya',
        age: 22,
        avatarSrc: 'https://sun2.beltelecom-by-minsk.userapi.com/c855524/v855524583/225b55/RFmw_Xfu9Bw.jpg',
        location: {
            country: 'Belarus',
            town: 'Mikashevichi',
        },
        occupation: `I'm frontend developer and student of MPSU.`,
    },
    {
        firstName: 'Viktoria',
        lastName: 'Chemeris',
        age: 22,
        avatarSrc: 'https://sun9-31.userapi.com/c858220/v858220849/21319c/67H6vprqu4E.jpg',
        location: {
            country: 'Belarus',
            town: 'Mikashevichi',
        },
        occupation: 'Учитель логопед!',
    },
];

class App extends React.PureComponent {
    render() {
        return (
            <>
                <Background>
                    {DATA.map((data, index) => (
                        <Section theme="black" key={index}>
                            <Biography data={data} />
                        </Section>
                    ))}
                </Background>
            </>
        );
    }
}

export default App;
