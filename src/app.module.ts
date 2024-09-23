import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './entity/categorie.entity';
import { ItemsModule } from './items/items.module';
import { Item } from './entity/items.entity';
import { ClothingAttributesModule } from './clothing-attributes/clothing-attributes.module';
import { ClothingAttribute } from './entity/clothing-attributes.entity';
import { join } from 'path';
import { ItemPhotosModule } from './item-photos/item-photos.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
