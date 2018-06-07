import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";

const NoAccess = ({ permissionsNeeded }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.noAccessText}>
          Unauthorized -- You need the following permissions:{" "}
          <Text style={styles.permissionText}>{permissionsNeeded}</Text>
        </Text>
      </Card>
    </View>
  );
};

export default NoAccess;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  noAccessText: {
    color: "#F00"
  },
  permissionText: {
    fontWeight: "bold"
  }
});
