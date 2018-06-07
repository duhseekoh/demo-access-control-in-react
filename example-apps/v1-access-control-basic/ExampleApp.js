import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import AccessControl from "./AccessControl";
import StatsPanel from "../../components/StatsPanel";
import EmergencyAlertPanel from "../../components/EmergencyAlertPanel";
import ShutdownPanel from "../../components/ShutdownPanel";
import UserDetails from "../../components/UserDetails";
import NoAccess from "../../components/NoAccess";

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

// Example app with usage of AccessControl

class AccessControlBasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: undefined
    };
  }

  login = user => {
    this.setState({
      loggedInUser: user
    });
  };

  render() {
    const { loggedInUser } = this.state;
    const userPermissions = loggedInUser ? loggedInUser.permissions : [];
    return (
      <ScrollView style={styles.container}>
        <View>
          {!loggedInUser ? (
            <View>
              <Button
                title="Login as Plant Manager"
                onPress={() => this.login(userPlantManager)}
              />
              <Divider />
              <Button
                title="Login as Safety Inspector"
                onPress={() => this.login(userSafetyInspector)}
              />
            </View>
          ) : (
            <Button title="Logout" onPress={() => this.login()} />
          )}
        </View>

        <UserDetails user={loggedInUser} />

        <AccessControl
          userPermissions={userPermissions}
          allowedPermissions={["read:stats"]}
          renderNoAccess={() => <NoAccess permissionsNeeded="read:stats" />}
        >
          <StatsPanel />
        </AccessControl>

        <AccessControl
          userPermissions={userPermissions}
          allowedPermissions={["control:emergencyalert"]}
          renderNoAccess={() => (
            <NoAccess permissionsNeeded="control:emergencyalert" />
          )}
        >
          <EmergencyAlertPanel />
        </AccessControl>

        <AccessControl
          userPermissions={userPermissions}
          allowedPermissions={["control:reactor"]}
          renderNoAccess={() => (
            <NoAccess permissionsNeeded="control:reactor" />
          )}
        >
          <ShutdownPanel />
        </AccessControl>
      </ScrollView>
    );
  }
}

export default AccessControlBasicExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC",
    paddingVertical: 15
  }
});
