import { APP_PORT } from './src/settings';
import app from './app';

app.listen(APP_PORT, () => {
    console.log('Servidor rodando!!');
});