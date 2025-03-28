import { Resolver } from '@nestjs/graphql'
import { User } from '../user/user.model'
import { AuthService } from './auth.service'

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
}
