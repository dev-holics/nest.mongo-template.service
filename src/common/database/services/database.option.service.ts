import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import {
	MongooseModuleOptions,
	MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { IDatabaseOptionService } from 'src/common/database/interfaces';
import { ConfigService } from '@nestjs/config';
import { APP_ENVIRONMENT } from 'src/app/constants/app.constant';

@Injectable()
export class DatabaseOptionService
	implements MongooseOptionsFactory, IDatabaseOptionService
{
	private readonly host: string;

	private readonly database: string;

	private readonly user: string;

	private readonly password: string;

	private readonly debug: boolean;

	private readonly options: string;

	private readonly env: string;

	constructor(private readonly configService: ConfigService) {
		this.env = this.configService.get<string>('app.env');

		this.host = this.configService.get<string>('database.host');
		this.database = this.configService.get<string>('database.name');
		this.user = this.configService.get<string>('database.user');
		this.password = this.configService.get<string>('database.password');
		this.debug = this.configService.get<boolean>('database.debug');

		this.options = this.configService.get<string>('database.options')
			? `?${this.configService.get<string>('database.options')}`
			: '';
	}

	createMongooseOptions(): MongooseModuleOptions {
		const uri = this.host;

		if (this.env !== APP_ENVIRONMENT.PRODUCTION) {
			mongoose.set('debug', this.debug);
		}

		const mongooseOptions: MongooseModuleOptions = {
			uri,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 10000,
		};

		if (this.database) {
			mongooseOptions.dbName = this.database;
		}

		if (this.user && this.password) {
			mongooseOptions.auth = {
				username: this.user,
				password: this.password,
			};
		}

		return mongooseOptions;
	}
}
