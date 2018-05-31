const _export = (sequelize,DataTypes)=>{
  const userFunctionMapping = sequelize.define('userFunctionMapping', {
    role_uuid: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    function_uuid: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  }, {
        tableName: 'user_function_mapping',
		timestamps: false
    }
    );
  return userFunctionMapping;
}


export default _export;