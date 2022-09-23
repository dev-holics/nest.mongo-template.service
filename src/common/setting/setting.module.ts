import { Global, Module } from '@nestjs/common';
import { SettingService } from 'src/common/setting/services/setting.service';
import { SettingBulkService } from 'src/common/setting/services/setting.bulk.service';
import { SettingRepository } from 'src/common/setting/repositories/setting.repository';
import { SettingBulkRepository } from 'src/common/setting/repositories/setting.bulk.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
	SettingDatabaseName,
	SettingEntity,
	SettingSchema,
} from 'src/common/setting/schemas/setting.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants';

@Global()
@Module({
	providers: [
		SettingService,
		SettingBulkService,
		SettingRepository,
		SettingBulkRepository,
	],
	exports: [SettingService, SettingBulkService],
	imports: [
		MongooseModule.forFeature(
			[
				{
					name: SettingEntity.name,
					schema: SettingSchema,
					collection: SettingDatabaseName,
				},
			],
			DATABASE_CONNECTION_NAME,
		),
	],
})
export class SettingModule {}
