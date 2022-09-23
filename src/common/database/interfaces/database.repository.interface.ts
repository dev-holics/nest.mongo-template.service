import {
	IDatabaseCreateOptions,
	IDatabaseFindAllOptions,
	IDatabaseFindOneOptions,
	IDatabaseOptions,
} from 'src/common/database/interfaces/database.interface';

export interface IDatabaseRepositoryAbstract<T> {
	findAll<Y = T>(
		where: Record<string, any>,
		options?: IDatabaseFindAllOptions,
	): Promise<Y[]>;

	findOne<Y = T>(
		where?: Record<string, any>,
		options?: IDatabaseFindOneOptions,
	): Promise<Y>;

	findOneById<Y = T>(
		_id?: string,
		options?: IDatabaseFindOneOptions,
	): Promise<Y>;

	create<N>(data: N, options?: IDatabaseCreateOptions): Promise<T>;

	updateOne<N>(
		data: N,
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<T>;

	updateOneById<N>(
		_id: string,
		data: N,
		options?: IDatabaseOptions,
	): Promise<T>;

	deleteOne<N>(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<T>;

	deleteOneById(_id: string, options?: IDatabaseOptions): Promise<T>;

	getTotal(where?: Record<string, any>): Promise<number>;

	aggregate<N>(pipeline: Record<string, any>): Promise<N[]>;

	exists(where: Record<string, any>, excludeId?: string): Promise<boolean>;
}
