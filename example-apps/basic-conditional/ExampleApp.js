import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Divider,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Text,
} from 'react-native-elements';

const AuthScreen = ({ user }) => {
  if (user) {
    return (
      <View>
        <Text h2 style={authScreenStyles.welcome}>Welcome {user.name}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <Button title="Login" />
      </View>
    );
  }
};

const authScreenStyles = StyleSheet.create({});

const BasicConditionalExample = () => (
  <View style={styles.container}>
    <Card title="No User" containerStyle={styles.usageContainer}>
      <AuthScreen />
    </Card>
    <Card title="With a User" containerStyle={styles.usageContainer}>
      <AuthScreen user={{ name: 'Dom' }} />
    </Card>
  </View>
);

export default BasicConditionalExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  usageContainer: {
    backgroundColor: '#FFC',
  },
});
