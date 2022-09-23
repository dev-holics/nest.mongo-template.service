export interface IUserBulkService {
	deleteMany(where: Record<string, any>): Promise<boolean>;
}
