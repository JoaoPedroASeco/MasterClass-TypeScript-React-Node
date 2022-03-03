type ImailTo = {
    name: string
    email: string
}

type IMailMessage = {
    subject: string
    body: string
    attachment?: string[]
}

type IMessageDTO = {
    to: ImailTo
    message: IMailMessage
}

interface IEmailService {
    sendMail(request: IMessageDTO): void
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO ) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService