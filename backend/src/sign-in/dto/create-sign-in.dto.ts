import { IsEmail,IsString,IsOptional } from "class-validator";
export class CreateSignInDto {
  @IsEmail()
  @IsString()
  @IsOptional()
  email:string


  @IsString()
  @IsOptional()
  password:string


}
