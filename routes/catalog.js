var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');
// GET catalog home page.
router.get('/', book_controller.index);

//RESTFUL ROUTES FOR 'BOOK'
// GET request for creating a Book form.
router.get('/books/new', book_controller.book_create_get);

// POST request for creating Book.
router.post('/books', book_controller.book_create_post);

// DELETE request to delete Book.
router.delete('/books/:id', book_controller.book_delete_delete);
//GET request for form to update Book
router.get('/books/:id/edit', book_controller.book_update_get);
// PUT request to update Book.
router.put('/books/:id', book_controller.book_update_put);

// GET request for one Book.
router.get('/books/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

//RESTFUL ROUTES FOR 'AUTHOR'
// GET request for creating a author form.
router.get('/authors/new', author_controller.author_create_get);

// POST request for creating author.
router.post('/authors', author_controller.author_create_post);

// DELETE request to delete author.
router.delete('/authors/:id', author_controller.author_delete_delete);
//GET request for form to update author
router.get('/authors/:id/edit', author_controller.author_update_get);
// PUT request to update author.
router.put('/authors/:id', author_controller.author_update_put);

// GET request for one author.
router.get('/authors/:id', author_controller.author_detail);

// GET request for list of all author items.
router.get('/authors', author_controller.author_list);

//RESTFUL ROUTES FOR 'GENRE'
// GET request for creating a genre form.
router.get('/genres/new', genre_controller.genre_create_get);

// POST request for creating genre.
router.post('/genres', genre_controller.genre_create_post);

// DELETE request to delete genre.
router.delete('/genres/:id', genre_controller.genre_delete_delete);
//GET request for form to update genre
router.get('/genres/:id/edit', genre_controller.genre_update_get);
// PUT request to update genre.
router.put('/genres/:id', genre_controller.genre_update_put);

// GET request for one genre.
router.get('/genres/:id', genre_controller.genre_detail);

// GET request for list of all genre items.
router.get('/genres', genre_controller.genre_list);
//RESTFUL ROUTES FOR 'BOOKINSTANCE'
// GET request for creating a bookinstance form.
router.get('/bookinstances/new', book_instance_controller.bookinstance_create_get);

// POST request for creating bookinstance.
router.post('/bookinstances', book_instance_controller.bookinstance_create_post);

// DELETE request to delete bookinstance.
router.delete('/bookinstances/:id', book_instance_controller.bookinstance_delete_delete);
//GET request for form to update bookinstance
router.get('/bookinstances/:id/edit', book_instance_controller.bookinstance_update_get);
// PUT request to update bookinstance.
router.put('/bookinstances/:id', book_instance_controller.bookinstance_update_put);

// GET request for one bookinstance.
router.get('/bookinstances/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all bookinstance items.
router.get('/bookinstances', book_instance_controller.bookinstance_list);
module.exports = router;
