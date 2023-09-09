import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import config from '@/common/configs/config';

import { GraphQLModule } from './shared/graphql';
import { TypesenceModule } from './modules/typesence/typesence.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ScheduleModule.forRoot(),
    GraphQLModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypesenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
