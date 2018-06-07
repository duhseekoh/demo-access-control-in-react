import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import AccessControl from "./AccessControl";
import StatsPanel from "../../components/StatsPanel";
import EmergencyAlertPanel from "../../components/EmergencyAlertPanel";
import ShutdownPanel from "../../components/ShutdownPanel";
import UserDetails from "../../components/UserDetails";
import NoAccess from "../../components/NoAccess";

// Setup Redux

const initialState = {
  auth: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        ...state,
        auth: {
          ...state.auth,
          user: action.payload
        }
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// Available Users

const userPlantManager = {
  name: "Plant Manager",
  permissions: [
    "read:stats",
    "control:reactor",
    "control:emergencyalert",
    "write:hourlychecks"
  ]
};

const userSafetyInspector = {
  name: "Safety Inspector",
  permissions: ["read:stats"]
};

// Example App

const AccessControlReduxExample = ({ loggedInUser, login }) => {
  const userPermissions = loggedInUser ? loggedInUser.permissions : [];
  return (
    <ScrollView style={styles.container}>
      <View>
        {!loggedInUser ? (
          <View>
            <Button
              title="Login as Plant Manager"
              onPress={() => login(userPlantManager)}
            />
            <Divider />
            <Button
              title="Login as Safety Inspector"
              onPress={() => login(userSafetyInspector)}
            />
          </View>
        ) : (
          <Button title="Logout" onPress={() => login()} />
        )}
      </View>

      <UserDetails user={loggedInUser} />

      <AccessControl
        allowedPermissions={["read:stats"]}
        renderNoAccess={() => <NoAccess permissionsNeeded="read:stats" />}
      >
        <StatsPanel />
      </AccessControl>

      <AccessControl
        allowedPermissions={["control:emergencyalert"]}
        renderNoAccess={() => (
          <NoAccess permissionsNeeded="control:emergencyalert" />
        )}
      >
        <EmergencyAlertPanel />
      </AccessControl>

      <AccessControl
        allowedPermissions={["control:reactor"]}
        renderNoAccess={() => <NoAccess permissionsNeeded="control:reactor" />}
      >
        <ShutdownPanel />
      </AccessControl>
    </ScrollView>
  );
};

const ConnectedAccessControlReduxExample = connect(
  state => ({
    loggedInUser: state.auth.user
  }),
  dispatch => ({
    login: user => dispatch({ type: "LOGGED_IN_USER", payload: user })
  })
)(AccessControlReduxExample);

const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedAccessControlReduxExample />
  </Provider>
);

export default ReduxApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC",
    paddingVertical: 15
  },
});
