import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
state = {
    name: '',
    number: ''
}

nameId = nanoid();

handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({ [name]: value });
};

handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({...this.state});
    this.reset();
};

reset = () => {
    this.setState({ name: '', number: '' });
};

render() {
    const { name, number } = this.state;
return (
    <form onSubmit={this.handleSubmit}>
        <label className={style.lable} htmlFor={this.nameId}>Name
            <input className={style.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                id={this.nameId}
                value={name}
            />
        </label>
        <label className={style.lable} htmlFor={this.nameId}>Number
            <input className={style.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                id={this.nameId}
                value={number}
            />
        </label>
    <button className={style.btn} type="submit">Add contact</button>
    </form>
);
}
}

export default ContactForm;
