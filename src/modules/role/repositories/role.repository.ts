import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseRepositoryAbstract } from 'src/common/database/abstracts/database.repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { PermissionEntity } from 'src/modules/permission/schemas/permission.schema';
import { RoleDocument, RoleEntity } from 'src/modules/role/schemas/role.schema';

@Injectable()
export class RoleRepository
	extends DatabaseRepositoryAbstract<RoleDocument>
	implements IDatabaseRepositoryAbstract<RoleDocument>
{
	constructor(
		@DatabaseEntity(RoleEntity.name)
		private readonly roleModel: Model<RoleDocument>,
	) {
		super(roleModel, {
			path: 'permissions',
			model: PermissionEntity.name,
		});
	}
}
