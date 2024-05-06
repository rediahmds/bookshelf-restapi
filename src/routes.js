const {
  addBookHanlder,
  getAllBooks,
  getBookById,
  updateBook,
} = require('./handlers');

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
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: (req, h) => updateBook(req, h),
  },
];

module.exports = routes;
