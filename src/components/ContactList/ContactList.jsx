import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
    return (
      <ul >
        {contacts.map((contact, id) => (
          <li key={id} >
            {contact.name} : {contact.number}
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
  };