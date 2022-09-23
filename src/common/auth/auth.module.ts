import { Module } from '@nestjs/common';
import { AuthService } from 'src/common/auth/services/auth.service';
import { AuthApiService } from 'src/common/auth/services/auth.api.service';
import { AuthApiBulkService } from 'src/common/auth/services/auth.api.bulk.service';
import { AuthEnumService } from 'src/common/auth/services/auth.enum.service';
import { AuthApiBulkRepository } from 'src/common/auth/repositories/auth.api.bulk.repository';
import { AuthApiRepository } from 'src/common/auth/repositories/auth.api.repository';
import { JwtStrategy } from 'src/common/auth/guards/jwt/auth.jwt.strategy';
import { JwtRefreshStrategy } from 'src/common/auth/guards/jwt-refresh/auth.jwt-refresh.strategy';
import { ApiKeyStrategy } from 'src/common/auth/guards/api-key/auth.api-key.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import {
	AuthApiDatabaseName,
	AuthApiEntity,
	AuthApiSchema,
} from 'src/common/auth/schemas/auth.api.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Module({
	controllers: [],
	providers: [
		AuthService,
		AuthApiService,
		AuthApiBulkService,
		AuthEnumService,
		AuthApiBulkRepository,
		AuthApiRepository,
		JwtStrategy,
		JwtRefreshStrategy,
		ApiKeyStrategy,
	],
	exports: [AuthService, AuthApiService, AuthApiBulkService, AuthEnumService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: AuthApiEntity.name,
					schema: AuthApiSchema,
					collection: AuthApiDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class AuthModule {}
