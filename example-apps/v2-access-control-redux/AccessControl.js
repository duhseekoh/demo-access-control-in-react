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
  userPermissions,
  allowedPermissions,
  children,
  renderNoAccess,
}) => {
  const permitted = checkPermissions(userPermissions, allowedPermissions);

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
}))(AccessControl);
