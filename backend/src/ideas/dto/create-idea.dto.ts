import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIdeaDto {
  @IsNotEmpty()
  @IsString()
  prompt: string;
}
