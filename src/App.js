import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import TextField from "./TextField";

class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
    };

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;
        return !regex.test(name)
            ? "Azaza"
            : "";
    };

    onFirstNameBlur = () => {
        const firstName = this.state.firstName;
        const firstNameError = this.validateName(firstName);
        return this.setState({firstNameError});
    }

    onFirstNameChange = event =>
        this.setState({
            firstName: event.target.value
        });

    render() {
        const {firstNameError, firstName} = this.state;

        return (<div>
            <TextField name="firstName"
                       label="First name:"
                       onchange={this.onFirstNameChange}
                       onblur={this.onFirstNameBlur}
                       error={firstNameError}
            />
            <Greetings firstName={firstName}/>
        </div>)
    }
}

const App = () => (
    <div>
        <SimpleForm/>
    </div>
);

export default App;
