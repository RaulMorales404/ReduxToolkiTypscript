import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/app/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>

    </Provider>

  );
}
export default App;