import { Module } from "@nestjs/common";

import { MailController } from "./mails.controller";
import { MailService } from "./mails.service"

@Module({
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
