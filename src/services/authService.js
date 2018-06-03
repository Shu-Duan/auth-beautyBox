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

export default authService;