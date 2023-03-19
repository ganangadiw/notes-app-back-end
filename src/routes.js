// eslint-disable-next-line import/extensions
const { addNotehandler, getAllNotesHandler } = require('./handler.js');

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
];

module.exports = routes;
