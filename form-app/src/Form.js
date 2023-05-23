import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
    state = {
        name: '',
        education: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            education: this.state.education
        };

        axios.post('http://localhost:5000/submit', user)
            .then(() => alert('Form Submitted'))
            .catch(err => console.log('Error: ' + err));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <label>
                    Education:
                    <select name="education" onChange={this.handleChange}>
                        <option value="">Select...</option>
                        <option value="High School">High School</option>
                        <option value="Undergrad">Undergrad</option>
                        <option value="Grad">Grad</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
