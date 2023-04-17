const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.reqiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.reqiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/signup', mid.reqiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.reqiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', mid.reqiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
