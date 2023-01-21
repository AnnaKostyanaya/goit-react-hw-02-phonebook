import React from 'react';
import ContactElement from '../ContactElement';
import style from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact}) => (
<ul className={style.contactlist}>
    {contacts.map(contact => (
        <ContactElement key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>
    ))}
</ul>
);

export default ContactList;

ContactElement.propTypes = {
    contacts: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    }),
    onDeleteContact: PropTypes.func.isRequired,
};