import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactsList/MyContactsList';
import MyContactsFind from './MyContactsFind/MyContactsFind';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../redux/contacts/contacts-operations';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import { getFilter } from 'redux/filter/filter-selectors';

import css from './MyContacts.module.css';

const MyContacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
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
