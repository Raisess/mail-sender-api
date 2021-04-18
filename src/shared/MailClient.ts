import { createTransport, Transporter } from "nodemailer";

export type Auth = {
  user: string;
  pass: string;
};

export default class MailClient {
  private transport: Transporter;
  private port: number = 587;
  private secure: boolean = false;

  private auth: Auth;

  constructor(host: string, auth: Auth) {
    this.auth = auth;

    this.transport = createTransport({
      host,
      port: this.port,
      secure: this.secure,
      auth: this.auth,
    });
  }

  public async sendMail(
    receivers: Array<string>,
    subject: string,
    content: string,
    html: boolean = false,
  ): Promise<any> {
    const info: any = await this.transport.sendMail({
      from: this.auth.user,
      to: receivers.length > 1 ? receivers.join(", ") : receivers[0],
      subject: subject,
      [html ? "html" : "text"]: content,
    });

    return info;
  }
}
