import { Model, PipelineStage, PopulateOptions, Types } from 'mongoose';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import {
	IDatabaseCreateOptions,
	IDatabaseFindAllOptions,
	IDatabaseFindOneOptions,
	IDatabaseOptions,
} from 'src/common/database/interfaces/database.interface';

export abstract class DatabaseRepositoryAbstract<T>
	implements IDatabaseRepositoryAbstract<T>
{
	protected _repository: Model<T>;

	protected _populateOnFind?: PopulateOptions | PopulateOptions[];

	protected constructor(
		repository: Model<T>,
		populateOnFind?: PopulateOptions | PopulateOptions[],
	) {
		this._repository = repository;
		this._populateOnFind = populateOnFind;
	}

	async findAll<Y = T>(
		where: Record<string, any> = {},
		options?: IDatabaseFindAllOptions,
	): Promise<Y[]> {
		const findAllBuilder = this._repository.find(where);

		if (options?.select) {
			findAllBuilder.select(options.select);
		}

		if (options?.limit && options?.skip) {
			findAllBuilder.limit(options.limit).skip(options.skip);
		}

		if (options?.sort) {
			findAllBuilder.sort(options.sort);
		}

		if (options?.populate) {
			if (Array.isArray(this._populateOnFind)) {
				for (const populate of this._populateOnFind) {
					findAllBuilder.populate(populate);
				}
			} else {
				findAllBuilder.populate(this._populateOnFind);
			}
		}

		return findAllBuilder.lean();
	}

	async findOne<Y = T>(
		where?: Record<string, any>,
		options?: IDatabaseFindOneOptions,
	): Promise<Y> {
		const findOneBuilder = this._repository.findOne(where);

		if (options?.select) {
			findOneBuilder.select(options.select);
		}

		if (options?.populate) {
			if (Array.isArray(this._populateOnFind)) {
				for (const populate of this._populateOnFind) {
					findOneBuilder.populate(populate);
				}
			} else {
				findOneBuilder.populate(this._populateOnFind);
			}
		}

		return findOneBuilder.lean();
	}

	async findOneById<Y = T>(
		_id?: string,
		options?: IDatabaseFindOneOptions,
	): Promise<Y> {
		const findOneBuilder = this._repository.findById(_id);

		if (options?.select) {
			findOneBuilder.select(options.select);
		}

		if (options?.populate) {
			if (Array.isArray(this._populateOnFind)) {
				for (const populate of this._populateOnFind) {
					findOneBuilder.populate(populate);
				}
			} else {
				findOneBuilder.populate(this._populateOnFind);
			}
		}

		return findOneBuilder.lean();
	}

	async create<N>(data: N, options?: IDatabaseCreateOptions): Promise<T> {
		const createData: Record<string, any> = data;

		if (options?._id) {
			createData._id = new Types.ObjectId(options._id);
		}

		const createBuilder = await this._repository.create([createData], {
			session: options?.session || undefined,
		});

		return createBuilder[0];
	}

	async updateOne<N>(
		data: N,
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<T> {
		const updateBuilder = this._repository.findOneAndUpdate(
			where,
			{
				$set: data,
			},
			{
				new: true,
			},
		);

		if (options?.session) {
			updateBuilder.session(options.session);
		}

		return updateBuilder;
	}

	async updateOneById<N>(
		_id: string,
		data: N,
		options?: IDatabaseOptions,
	): Promise<T> {
		const updateBuilder = this._repository.findByIdAndUpdate(
			_id,
			{
				$set: data,
			},
			{
				new: true,
			},
		);

		if (options?.session) {
			updateBuilder.session(options.session);
		}

		return updateBuilder;
	}

	async deleteOne<N>(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<T> {
		const deleteBuilder = this._repository.findOneAndDelete(where, {
			new: true,
		});

		if (options?.session) {
			deleteBuilder.session(options.session);
		}

		return deleteBuilder;
	}

	async deleteOneById(_id: string, options?: IDatabaseOptions): Promise<T> {
		const deleteBuilder = this._repository.findByIdAndDelete(_id, {
			new: true,
		});

		if (options?.session) {
			deleteBuilder.session(options.session);
		}

		return deleteBuilder;
	}

	async aggregate<N>(pipeline: Record<string, any>): Promise<N[]> {
		return this._repository.aggregate<N>(pipeline as PipelineStage[]);
	}

	async getTotal(where?: Record<string, any>): Promise<number> {
		return this._repository.count(where);
	}

	async exists(
		where: Record<string, any>,
		excludeId?: string,
	): Promise<boolean> {
		const isExisted = await this._repository.exists({
			...where,
			_id: { $nin: new Types.ObjectId(excludeId) },
		});

		return !!isExisted;
	}
}
