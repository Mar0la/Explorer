const { Router } = require("express")

const TagsControllers = require('../controllers/MovieTagsController')
const movieTagsRoutes = Router()

const movieTagsController = new TagsControllers()

movieTagsRoutes.get('/:user_id', movieTagsController.index)


module.exports = movieTagsRoutes