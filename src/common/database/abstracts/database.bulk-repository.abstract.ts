import { Model, Types } from 'mongoose';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk-repository.interface';
import { IDatabaseOptions } from 'src/common/database/interfaces/database.interface';

export abstract class DatabaseBulkRepositoryAbstract<T>
	implements IDatabaseBulkRepositoryAbstract
{
	protected _repository: Model<T>;

	constructor(repository: Model<T>) {
		this._repository = repository;
	}

	async createMany<N>(data: N[], options?: IDatabaseOptions): Promise<boolean> {
		try {
			await this._repository.insertMany(data, {
				session: options?.session || undefined,
			});

			return true;
		} catch (err) {
			throw err;
		}
	}

	async deleteMany(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<boolean> {
		try {
			await this._repository.deleteMany(where, {
				session: options?.session || undefined,
			});

			return true;
		} catch (err: any) {
			throw err;
		}
	}

	async deleteManyById(
		_id: string[],
		options?: IDatabaseOptions,
	): Promise<boolean> {
		const ids: Types.ObjectId[] = _id.map(id => new Types.ObjectId(id));

		try {
			await this._repository.deleteMany(
				{
					_id: { $in: ids },
				},
				{
					session: options?.session || undefined,
				},
			);

			return true;
		} catch (err: any) {
			throw err;
		}
	}

	async updateMany<N>(
		where: Record<string, any>,
		data: N,
		options?: IDatabaseOptions,
	): Promise<boolean> {
		try {
			await this._repository.updateMany(
				where,
				{
					$set: data,
				},
				{
					session: options?.session || undefined,
				},
			);

			return true;
		} catch (err: any) {
			throw err;
		}
	}
}
