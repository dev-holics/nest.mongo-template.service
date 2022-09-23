import { Global, Module } from '@nestjs/common';
import { LoggerService } from 'src/common/logger/services/logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
	LoggerDatabaseName,
	LoggerEntity,
	LoggerSchema,
} from 'src/common/logger/schemas/logger.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Global()
@Module({
	providers: [LoggerService],
	exports: [LoggerService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: LoggerEntity.name,
					schema: LoggerSchema,
					collection: LoggerDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class LoggerModule {}
