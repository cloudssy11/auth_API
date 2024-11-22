const { login, createUser } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/login',
      handler: login,
    },
    {
      method: 'POST',
      path: '/create-user',
      handler: createUser,
    },
  ];
   
module.exports = routes;