import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { WinstonModule } from 'nest-winston';

import configs from 'src/configs';
import { validationSchema } from 'src/configs/validation.schema.config';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { DatabaseOptionService } from 'src/common/database/services/database.option.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { PaginationModule } from 'src/common/pagination/pagination.module';
import { HelperModule } from 'src/common/helper/helper.module';
import { RequestModule } from 'src/common/request/request.module';
import { ErrorModule } from 'src/common/error/error.module';
import {
	DebuggerModule,
	DebuggerOptionsModule,
} from 'src/common/debugger/debugger.module';
import { MessageModule } from 'src/common/message/message.module';
import { ResponseModule } from 'src/common/response/response.module';
import { LoggerModule } from 'src/common/logger/logger.module';
import { AuthModule } from 'src/common/auth/auth.module';
import { SettingModule } from 'src/common/setting/setting.module';
import { DebuggerOptionService } from 'src/common/debugger/services/debugger.options.service';
import { MiddlewareModule } from 'src/common/middleware/middleware.module';

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			load: configs,
			ignoreEnvFile: false,
			isGlobal: true,
			cache: true,
			envFilePath: ['.env'],
			expandVariables: true,
			validationSchema,
			validationOptions: {
				allowUnknown: true,
				abortEarly: true,
			},
		}),
		WinstonModule.forRootAsync({
			inject: [DebuggerOptionService],
			imports: [DebuggerOptionsModule],
			useFactory: (debuggerOptionsService: DebuggerOptionService) =>
				debuggerOptionsService.createLogger(),
		}),
		MongooseModule.forRootAsync({
			connectionName: DATABASE_CONNECTION_NAME,
			inject: [DatabaseOptionService],
			imports: [DatabaseModule],
			useFactory: (databaseOptionService: DatabaseOptionService) =>
				databaseOptionService.createMongooseOptions(),
		}),
		MessageModule,
		HelperModule,
		PaginationModule,
		ErrorModule,
		LoggerModule,
		DebuggerModule,
		ResponseModule,
		RequestModule,
		MiddlewareModule,
		AuthModule,
		SettingModule,
	],
})
export class CommonModule {}
