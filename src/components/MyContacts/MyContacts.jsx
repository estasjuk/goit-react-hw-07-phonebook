import { useSelector, useDispatch } from 'react-redux';

import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactsList/MyContactsList';
import MyContactsFind from './MyContactsFind/MyContactsFind';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './MyContacts.module.css';

const MyContacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already exist`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <h3 className={css.title}>Phonebook</h3>
        <MyContactsForm onSubmit={onAddContact} />
      </div>

      <div className={css.block}>
        <h3 className={css.title}>Contacts</h3>
        <MyContactsFind value={filter} handleChange={handleFilter} />
        {isContacts && (
          <MyContactList
            removeContact={onDeleteContact}
            contacts={filteredContacts}
          />
        )}
        {!isContacts && <p>No contacts in the list</p>}
        <MyContactList />
      </div>
    </div>
  );
};

export default MyContacts;
