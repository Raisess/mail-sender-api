import { ApiProperty } from "@nestjs/swagger";

import { IMail } from "../interfaces/IMail";

export class SendMailDto implements IMail {
  @ApiProperty({ type: [String], required: true })
  receivers: Array<string>;

  @ApiProperty({ type: String, required: false })
  subject: string;

  @ApiProperty({ type: String, required: true })
  content: string;
}
