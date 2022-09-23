import { Module } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { UserBulkService } from 'src/modules/user/services/user.bulk.service';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { UserBulkRepository } from 'src/modules/user/repositories/user.bulk.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
	UserDatabaseName,
	UserEntity,
	UserSchema,
} from 'src/modules/user/schemas/user.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Module({
	controllers: [],
	providers: [UserService, UserBulkService, UserRepository, UserBulkRepository],
	exports: [UserService, UserBulkService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: UserEntity.name,
					schema: UserSchema,
					collection: UserDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class UserModule {}
