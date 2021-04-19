import { Request, Response } from "express";

const users = [{ name: "Tassia", email: "tassia.accioly@gmail.com" }];

export default {
  async indexedDB(req: Request, res: Response) {
    return res.json(users);
  },
};
