import {
	IDatabaseCreateOptions,
	IDatabaseFindAllOptions,
	IDatabaseFindOneOptions,
	IDatabaseOptions,
} from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { RoleDocument } from 'src/modules/role/schemas/role.schema';

export interface IRoleService {
	findAll<T>(
		where?: Record<string, any>,
		options?: IDatabaseFindAllOptions,
	): Promise<T[]>;

	findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;

	findOne<T>(
		where: Record<string, any>,
		options?: IDatabaseFindOneOptions,
	): Promise<T>;

	getTotal(where?: Record<string, any>): Promise<number>;

	exists(name: string, excludeId?: string): Promise<boolean>;

	create(
		data: RoleCreateDto,
		options?: IDatabaseCreateOptions,
	): Promise<RoleDocument>;

	createSuperAdmin(options?: IDatabaseOptions): Promise<RoleDocument>;

	update(
		_id: string,
		data: RoleUpdateDto,
		options?: IDatabaseOptions,
	): Promise<RoleDocument>;

	inactive(_id: string, options?: IDatabaseOptions): Promise<RoleDocument>;

	active(_id: string, options?: IDatabaseOptions): Promise<RoleDocument>;

	deleteOneById(_id: string, options?: IDatabaseOptions): Promise<RoleDocument>;

	deleteOne(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<RoleDocument>;
}
