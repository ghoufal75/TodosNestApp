import { IsDateString, IsOptional, IsString } from 'class-validator';

export class PatchTodoDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsDateString()
  @IsOptional()
  creationDate: string;
}
