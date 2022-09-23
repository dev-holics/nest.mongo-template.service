import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseRepositoryAbstract } from 'src/common/database/abstracts/database.repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import {
	PermissionDocument,
	PermissionEntity,
} from 'src/modules/permission/schemas/permission.schema';

@Injectable()
export class PermissionRepository
	extends DatabaseRepositoryAbstract<PermissionDocument>
	implements IDatabaseRepositoryAbstract<PermissionDocument>
{
	constructor(
		@DatabaseEntity(PermissionEntity.name)
		private readonly permissionModel: Model<PermissionDocument>,
	) {
		super(permissionModel);
	}
}
