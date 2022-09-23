import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod,
} from '@nestjs/common';
import { RequestIdMiddleware } from 'src/common/middleware/request-id/request-id.middleware';
import { TimezoneMiddleware } from 'src/common/middleware/timezone/timezone.middleware';
import {
	JsonBodyParserMiddleware,
	RawBodyParserMiddleware,
	TextBodyParserMiddleware,
	UrlencodedBodyParserMiddleware,
} from 'src/common/middleware/body-parser/body-parser.middleware';
import { CompressionMiddleware } from 'src/common/middleware/compression/compression.middleware';
import { CorsMiddleware } from 'src/common/middleware/cors/cors.middleware';
import {
	HttpDebuggerMiddleware,
	HttpDebuggerResponseMiddleware,
} from 'src/common/middleware/http-debugger/http-debugger.middleware';
import { HelmetMiddleware } from 'src/common/middleware/helmet/helmet.middleware';
import { RateLimitMiddleware } from 'src/common/middleware/rate-limit/rate-limit.middleware';
import { UserAgentMiddleware } from 'src/common/middleware/user-agent/user-agent.middleware';
import { ValidateCustomLanguageMiddleware } from 'src/common/middleware/validate-custom-language/validate-custom-language.middleware';
import { ResponseTimeMiddleware } from 'src/common/middleware/response-time/response-time.middleware';
import { TimestampMiddleware } from 'src/common/middleware/timestamp/timestamp.middleware';
import { VersionMiddleware } from 'src/common/middleware/version/version.middleware';
import { MaintenanceMiddleware } from 'src/common/middleware/maintenance/maintenance.middleware';

@Module({})
export class MiddlewareModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(
				RequestIdMiddleware,
				TimezoneMiddleware,
				JsonBodyParserMiddleware,
				TextBodyParserMiddleware,
				RawBodyParserMiddleware,
				UrlencodedBodyParserMiddleware,
				CompressionMiddleware,
				CorsMiddleware,
				HttpDebuggerResponseMiddleware,
				HttpDebuggerMiddleware,
				HelmetMiddleware,
				RateLimitMiddleware,
				UserAgentMiddleware,
				ValidateCustomLanguageMiddleware,
				ResponseTimeMiddleware,
				TimestampMiddleware,
				VersionMiddleware,
			)
			.forRoutes('*')
			.apply(MaintenanceMiddleware)
			.exclude(
				{
					path: 'api/v:version*/user/login',
					method: RequestMethod.POST,
				},
				{
					path: 'api/user/login',
					method: RequestMethod.POST,
				},
				{
					path: 'api/v:version*/user/refresh',
					method: RequestMethod.POST,
				},
				{
					path: 'api/user/refresh',
					method: RequestMethod.POST,
				},
				{
					path: 'api/v:version*/admin/setting/(.*)',
					method: RequestMethod.ALL,
				},
				{
					path: 'api/admin/setting/(.*)',
					method: RequestMethod.ALL,
				},
				{
					path: 'api/v:version*/setting/(.*)',
					method: RequestMethod.ALL,
				},
				{
					path: 'api/setting/(.*)',
					method: RequestMethod.ALL,
				},
			)
			.forRoutes('*');
	}
}
