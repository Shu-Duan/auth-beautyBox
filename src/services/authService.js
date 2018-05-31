import db from '../models/index.js';
import ajaxRes from '../object/ajaxResponse.js';

const authService ={};

authService.queryFuncByUser=async function queryFuncByUser(account){
	const data=await db.userInfo.findAll({ where: {account: account},include: [
		{all: true}
		] });
	let ajaxres=new ajaxRes();
	if (data.length === 0) {
		ajaxres.statusFail('no result.');
		return ajaxres;
	}else {
		ajaxres.statusOK();
		ajaxres.data=data;
		return ajaxres;
	}
}

export default authService;