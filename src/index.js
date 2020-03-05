import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const PROJECTS = [
    {
        "projectName": "Night of the Living Dead",
        scenes: [
            {
                "sceneNumber": "1",
                "setting": "EXT.",
                "description": "French countryside",
                "timeOfDay": "DUSK",
                "shortSummary": "Movie starts with zombie eating a man in the woods.",
                "scriptPageStart": "1",
                "scriptPageEnd": "3",
                "lengthInEighths": "2 1/3",
                elements: {
                    animalHandler: [],
                    cast: ["Zombie Sam", "Random Citizen"],
                    extras: [],
                    greenery: ["Forest"],
                    livestock: [],
                    makeupHair: ["Fake blood", "Hairspray"],
                    mechanicalFx: [],
                    miscellanous: [],
                    music: [],
                    opticalFx: [],
                    props: ["Knife"],
                    security: [],
                    setDressing: [],
                    sound: [],
                    specialEquipment: [],
                    specialFx: [],
                    stunts: ["Zombie Sam jumps random citizen."],
                    vehicles: [],
                    visualFx: [],
                    wardrobe: ["Dirty clothes for Zombie"],
                },
            },
        ],
    },
];

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);