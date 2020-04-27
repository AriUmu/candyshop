import React from 'react';
import Header from "../components/Header";
import Candy from "../components/Candy";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Welcome to CandyShop'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="mt-5">
                    <Candy/>
                </div>
            </div>
        )
    }
}