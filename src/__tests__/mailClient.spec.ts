import "dotenv/config";

import MailClient, { Auth } from "../shared/MailClient";

describe("Mail Client tests suite", (): void => {
  const host: string = process.env.MAIL_CLIENT_TEST_HOST!;

  const auth: Auth = {
    user: process.env.MAIL_CLIENT_TEST_USER!,
    pass: process.env.MAIL_CLIENT_TEST_PASS!,
  };

  const mailClient: MailClient = new MailClient(host, auth);

  it("Send mail", async (): Promise<void> => {
    const info: any = await mailClient.sendMail([auth.user], "test", "test");

    expect(typeof info.messageId).toBe("string");
  });
});
