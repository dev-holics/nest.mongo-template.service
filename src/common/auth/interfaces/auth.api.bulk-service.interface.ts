import { IDatabaseOptions } from 'src/common/database/interfaces/database.interface';

export interface IAuthApiBulkService {
	deleteMany(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<boolean>;
}
