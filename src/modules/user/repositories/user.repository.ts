import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseRepositoryAbstract } from 'src/common/database/abstracts/database.repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { PermissionEntity } from 'src/modules/permission/schemas/permission.schema';
import { RoleEntity } from 'src/modules/role/schemas/role.schema';
import { UserDocument, UserEntity } from 'src/modules/user/schemas/user.schema';

@Injectable()
export class UserRepository
	extends DatabaseRepositoryAbstract<UserDocument>
	implements IDatabaseRepositoryAbstract<UserDocument>
{
	constructor(
		@DatabaseEntity(UserEntity.name)
		private readonly userModel: Model<UserDocument>,
	) {
		super(userModel, {
			path: 'role',
			model: RoleEntity.name,
			populate: {
				path: 'permissions',
				model: PermissionEntity.name,
			},
		});
	}
}
