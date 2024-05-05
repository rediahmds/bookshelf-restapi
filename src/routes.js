const { addBookHanlder, getAllBooks, getBookById } = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: (req, h) => addBookHanlder(req, h),
  },
  {
    method: 'GET',
    path: '/books',
    handler: (req, h) => getAllBooks(req, h),
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: (req, h) => getBookById(req, h),
  },
];

module.exports = routes;
