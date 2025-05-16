
import { IsString, IsOptional } from 'class-validator';

export class CreateUserWebsiteDto {
  @IsString()
  @IsOptional()
  webname?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  httpaddress?: string;

  @IsString()
  @IsOptional()
  webtitle?: string;

  @IsString()
  @IsOptional()
  webhero?: string;

  @IsString()
  @IsOptional()
  webnavbar?: string;

  @IsString()
  @IsOptional()
  weblinks?: string;

  @IsString()
  @IsOptional()
  webcta?: string;
}
