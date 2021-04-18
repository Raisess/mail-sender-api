import { ApiProperty } from "@nestjs/swagger";

import { IAuthBody } from "../interfaces/IAuthBody";

export class AuthDto implements IAuthBody {
  @ApiProperty({ type: String, required: true })
  user: string;

  @ApiProperty({ type: String, required: true })
  pass: string;
}
