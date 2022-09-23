export interface ISettingBulkService {
	deleteMany(where: Record<string, any>): Promise<boolean>;
}
