import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from '@nestjs/common';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (ConfigService: ConfigService) => ({
                uri: ConfigService.get<string>('MONGODB_URI')
            })
        })
    ]
})
export class DatabaseModule { }