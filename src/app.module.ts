import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";

import { AuthMiddleware } from "./common/middlewares/auth.middleware";

import { AuthModule } from "./modules/auth/auth.module";
import { MailModule } from "./modules/mails/mails.module";
import { MailController } from "./modules/mails/mails.controller";

@Module({
  imports: [MailModule, AuthModule],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes(MailController);
  }
}
