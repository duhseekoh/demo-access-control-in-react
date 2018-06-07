import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

const checkPermissions = (userPermissions, allowedPermissions) => {
  if (allowedPermissions.length === 0) {
    return true;
  }

  return userPermissions.some(permission =>
    allowedPermissions.includes(permission)
  );
};

const AccessControl = ({
  user,
  userPermissions,
  allowedPermissions,
  children,
  renderNoAccess,
  accessCheck,
  extraAccessData,
}) => {
  let permitted;
  // when an accessCheck function is provided, ensure that passes as well as the permissions
  if (accessCheck) {
    permitted =
      accessCheck(extraAccessData, user) &&
      checkPermissions(userPermissions, allowedPermissions);
  } else {
    // otherwise only check permissions
    permitted = checkPermissions(userPermissions, allowedPermissions);
  }

  if (permitted) {
    return children;
  }
  return renderNoAccess();
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  userPermissions: [],
  renderNoAccess: () => null,
};

// Compose AccessControl component with redux

export default connect(state => ({
  userPermissions: state.auth.user && state.auth.user.permissions,
  user: state.auth.user,
}))(AccessControl);
