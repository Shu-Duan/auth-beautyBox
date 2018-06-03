const _export = (sequelize, DataTypes) => {
  const userRole = sequelize.define('userRole', {
    uuid : {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      primaryKey : true
    },
    role_name : {
      type : DataTypes.STRING
    }
  }, {
    tableName : 'user_role',
    timestamps : false
  });
  userRole.associate = function(model) {
    userRole.hasMany(model.userRoleMapping, {
      sourceKey : 'uuid',
      as : 'userInfoMappingList',
      foreignKey : 'role_uuid'
    });
    userRole.belongsToMany(model.userAuthFunction, {
      through : model.userFunctionMapping,
      as : 'functionList',
      foreignKey : 'role_uuid'
    });
  };
  return userRole;
}

export default _export;