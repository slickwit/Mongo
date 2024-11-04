//clean
import { extract } from 'express-extract-routes'
import { UserController } from '../controllers/userController'
import { ServerController } from '../controllers/serverController'

export const routes = extract(UserController, ServerController)
