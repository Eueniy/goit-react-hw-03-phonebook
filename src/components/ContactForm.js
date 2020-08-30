import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) {
      return;
    }
    this.props.onSubmitData({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      number: "",
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <h2>Number</h2>
          <input
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
          <p />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
