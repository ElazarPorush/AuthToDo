import express, {Express} from 'express'
import cookieParser from 'cookie-parser'
import authController from './src/controllers/authController'
import userController from './src/controllers/userController'
import todoController from './src/controllers/todoController'
import 'dotenv/config'

const app: Express = express()

app.use(express.json())
app.use(cookieParser())
app.use('/auth', authController)
app.use('/user', userController)
app.use('/todo', todoController)

app.listen(process.env.PORT, () => {
    console.log(`server is up and running, feel free to visit at http://localhost:${process.env.PORT}`);
})