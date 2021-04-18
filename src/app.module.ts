import { Module } from "@nestjs/common";

import { MailModule } from "./entities/mails/mails.module";

@Module({
  imports: [MailModule],
})
export class AppModule {}
