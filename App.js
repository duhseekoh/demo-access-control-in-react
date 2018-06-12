import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";
import { Constants } from "expo";

import BasicConditionalExampleApp from "./example-apps/basic-conditional/ExampleApp";
import AccessControlBasicExampleApp from "./example-apps/v1-access-control-basic/ExampleApp";
import AccessControlReduxExampleApp from "./example-apps/v2-access-control-redux/ExampleApp";
import AccessControlLogicExampleApp from "./example-apps/v3-access-control-logic/ExampleApp";

import { Card } from "react-native-elements";

const Splash = ({ navigation }) => (
  <ScrollView style={styles.scrollView}>
    <Text style={styles.paragraph}>
      Below are various examples referenced in
      https://medium.com/@duhseekoh/TODO
    </Text>
    <Card title="Example App 1: Basic Access Control">
      <Button
        title="Open"
        onPress={() => navigation.navigate("AccessControlBasicExampleApp")}
      />
    </Card>
    <Card title="Example App 2: Redux Access Control">
      <Button
        title="Open"
        onPress={() => navigation.navigate("AccessControlReduxExampleApp")}
      />
    </Card>
    <Card title="Example App 3: Custom Logic Access Control">
      <Button
        title="Open"
        onPress={() => navigation.navigate("AccessControlLogicExampleApp")}
      />
    </Card>
  </ScrollView>
);

const Routes = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      title: 'Access Control Demo',
    }
  },
  AccessControlBasicExampleApp: {
    screen: AccessControlBasicExampleApp,
    navigationOptions: {
      title: 'Nuclear Plant: Basic Access Control',
    }
  },
  AccessControlReduxExampleApp: {
    screen: AccessControlReduxExampleApp,
    navigationOptions: {
      title: 'Nuclear Plant: Redux Access Control',
    }
  },
  AccessControlLogicExampleApp: {
    screen: AccessControlLogicExampleApp,
    navigationOptions: {
      title: 'Nuclear Plant: Custom Logic Access Control',
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
