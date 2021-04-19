interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; //poderia ser tb Array<string>
}

//DTO = Data Transfer Object (DDD)
//Objeto para Transferência de Dados, e quando criamos uma interface para definir como os dados trafegam entre dois arquivos diferentes dentro da nossa aplicação, normalmente usamos DTO (que é o normal dentro do DDD)
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email sent to ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
