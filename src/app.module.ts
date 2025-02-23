import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { QueuePointModule } from './queuePoint/queuePoint.module';
import { AuthModule } from './auth/auth.module';

const isDeveloppement = process.env.NODE_ENV === 'development';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false, // Enable playground
      autoSchemaFile: 'schema.gql', // Specify the path for the schema file
      debug: isDeveloppement,
      introspection: isDeveloppement,
    }),
    UserModule,
    AuthModule,
    QueuePointModule,
  ],
})
export class AppModule {}
