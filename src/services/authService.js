import db from '../models/index.js';
import ajaxRes from '../object/ajaxResponse.js';

const authService = {};
authService.queryFuncByUser = function queryFuncByUser(account) {
	return db.userInfo.findAll({
		where : {
			account : account
		},
		include : [{
			model : db.userRoleMapping,
			as : 'userRoleMapping',
			include : [{
				model : db.userRole,
				as : 'userRole',
				include: [{
					model : db.userAuthFunction,
					as : 'functionList'
				}]
			}]
		}]
	});
}

authService.createUser = function createUser() {
	db.sequelize.transaction(function (tx) {
		return db.userInfo.create({
			account : 'zxc123',
			name : '陳小保',
			email : 'sadf@tsdf.com',
			phone : '0928555666'
		}, {
			transaction : tx
		});
		// TODO next save
		/*.then(function(data){
			
		});*/
	})
	/*.then(function (results){
		// TODO success
	}).catch(function(err){
		// TODO err
	});*/
}

export default authService;