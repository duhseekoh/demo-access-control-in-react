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
  ],
  nationality: "USA"
};

const userSafetyInspector = {
  name: "Safety Inspector",
  permissions: ["read:stats"],
  nationality: "USA"
};

const userNKScientist = {
  name: "North Korean Scientist",
  permissions: [
    "read:stats",
    "control:reactor",
    "control:emergencyalert",
    "write:hourlychecks"
  ],
  nationality: "North Korea"
};

const AccessControlLogicExample = ({ loggedInUser, login }) => {
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
            <Divider />
            <Button
              title="Login as North Korean Scientist"
              onPress={() => login(userNKScientist)}
            />
          </View>
        ) : (
          <Button title="Logout" onPress={() => login()} />
        )}
      </View>

      <UserDetails user={loggedInUser} />

      <AccessControl
        extraAccessData={{ allowedNationality: "USA" }}
        accessCheck={(extraAccessData, user) =>
          user && user.nationality === extraAccessData.allowedNationality
        }
        renderNoAccess={() => (
          <View style={styles.countryWarning}>
            <Text style={styles.noAccessText}>
              Only Nuclear engineers from the USA 🇺🇸 can access this system.
            </Text>
          </View>
        )}
      >
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
          renderNoAccess={() => (
            <NoAccess permissionsNeeded="control:reactor" />
          )}
        >
          <ShutdownPanel />
        </AccessControl>
      </AccessControl>
    </ScrollView>
  );
};

const ConnectedAccessControlLogicExample = connect(
  state => ({
    loggedInUser: state.auth.user
  }),
  dispatch => ({
    login: user => dispatch({ type: "LOGGED_IN_USER", payload: user })
  })
)(AccessControlLogicExample);

const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedAccessControlLogicExample />
  </Provider>
);

export default ReduxApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC",
    paddingVertical: 15
  },
  noAccessText: {
    color: "#F00"
  },
  countryWarning: {
    padding: 15,
    margin: 15,
    borderWidth: 2,
    borderColor: '#F00',
  },
});
