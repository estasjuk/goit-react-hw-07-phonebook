import MyContacts from './MyContacts/MyContacts';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <MyContacts />
    </Provider>
  );
};

export default App;
