import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserLogin } from './types/user';
import { UsersGuard } from './users.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiResponse({status: 200, description: 'Usuario Registrado con éxito'})
  @ApiResponse({status: 403, description: 'Invalid Credentials'})
  @ApiBody({type: UserEntity})
  register(@Body() User: UserEntity) {
    return this.usersService.register(User);
  }

  @Post('login')
  @ApiResponse({status: 200, description: 'Usuario Logueado con éxito'})
  @ApiResponse({status: 403, description: 'Invalid Credentials'})
  @ApiBody({type: UserLogin})
  login(@Body() User: UserLogin) {
    return this.usersService.login(User);
  }

  @Get('profile')
  @UseGuards(UsersGuard)
  @ApiSecurity('bearer')
  @ApiResponse({status: 200, description: 'profile user'})
  profile(@Request() req) {
    return this.usersService.profile(req);
  }
}
