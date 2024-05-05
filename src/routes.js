const { addBookHanlder } = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: (req, h) => addBookHanlder(req, h),
  },
];

module.exports = routes;
