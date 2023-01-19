// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import style from './ContactElement';

// class Form extends Component {
// state = {
//     name: '',
//     number: ''
// }

// nameInputId = nanoid();

// handleChange = event => {
//     const {name, value} = event.currentTarget;
//     this.setState({ [name]: [value] });
// };

// handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
// };

// reset = () => {
//     this.setState({ name: '', number: '' });
// };

// render() {

// return (
//     <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name
//         <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             id={this.nameInputId}
//             value={this.state.name}
//         />
//         </label>
//         <label htmlFor={this.nameInputId}>Number
//         <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             id={this.nameInputId}
//             value={this.state.number}
//         />
//         </label>
//     <button className={style.btn} type="submit">Add contact</button>
//     </form>
// );
// }
// }

// export default Form;