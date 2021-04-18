import { Module } from "@nestjs/common";

import { MailModule } from "./modules/mails/mails.module";

@Module({
  imports: [MailModule],
})
export class AppModule {}
