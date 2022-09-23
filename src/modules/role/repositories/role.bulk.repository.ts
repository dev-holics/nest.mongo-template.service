import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseBulkRepositoryAbstract } from 'src/common/database/abstracts/database.bulk-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk-repository.interface';
import { RoleDocument, RoleEntity } from 'src/modules/role/schemas/role.schema';

@Injectable()
export class RoleBulkRepository
	extends DatabaseBulkRepositoryAbstract<RoleDocument>
	implements IDatabaseBulkRepositoryAbstract
{
	constructor(
		@DatabaseEntity(RoleEntity.name)
		private readonly roleModel: Model<RoleDocument>,
	) {
		super(roleModel);
	}
}
