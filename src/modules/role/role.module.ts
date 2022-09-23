import { Module } from '@nestjs/common';
import { RoleService } from 'src/modules/role/services/role.service';
import { RoleBulkRepository } from 'src/modules/role/repositories/role.bulk.repository';
import { RoleBulkService } from 'src/modules/role/services/role.bulk.service';
import { RoleRepository } from 'src/modules/role/repositories/role.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
	RoleDatabaseName,
	RoleEntity,
	RoleSchema,
} from 'src/modules/role/schemas/role.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Module({
	controllers: [],
	providers: [RoleService, RoleBulkService, RoleRepository, RoleBulkRepository],
	exports: [RoleService, RoleBulkService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: RoleEntity.name,
					schema: RoleSchema,
					collection: RoleDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class RoleModule {}
