export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    //console.log(contacts);
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};
