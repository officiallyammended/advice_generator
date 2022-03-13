import React from "react";
import axios from "axios";
// npm install --save axios

import "./App.css";

class App extends React.Component {

    state = {advice:""};

    componentDidMount() {
        this.fetchAdvice();
    }

    //this function dont need any class because it is inside a class
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then( (response) => {
                const {advice} = response.data.slip;
                this.setState({ advice : advice });
                console.log(advice);
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    render() {
           const {advice} = this.state; 

        return(
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                </div>
                <button className="button" onClick={this.fetchAdvice}>
                    <span> <strong>ANOTHER ADVICE</strong></span>
                </button>
            </div>

            //15:35
        );
    }
}

export default App;