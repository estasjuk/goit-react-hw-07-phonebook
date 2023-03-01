import MyContacts from './MyContacts/MyContacts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyContacts />
      </PersistGate>
    </Provider>
  );
};

export default App;
