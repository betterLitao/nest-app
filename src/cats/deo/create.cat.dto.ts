// import { z } from 'zod';

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { z } from 'zod';

export const zCreateCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

export type ZCreateCatDto = z.infer<typeof zCreateCatSchema>;

export class CreateCatDto {
  @ApiProperty({ example: 'Murzik' })
  @IsString()
  name: string;
  @ApiProperty({ example: 5 })
  @IsNumber()
  age: number;
  @ApiProperty({ example: 'Persian' })
  @IsString()
  breed: string;
}
