import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

const EmergencyAlertPanel = () => {
  return (
    <View style={styles.container}>
      <Card title='Emergency'>
        <Button buttonStyle={styles.button}
          title='Broadcast Emergency Alert'
          onPress={() => alert('Triggered Emergency Alert!!!')}
        />
      </Card>
    </View>
  );
};

export default EmergencyAlertPanel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: '#ffa500',
  }
});
