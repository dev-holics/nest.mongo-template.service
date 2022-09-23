import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
	AuthApiDocument,
	AuthApiEntity,
} from 'src/common/auth/schemas/auth.api.schema';
import { DatabaseBulkRepositoryAbstract } from 'src/common/database/abstracts/database.bulk-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk-repository.interface';

@Injectable()
export class AuthApiBulkRepository
	extends DatabaseBulkRepositoryAbstract<AuthApiDocument>
	implements IDatabaseBulkRepositoryAbstract
{
	constructor(
		@DatabaseEntity(AuthApiEntity.name)
		private readonly authApiModel: Model<AuthApiDocument>,
	) {
		super(authApiModel);
	}
}
