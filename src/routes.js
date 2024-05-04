const { addBookHanlder } = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHanlder,
  },
];

module.exports = routes;
