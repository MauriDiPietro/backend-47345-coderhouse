import { IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserEntity {
    @ApiProperty()
    @IsString()
    first_name: string;
    @ApiProperty()
    @IsString()
    last_name: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsNumber()
    age: number;
    @ApiProperty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsString()
    role: string;
}
