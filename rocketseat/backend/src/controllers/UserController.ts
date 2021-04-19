import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Tassia", email: "tassia.accioly@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Tassia Accioly", email: "tassia.accioly@gmail.com" },
      message: { subject: "Welcome", body: "Welcome to the system" },
    });

    res.send();
  },
};
