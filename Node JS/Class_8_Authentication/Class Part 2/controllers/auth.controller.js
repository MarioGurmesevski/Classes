import AuthModel from '../models/auth.model.js'

const authModel = new AuthModel()

export default class AuthController {
    async registerUser(req, res) {
        const userData = req.body;
        
        const newUser = await authModel.registerUser(userData);

        res.status(200).send(newUser)
    }

    async loginUser(req, res) {
        const userData = req.body;

        try {
            const loginData = await authModel.loginUser(userData)
            res.status(200).send(loginData)
        } catch (error) {
            res.status(400).send(error.message)
        }        
    }
}