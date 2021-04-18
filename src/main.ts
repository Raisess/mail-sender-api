import { NestFactory, NestApplication } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from "@nestjs/swagger";

import { AppModule } from "./app.module";

class App {
  public static async bootstrap(): Promise<void> {
    const app: NestApplication = await NestFactory.create(AppModule);

    const config: any = new DocumentBuilder()
      .setTitle("Mail Sender API")
      .setDescription("An API to send e-mails.")
      .setVersion("1.0")
      .setLicense(
        "MIT",
        "https://github.com/Raisess/mail-sender-api/blob/master/LICENSE",
      )
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api", app, document);

    const port: string | number = process.env.PORT || 1939;

    await app.listen(
      port,
      (): void => (
        console.log("API is running on port:", port),
        console.log(`Swagger docs running on http://localhost:${port}/api`)
      ),
    );
  }
}

App.bootstrap();
