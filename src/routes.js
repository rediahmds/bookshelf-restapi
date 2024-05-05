const { addBookHanlder, getAllBooks } = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: (req, h) => addBookHanlder(req, h),
  },
  {
    method: 'GET',
    path: '/books',
    handler: (req, h) => getAllBooks(req, h), // TODO: Implement actual handler
  },
];

module.exports = routes;
