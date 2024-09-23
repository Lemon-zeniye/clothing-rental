import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { ClothingAttributesModule } from './clothing-attributes/clothing-attributes.module';
import { join } from 'path';
import { ItemPhotosModule } from './item-photos/item-photos.module';
import { LookupsModule } from './lookups/lookups.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    ItemsModule,
    ClothingAttributesModule,
    ItemPhotosModule,
    LookupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
