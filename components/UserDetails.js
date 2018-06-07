import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Card,
  Badge,
  Text,
} from 'react-native-elements';

const UserDetails = ({ user }) => {
  if (!user) {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Not logged in</Text>
        </Card>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text>Welcome <Text style={styles.username}>{user.name}.</Text></Text>
        <Text>You have the following permissions:</Text>
        {user.permissions.map(p => <Badge key={p}><Text style={styles.permissionText}>{p}</Text></Badge>)}
      </Card>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  username: {
    fontWeight: 'bold',
  },
  permissionText: {
    color: '#FFF',
  }
});
