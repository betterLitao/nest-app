// import { z } from 'zod';

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
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  breed: string;
}
