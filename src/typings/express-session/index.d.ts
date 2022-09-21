import "express-session"; // don't forget to import the original module
import { Client } from "../../entities/client";

declare module "express-session" {
  interface SessionData {
    client: Client;
  }
}
