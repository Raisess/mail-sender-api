import "dotenv/config";

import { Auth } from "../shared/MailClient";
import JWT from "../shared/JWT";

describe("JWT tests suite", (): void => {
  const auth: Auth = {
    user: process.env.MAIL_CLIENT_TEST_USER!,
    pass: process.env.MAIL_CLIENT_TEST_PASS!,
  };

  let token: string;

  test("Create token", (): void => {
    token = JWT.sign(auth);

    expect(typeof token).toBe("string");
  });

  test("Verify token", (): void => {
    const decodedToken: any = JWT.verify(token);

    expect(decodedToken.user).toBe(auth.user);
  });
});
