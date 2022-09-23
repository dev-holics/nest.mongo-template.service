import { MongooseModuleOptions } from '@nestjs/mongoose';

export interface IDatabaseOptionService {
	createMongooseOptions(): MongooseModuleOptions;
}
