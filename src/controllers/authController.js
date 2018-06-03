import Express from 'express';
import authService from '../services/authService.js';
import ajaxRes from '../object/ajaxResponse.js';

const authRoutes = Express.Router();

authRoutes.get('/role/:account', function(req, res) {
	let ajaxres = new ajaxRes();
	authService.queryFuncByUser(req.params.account).then(data => {
		ajaxres.data = data;
		res.json(ajaxres);
	});
});

export default authRoutes;