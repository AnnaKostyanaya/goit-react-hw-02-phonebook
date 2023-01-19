import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import './App.scss';

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: ''
// }
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }


  nameInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state })
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '' });
  };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  render() {

  return (
    <>
      {/* <Phonebook /> */}
      {/* <Contacts /> */}
      <h2 className="Title">Phonebook</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={this.nameInputId}
          />
      </label>
      <button className="Btn" type="button">Add contact</button>
      </form>
      
      <h2>Contacts</h2>
      <ul>
        {this.state.contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className="Contact__text">{name}</p>
            <p className="Contact__tel">{number}</p>
          </li>
        ))}
      </ul>

    </>
  );
}
}

export default App;