import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Index from './src';
import { configureStore, persistor } from './src/reduxs/store';
import theme from './src/utils/theme';

function App() {
  const renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
  return (
    <Provider store={configureStore}>
      <PaperProvider theme={theme}>
        <PersistGate persistor={persistor} loading={renderLoading()}>
          <Index />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
