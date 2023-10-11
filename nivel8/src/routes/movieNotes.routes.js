const { Router } = require("express")

const NotesControllers = require('../controllers/MovieNotesController')
const movieNotesRoutes = Router()

const movieNotesController = new NotesControllers()
movieNotesRoutes.get('/', movieNotesController.index)
movieNotesRoutes.post('/:user_id', movieNotesController.create)
movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.delete('/:id', movieNotesController.delete)



module.exports = movieNotesRoutes