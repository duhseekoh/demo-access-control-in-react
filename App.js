import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";
import { Constants } from "expo";

import BasicConditionalExampleApp from "./example-apps/basic-conditional/ExampleApp";
import AccessControlBasicExampleApp from "./example-apps/v1-access-control-basic/ExampleApp";
import AccessControlReduxExampleApp from "./example-apps/v2-access-control-redux/ExampleApp";
import AccessControlLogicExampleApp from "./example-apps/v3-access-control-logic/ExampleApp";
import AccessControlWrappedExampleApp from "./example-apps/v4-access-control-wrapped/ExampleApp";

import { Card } from "react-native-elements";

const Splash = ({ navigation }) => (
  <ScrollView style={{ flex: 1 }}>
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
    <Card title="Wrapped Access Control" />
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
      title: 'Basic Access Control',
    }
  },
  AccessControlReduxExampleApp: {
    screen: AccessControlReduxExampleApp,
    navigationOptions: {
      title: 'Redux Access Control',
    }
  },
  AccessControlLogicExampleApp: {
    screen: AccessControlLogicExampleApp,
    navigationOptions: {
      title: 'Custom Logic Access Control',
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
