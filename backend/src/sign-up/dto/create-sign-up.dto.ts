import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateSignUpDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    username: string;

    @IsString()
    @MinLength(6)
    password: string;
}
