import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  public token(@Body() auth: AuthDto): string {
    try {
      return JSON.stringify({
        token: this.authService.generateToken(auth),
      });
    } catch (err) {
      throw new HttpException(
        "Can't authenticate that user.",
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
