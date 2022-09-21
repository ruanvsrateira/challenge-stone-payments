import { APP_PORT } from "./settings";
import app from "./app";

app.listen(APP_PORT, () => {
  console.log("Servidor rodando!!");
});
