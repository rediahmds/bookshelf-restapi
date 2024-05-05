# Bookshelf RESTful API

This project is created in order to complete [Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud - Dicoding Indonesia](https://www.dicoding.com/academies/342-belajar-membuat-aplikasi-back-end-untuk-pemula-dengan-google-cloud) course provided by [Bangkit Academy](https://grow.google/intl/id_id/bangkit/).

## To-do

### Mandatory Criterias

- [x] Use `9000` as port number 
- [x] Run the app using `npm run` command
- [x] Create/save book using `POST /books` endpoint
- [x] Read/show all books using `GET /books`
- [ ] Read/show book detail using `GET /books/{bookId}`
- [ ] Update/edit book data using `PUT /books/{bookId}`
- [ ] Delete/remove book using `DELETE /book/{bookId}`

### Optional Criterias (nice to have)

Implement query params to `GET /books` endpoint

- [ ] `/books?name=<str>` return books that contains the `<str>`. Note that the name is **not case sensitive**
- [ ] `/books?reading=<int, 0 or 1>` filter the book by reading progress status
- [ ] `/books?finished=<int, 0 or 1>` filter books by finished reading status