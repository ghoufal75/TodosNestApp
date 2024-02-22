import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class PostTodoDTO {

  @IsOptional()
  id ?: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  accomplished: boolean;

  @IsDateString()
  creationDate: string;
}
