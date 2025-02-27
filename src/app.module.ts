import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { QueuePointModule } from './queuePoint/queuePoint.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => ({
        playground: false, // no need. use altair graphql client instead
        autoSchemaFile: 'schema.gql',
        debug: configService.get<string>('NODE_ENV') === 'development',
        introspection: configService.get<string>('NODE_ENV') === 'development',
      }),
    }),
    UserModule,
    AuthModule,
    QueuePointModule,
  ],
})
export class AppModule {}
