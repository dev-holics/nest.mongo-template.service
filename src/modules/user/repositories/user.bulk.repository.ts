import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseBulkRepositoryAbstract } from 'src/common/database/abstracts/database.bulk-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk-repository.interface';
import { UserDocument, UserEntity } from 'src/modules/user/schemas/user.schema';

@Injectable()
export class UserBulkRepository
	extends DatabaseBulkRepositoryAbstract<UserDocument>
	implements IDatabaseBulkRepositoryAbstract
{
	constructor(
		@DatabaseEntity(UserEntity.name)
		private readonly userModel: Model<UserDocument>,
	) {
		super(userModel);
	}
}
