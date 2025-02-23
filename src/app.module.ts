import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { QueuePointModule } from './queuePoint/queuePoint.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false, // no need. use altair graphql client instead
      autoSchemaFile: 'schema.gql',
      debug: process.env.NODE_ENV === 'development',
      introspection: process.env.NODE_ENV === 'development',
    }),
    UserModule,
    AuthModule,
    QueuePointModule,
  ],
})
export class AppModule {}
