import Express from 'express';
import authService from '../services/authService.js';
import ajaxRes from '../object/ajaxResponse.js';

const authRoutes = Express.Router();

authRoutes.get('/role/:account', async function(req, res) {
	let ajaxres=new ajaxRes();
        
	const result=await authService.queryFuncByUser(req.params.account);
	if(result.status){
		res.json(result);
	}
});

export default authRoutes;