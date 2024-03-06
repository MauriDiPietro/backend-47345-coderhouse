import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class UserType {
  _id: Types.ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  password: string;
  role: string;
}

export class UserLogin {
  @ApiProperty()
  @IsString()
  email: string;
  @ApiProperty()
  @IsString()
  password: string;
}
