import e, { Request, Response } from "express"
import EmailService from "../services/EmailService"

const users = [
    {name: 'João Pedro', email: 'joaopedro@hotmail.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: {
                 name: users[0].name,
                  email: users[0].email 
            },
            message: {
                 body: 'Bem-vindo ao sistema',
                  subject: 'Seja bem-vindo'
            }
        })

        return res.send('success')
    }
}