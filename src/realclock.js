import React from "react";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    // Perbaiki penulisan metode tick, componentDidMount, dan componentWillUnmount
    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="realclock">
                <h1>Realtime CLOCK</h1>
                <hr />
                <h1>{this.state.date.toLocaleTimeString()}</h1> {/* Perbaiki pemanggilan metode toLocaleTimeString */}
            </div>
        );
    }
}

export default App;
