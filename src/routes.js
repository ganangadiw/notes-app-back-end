// eslint-disable-next-line import/extensions
const { addNotehandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: () => addNotehandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: () => getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => getNoteByIdHandler,
  },
];

module.exports = routes;
