import { Request, Response } from "express";
import { LoginService } from "../services/login/loginService";

class loginController {
  constructor() {}

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const logged = await LoginService({ email, password });

      if (logged) {
        req.session.client = logged;
        return res.json({ logged: true });
      } else {
        return res.json({ logged });
      }
    } catch (err) {
      if (err == "Error: login failed") {
        return res.json({ error: String(err).replace("Error: ", "") });
      }

      return res.json({ error: "unknown error" });
    }
  }

  async logout(req: Request, res: Response): Promise<Response> {
    try {
      req.session.destroy(() => null);

      return res.json({ logged: false });
    } catch (err) {
      return res.json({ error: "error in logout" });
    }
  }
}

export const LoginController = new loginController();
