//clean
import { extract } from 'express-extract-routes'
//used relative path to get the controller during runtime
import { UserController } from '../controllers/userController'
import { ServerController } from '../controllers/serverController'

export const routes = extract(UserController, ServerController)
