const _export = (sequelize, DataTypes) => {
  const userAuthFunction = sequelize.define('userAuthFunction', {
    uuid : {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      primaryKey : true
    },
    func_name : {
      type : DataTypes.STRING
    },
    url : {
      type : DataTypes.STRING
    },
    sort : {
      type : DataTypes.INTEGER
    },
    parent_uuid : {
      type : DataTypes.STRING
    }
  }, {
    tableName : 'user_auth_function',
    timestamps : false
  });
  userAuthFunction.associate = function(model) {
    userAuthFunction.belongsToMany(model.userRole, {
      through : model.userFunctionMapping,
      as : 'roleList',
      foreignKey : 'function_uuid'
    });
  };
  return userAuthFunction;
}

export default _export;