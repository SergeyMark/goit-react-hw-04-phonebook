import React, { Component } from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from "./ContactList/ContactList";
import css from './App.module.css'; 

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (data) => {
        const contactInList = contacts.some(
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        );
    
        if(contactInList){
          alert(`Contact ${data.name} already in list!`);
          return;
        }
    
        const newContact = {
          ...data,
          id: nanoid(),
        }
    
        setContacts(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }))
    
      };

  return(
      <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm handleSubmit={addContact}/>
          <h2>Contacts</h2>
           <ContactFilter 
            filter={filter}
            handleChange={this.handleChange}
          />
          <ContactList 
            data={onInputFilter}
            handleDelete={this.handleDelete}
          /> 
      </div>
  )
}


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contactList');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }
  
//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contactList', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (data) => {
//     const contactInList = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase()
//     );

//     if(contactInList){
//       alert(`Contact ${data.name} already in list!`);
//       return;
//     }

//     const newContact = {
//       ...data,
//       id: nanoid(),
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }))

//   };

//     handleChange = event => {
//       const { value } = event.target;
//       this.setState({filter: value});
//     };

//     handleDelete = id => {
//       this.setState(prevState => ({
//         contacts: prevState.contacts.filter(newContact => newContact.id !== id),
//       }))
//     };

//     onInputFilter = () => {
//       const { contacts, filter } = this.state;
//       return contacts.filter(newContact => newContact.name.toLowerCase().includes(filter.toLowerCase()))
//     };
  

//   render(){
//     const onInputFilter = this.onInputFilter();

//     return(
//       <div className={css.container}>
//           <h1>Phonebook</h1>
//           <ContactForm handleSubmit={this.addContact}/>
//           <h2>Contacts</h2>
//           <ContactFilter 
//             filter={this.state.filter}
//             handleChange={this.handleChange}
//           />
//           <ContactList 
//             data={onInputFilter}
//             handleDelete={this.handleDelete}
//           /> 
//       </div>
//     )
//   }
// }