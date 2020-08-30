import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistantContacts = localStorage.getItem("contacts");
    if (persistantContacts) {
      this.setState({
        contacts: JSON.parse(persistantContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onSubmitData = (e) => {
    const { contacts } = this.state;

    const addContact = {
      id: uuid(),
      name: e.name,
      number: e.number,
    };
    if (contacts.find((contact) => contact.name === addContact.name)) {
      alert(`${addContact.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [...contacts, addContact],
    });
  };

  onDeleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  changeFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.onSubmitData} />
        {contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            {contacts.length > 1 && (
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            )}
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.onDeleteContact}
            />
          </>
        )}
      </>
    );
  }
}
