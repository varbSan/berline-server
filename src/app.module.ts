import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { QueuePointModule } from './queuePoint/queuePoint.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false, // Enable playground
      autoSchemaFile: true,
    }),
    UserModule,
    AuthModule,
    QueuePointModule,
  ],
})
export class AppModule {}
