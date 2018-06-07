import React from 'react';
import { View } from 'react-native';

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
  permissions: [],
  renderNoAccess: () => null,
};

export default AccessControl;
