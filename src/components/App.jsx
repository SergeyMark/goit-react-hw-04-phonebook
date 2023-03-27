import { useState, useEffect } from "react";

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css'; 

export const App = () => {
  const [contacts, setContacts] = useState(()=> {
    return JSON.parse(window.localStorage.getItem('Contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
        const contactInList = contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );
    
        if(contactInList){
          alert(`Contact ${name} already in list!`);
          return;
        }
    
        const newContact = {
          id: nanoid(),
          name: name,
          number: number,
        }
    
        setContacts([newContact, ...contacts])
      };

      const handleDelete = id => {
        setContacts(contacts.filter(contact => contact.id !== id));
      };

      const handleChange = event => {
        const { value } = event.target;
        setFilter(value); 
      };

      const onInputFilter = () => {
          return contacts.filter(newContact => newContact.name.toLowerCase().includes(filter.toLowerCase()))
      };


  return(
      <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm handleSubmit={addContact}/>
          <h2>Contacts</h2>
           <ContactFilter 
            filter={filter}
            handleChange={handleChange}
          />
          <ContactList 
            contacts={onInputFilter()}
            handleDelete={handleDelete}
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