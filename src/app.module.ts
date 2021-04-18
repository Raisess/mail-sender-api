import { Module } from "@nestjs/common";

import { AuthModule } from "./modules/auth/auth.module";
import { MailModule } from "./modules/mails/mails.module";

@Module({
  imports: [MailModule, AuthModule],
})
export class AppModule {}
