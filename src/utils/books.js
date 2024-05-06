const books = require('../books');

const filterBooksByName = (bookNameQuery) =>
  books.filter((book) => {
    const bookNameLowerCase = book.name.toLowerCase();
    return bookNameLowerCase.includes(bookNameQuery);
  });

const getBooksByName = (bookName, h) => {
  const lowercaseName = bookName.toLowerCase();
  const matchedBooks = filterBooksByName(lowercaseName);

  if (!matchedBooks) {
    return h
      .response({
        status: 'fail',
        message: `Tidak ditemukan buku yang mengandung kata ${bookName}`,
      })
      .code(404);
  }

  const booksWithCustomProps = matchedBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));
  return h
    .response({
      status: 'success',
      data: {
        books: booksWithCustomProps,
      },
    })
    .code(200);
};

const getBooksByReadingStatus = (readingStatus, h) => {
  const matchedBooks = books.filter((book) => book.reading === readingStatus);
  const booksWithCustomProps = matchedBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return h
    .response({
      status: 'success',
      data: {
        books: booksWithCustomProps,
      },
    })
    .code(200);
};

module.exports = { getBooksByName, getBooksByReadingStatus };
