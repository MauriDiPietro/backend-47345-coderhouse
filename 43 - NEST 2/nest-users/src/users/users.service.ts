import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './entities/user.entity';
import { UserLogin, UserType } from './types/user';
import { createHash, isValidPassword } from './utils/utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel:Model<UserDocument>,
    private jwtService: JwtService
  ){}

  async register(User: UserEntity) {
    const { email, password } = User;
    const existUser = await this.findByEmail(email);
    if(!existUser) return await this.userModel.create({
      ...User,
      password: await createHash(password)
    });
    else return false;
  }

  async findAll() {
    return await this.userModel.find({});
  }

  generateToken(user: UserType) {
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role
    }

    return this.jwtService.sign(payload)
  }

  async findByEmail(email: string): Promise<UserType | boolean> {
    const user = await this.userModel.findOne({email});
    if(user) return user;
    else return false;
  }

  async login(User: UserLogin) {
    const { email, password } = User;
    const existUser = await this.findByEmail(email);
    if(!existUser) throw new UnauthorizedException('Invalid Credentials');
    const passValid = await isValidPassword(existUser as UserType, password);
    if(!passValid) throw new UnauthorizedException('Invalid Credentials');
    return this.generateToken(existUser as UserType)
  }

  profile(req) {
    return req.user;
  }
}
