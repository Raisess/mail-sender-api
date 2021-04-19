import { ApiBearerAuth, ApiQuery } from "@nestjs/swagger";
import {
  Controller,
  Post,
  Query,
  Body,
  HttpStatus,
  HttpException,
  Req,
  Request,
} from "@nestjs/common";

import { MailService } from "./mails.service";
import { SendMailDto } from "./dto/sendMail.dto";

import { Auth } from "../../shared/MailClient";
import JWT from "../../shared/JWT";

@ApiBearerAuth()
@Controller("mails")
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  @ApiQuery({ name: "host", required: true })
  @ApiQuery({ name: "html", required: false, type: Boolean })
  public async sendMail(
    @Req() req: Request,
    @Query("host") host: string,
    @Body() body: SendMailDto,
    @Query("html") html?: boolean,
  ): Promise<string> {
    try {
      const token: string = req.headers["authorization"].split(" ")[1];
      const { user, pass }: Auth = JWT.verify(token);

      const info: any = await this.mailService.sendMail(
        host,
        { user, pass },
        body,
        html,
      );

      return JSON.stringify(info);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
