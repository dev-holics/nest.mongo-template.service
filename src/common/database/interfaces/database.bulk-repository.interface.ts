import { IDatabaseOptions } from 'src/common/database/interfaces/database.interface';

export interface IDatabaseBulkRepositoryAbstract {
	createMany<N>(data: N[], options?: IDatabaseOptions): Promise<boolean>;

	deleteManyById(_id: string[], options?: IDatabaseOptions): Promise<boolean>;

	deleteMany(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<boolean>;

	updateMany<N>(
		where: Record<string, any>,
		data: N,
		options?: IDatabaseOptions,
	): Promise<boolean>;
}
