import { Injectable } from "@nestjs/common";

import { Auth } from "../../shared/MailClient";
import JWT from "../../shared/JWT";

@Injectable()
export class AuthService {
  public generateToken(auth: Auth): string {
    return JWT.sign(auth);
  }
}
