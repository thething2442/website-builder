import { IsOptional, IsString } from 'class-validator';

export class UpdateUserWebsiteDto {
  @IsOptional()
  @IsString()
  webname?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  httpaddress?: string;

  @IsOptional()
  @IsString()
  webtitle?: string;

  @IsOptional()
  @IsString()
  webhero?: string;

  @IsOptional()
  @IsString()
  webnavbar?: string;

  @IsOptional()
  @IsString()
  weblinks?: string;

  @IsOptional()
  @IsString()
  webcta?: string;
}
