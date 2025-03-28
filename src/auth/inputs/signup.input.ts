import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class SignupInput {
  @Field(() => String)
  token = ''

  @Field(() => String)
  sub = ''

  @Field(() => Date, { nullable: true })
  tosAcceptedAt?: Date
}
