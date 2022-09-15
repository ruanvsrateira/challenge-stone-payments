import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';
import session from 'express-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "secret-erafaefefga24e21das", 
    resave: false,
    saveUninitialized: false,
}));
app.use(cors());
app.use(json());
app.use(routes);

export default app;