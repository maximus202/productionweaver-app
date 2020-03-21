import React from 'react';

export const Context = React.createContext()

export class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state
        }
    }
}

//handlers