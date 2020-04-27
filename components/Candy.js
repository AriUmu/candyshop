import React, { Component } from 'react';
import CandyList from "./CandyList";
import CandyService from "../services/CandyService";

export default class Candy extends Component {

    constructor() {
        super();
        this.state ={
            candy: []
        };
    }
    componentDidMount() {
        this.setState(() => ({candy: CandyService.getCandy()}));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <CandyList candy={this.state.candy} />
                    </div>
                </div>
            </div>
        );
    }
}

