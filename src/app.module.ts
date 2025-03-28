import { MikroOrmModule } from '@mikro-orm/nestjs'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthModule } from './auth/auth.module'
import config from './mikro-orm.config'
import { QueuePointModule } from './queuePoint/queuePoint.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService, logger = new Logger()) => ({
        playground: false, // no need. use altair graphql client instead
        autoSchemaFile: 'schema.gql',
        debug: configService.get<string>('NODE_ENV') === 'development',
        introspection: configService.get<string>('NODE_ENV') === 'development',
        subscriptions: {
          'graphql-ws': {
            onConnect: () => {
              logger('✅ Websocket Client connected')
            },
            onDisconnect: () => {
              logger('❎ Websocket Client disconnected')
            },
          },
        },
      }),
    }),
    UserModule,
    AuthModule,
    QueuePointModule,
  ],
})
export class AppModule {}
