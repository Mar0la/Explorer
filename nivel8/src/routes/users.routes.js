const { Router } = require("express")

const UseControllers = require('../controllers/UseControllers')
const usersRoutes = Router()


const usersController = new UseControllers()
usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes