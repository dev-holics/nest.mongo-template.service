import { Module } from '@nestjs/common';
import { PermissionService } from 'src/modules/permission/services/permission.service';
import { PermissionBulkService } from 'src/modules/permission/services/permission.bulk.service';
import { PermissionRepository } from 'src/modules/permission/repositories/permission.repository';
import { PermissionBulkRepository } from 'src/modules/permission/repositories/permission.bulk.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
	PermissionDatabaseName,
	PermissionEntity,
	PermissionSchema,
} from 'src/modules/permission/schemas/permission.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Module({
	controllers: [],
	providers: [
		PermissionService,
		PermissionBulkService,
		PermissionRepository,
		PermissionBulkRepository,
	],
	exports: [PermissionService, PermissionBulkService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: PermissionEntity.name,
					schema: PermissionSchema,
					collection: PermissionDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class PermissionModule {}
