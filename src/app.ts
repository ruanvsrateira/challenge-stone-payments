import express, { json } from "express";
import cors from "cors";
import routes from "./routes";
import session from "express-session";
import { SESSION_SECRET } from "./settings";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(json());
app.use(routes);

export default app;
