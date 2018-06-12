import authService from '../src/services/authService.js';
import ajaxRes from '../src/object/ajaxResponse.js';

describe('create user', function(){
    let ajaxres = new ajaxRes();
	authService.createUser();
});