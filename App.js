import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Images from './Images';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Images />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
