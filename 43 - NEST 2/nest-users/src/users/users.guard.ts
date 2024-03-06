import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ){}

  private extractTokenFromHeader(request: Request): string | undefined{
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    //Bearer skfjndfjksndfkjnsdfj
    return type === 'Bearer' ? token : undefined;
    // if(type === 'Bearer'){
    //   return token
    // } else { return undefined}
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if(!token) throw new UnauthorizedException('Token not found')
    const payload = await this.jwtService.verify(token, {secret: '1234'})
    request.user = payload;
    return true;
  }
}
