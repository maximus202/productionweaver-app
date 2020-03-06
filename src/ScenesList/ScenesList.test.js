import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScenesList from './ScenesList';

describe('ScenesList', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const project = {
            "id": "1",
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
                {
                    "sceneNumber": "2",
                    "setting": "INT.",
                    "description": "House",
                    "timeOfDay": "NIGHT",
                    "shortSummary": "Family eating dinner.",
                    "scriptPageStart": "3",
                    "scriptPageEnd": "4",
                    "lengthInEighths": "1 1/8",
                    elements: {
                        animalHandler: [],
                        cast: ["dad", "mom"],
                        extras: [],
                        greenery: [],
                        livestock: [],
                        makeupHair: [],
                        mechanicalFx: [],
                        miscellanous: [],
                        music: [],
                        opticalFx: [],
                        props: ["silverware", "food"],
                        security: [],
                        setDressing: [],
                        sound: [],
                        specialEquipment: [],
                        specialFx: [],
                        stunts: [],
                        vehicles: [],
                        visualFx: [],
                        wardrobe: [],
                    },
                },
            ],
        };
        ReactDOM.render(<BrowserRouter><ScenesList project={project} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});