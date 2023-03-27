import { useState } from "react";
import css from '../App.module.css'; 

export const ContactForm = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    const { name, value } = event.target;

    if (name === 'name') {
        setName(value);
      } else if (name === 'number') {
        setNumber(value);
      } else {
        return;
      }
  }

  const onSubmit = event  => {
     event.preventDefault();
     handleSubmit(name, number);
     resetInput();
  }

  const resetInput = () =>{
    setName('');
    setNumber('');
  }

  return (
              <form
                className={css.container}
                autoComplete="off"
                onSubmit={onSubmit}
              >
                <label >
                  Name
                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInput}
                    value={name}
                  />
                </label>
                <label>
                  Number
                  <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleInput}
                    value={number}
                  />
                </label>
                <button type="submit">
                  Add contact
                </button>
              </form>
            );
}















// import { Component } from "react";
// import css from '../App.module.css'; 

// export class ContactForm extends Component{
//     state = {
//         name: '',
//         number: '',
//       };
    
//       handleInput = e => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//       };
    
//       handleSubmit = e => {
//         e.preventDefault();
//         this.props.handleSubmit(this.state);
//         this.reset();
//       };
    
//       reset = () => {
//         this.setState({ name: '', number: '' });
//       };
    
//       render() {
//         const { name, number } = this.state;
//         return (
//           <form
//             className={css.container}
//             autoComplete="off"
//             onSubmit={this.handleSubmit}
//           >
//             <label >
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 onChange={this.handleInput}
//                 value={name}
//               />
//             </label>
//             <label>
//               Number
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.handleInput}
//                 value={number}
//               />
//             </label>
//             <button type="submit">
//               Add contact
//             </button>
//           </form>
//         );
//       }
// }