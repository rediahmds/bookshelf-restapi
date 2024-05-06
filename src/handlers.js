const { customAlphabet } = require('nanoid');
const books = require('./books');

const nanoid = customAlphabet('1234567890qwertyuiop', 10);

const handlers = {
  addBookHanlder: (req, h) => {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = req.payload;

    const id = nanoid();
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const isFinished = pageCount === readPage;

    if (!name) {
      return h
        .response({
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        .code(400);
    }

    if (readPage > pageCount) {
      return h
        .response({
          status: 'fail',
          message:
            'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    // book data will be stored into `books` object
    const book = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished: isFinished,
      reading,
      insertedAt,
      updatedAt,
    };

    books.push(book);

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201);
  },
  getAllBooks: (req, h) => {
    const allBooks = books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));

    return h
      .response({
        status: 'success',
        data: {
          books: allBooks,
        },
      })
      .code(200);
  },
  getBookById: (req, h) => {
    const { id } = req.params;

    const matchedBook = books.find((book) => book.id === id);

    if (!matchedBook) {
      return h
        .response({
          status: 'fail',
          message: 'Buku tidak ditemukan',
        })
        .code(404);
    }

    return h
      .response({
        status: 'success',
        data: {
          book: matchedBook,
        },
      })
      .code(200);
  },
  updateBook: (req, h) => {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = req.payload;

    const { id } = req.params;

    if (!name) {
      return h
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        })
        .code(400);
    }

    if (readPage > pageCount) {
      return h
        .response({
          status: 'fail',
          message:
            'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    const matchedBook = books.find((book) => book.id === id);
    const matchedBookIndex = books.findIndex((book) => book.id === id);
    if (!matchedBook || matchedBookIndex === -1) {
      return h
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan',
        })
        .code(404);
    }

    const updatedAt = new Date().toISOString();
    const updatedBook = {
      ...matchedBook,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    // replaces the book at specified index. actually, it deletes and places new ones
    books.splice(matchedBookIndex, 1, updatedBook);

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  },
};

module.exports = handlers;
