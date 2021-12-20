import React, { Component } from 'react'
import Counter from './component/counter';

import Greet from './component/greet';
import Message from './component/message';
import Welcome from './component/welcome'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter/>
                {/* <Message/> */}
                {/* <Greet name='Rohit' college='IIT Dhanbad'/>
                <Greet name='Prem' college = 'AKTU'/>
                <Greet name='Rahul' college = 'IIT Guwhati'/>
                <Welcome name='Rohit' college='IIT Dhanbad'/>
                <Welcome name='Rahul' college='IIT Guwhati'/>
                <Welcome name='Prem' college='AKTU'/> */}
            </div>
        )
    };
}
export default App