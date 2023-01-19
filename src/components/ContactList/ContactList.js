import React from 'react';
import style from './ContactList';

const ContactList = ({ contacts, onDeleteContact}) => (

<ul className={style.contactlist}>
{contacts.map(({ id, name, number }) => (
    <li key={id}>
        <p className={style.contact__text}>{name}</p>
        <p className={style.contact__tel}>{number}</p>
        <button
            type="button"
            className={style.contact__btn}
            onClick={() => onDeleteContact(id)}
        >
            Удалить
        </button>
    </li>
))}
</ul>
);

export default ContactList;