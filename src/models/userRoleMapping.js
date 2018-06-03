const _export = (sequelize, DataTypes) => {
  const userRoleMapping = sequelize.define('userRoleMapping', {
    user_uuid : {
      type : DataTypes.UUID,
      primaryKey : true
    },
    role_uuid: {
      type : DataTypes.UUID,
      primaryKey : true
    }
  }, {
    tableName : 'user_role_mapping',
    timestamps : false
  });
  userRoleMapping.associate = function(model) {
    userRoleMapping.belongsTo(model.userInfo, {
      as : 'userInfo',
      foreignKey : 'user_uuid'
    });
    userRoleMapping.belongsTo(model.userRole, {
      as : 'userRole',
      foreignKey : 'role_uuid'
    });
  };
  return userRoleMapping;
}


export default _export;