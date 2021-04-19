import { Injectable } from "@nestjs/common";

import { IMail } from "./interfaces/IMail";
import MailClient, { Auth } from "../../shared/MailClient";

@Injectable()
export class MailService {
  public async sendMail(
    host: string,
    auth: Auth,
    mail: IMail,
    enableHtml?: boolean,
  ): Promise<any> {
    const mailClient: MailClient = new MailClient(host, auth);

    return mailClient.sendMail(
      mail.receivers,
      mail.subject || "",
      mail.content,
      enableHtml,
    );
  }
}
