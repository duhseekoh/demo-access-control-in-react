import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Badge,
  Button,
  Card,
  Divider,
  Text,
} from 'react-native-elements';

const StatsPanel = () => {
  return (
    <View style={styles.container}>
      <Card title='Stats'>
        <Text>Indoor Radiation Levels</Text>
        <Badge containerStyle={styles.badge}><Text>0.3 μSv/hour</Text></Badge>
        <Divider />

        <Text>Outdoor Radiation Levels</Text>
        <Badge containerStyle={styles.badge}><Text>0.09 μSv/hour</Text></Badge>
        <Divider />

        <Text>Active Cores</Text>
        <Badge containerStyle={styles.badge}><Text>3</Text></Badge>
        <Divider />

        <Text>Meltdown Imminent</Text>
        <Badge containerStyle={styles.badge}><Text>No</Text></Badge>
        <Divider />

        <Text>Avg Spent Fuel Rod Age</Text>
        <Badge containerStyle={styles.badge}><Text>8.4 years</Text></Badge>
      </Card>
    </View>
  );
};

export default StatsPanel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  badge: {
    backgroundColor: '#2e8b57',
  },
});
