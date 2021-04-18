import { sign, verify } from "jsonwebtoken";

import { Auth } from "./MailClient";

export default class JWT {
  public static sign(authPayload: Auth): string {
    return sign(authPayload, process.env.JWT_PK!, {
      expiresIn: "7h",
      algorithm: "HS512",
    });
  }

  public static verify(token: string): any {
    try {
      return verify(token, process.env.JWT_PK!);
    } catch (err) {
      throw new Error("Invalid token!");
    }
  }
}
