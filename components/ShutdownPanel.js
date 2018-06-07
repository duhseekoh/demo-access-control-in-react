import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

const ShutdownPanel = () => {
  return (
    <View style={styles.container}>
      <Card title='Reactor'>
        <Button
          buttonStyle={styles.button}
          title="Shutdown Reactor"
          onPress={() => alert('Reactors shutting down...')}
        />
      </Card>
    </View>
  );
};

export default ShutdownPanel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: '#f00',
  },
});
