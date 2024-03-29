import {
	IDatabaseCreateOptions,
	IDatabaseFindAllOptions,
	IDatabaseFindOneOptions,
	IDatabaseOptions,
} from 'src/common/database/interfaces/database.interface';
import { PermissionCreateDto } from 'src/modules/permission/dtos/permission.create.dto';
import { PermissionUpdateDto } from 'src/modules/permission/dtos/permission.update.dto';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';

export interface IPermissionService {
	findAll(
		where?: Record<string, any>,
		options?: IDatabaseFindAllOptions,
	): Promise<PermissionDocument[]>;

	findOneById(
		_id: string,
		options?: IDatabaseFindOneOptions,
	): Promise<PermissionDocument>;

	findOne(
		where: Record<string, any>,
		options?: IDatabaseFindOneOptions,
	): Promise<PermissionDocument>;

	getTotal(where?: Record<string, any>): Promise<number>;

	deleteOne(
		where: Record<string, any>,
		options?: IDatabaseOptions,
	): Promise<PermissionDocument>;

	create(
		data: PermissionCreateDto,
		options?: IDatabaseCreateOptions,
	): Promise<PermissionDocument>;

	update(
		_id: string,
		data: PermissionUpdateDto,
		options?: IDatabaseOptions,
	): Promise<PermissionDocument>;

	inactive(
		_id: string,
		options?: IDatabaseOptions,
	): Promise<PermissionDocument>;

	active(_id: string, options?: IDatabaseOptions): Promise<PermissionDocument>;
}
