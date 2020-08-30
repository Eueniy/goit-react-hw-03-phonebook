import React from "react";
import PropTypes from "prop-types";
import ContactList from "./ContactList";

export default function ContactListItem({ contact, onDeleteContact }) {
  return (
    <>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete contact
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
