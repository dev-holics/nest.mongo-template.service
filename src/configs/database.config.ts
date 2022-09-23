import { registerAs } from '@nestjs/config';

export default registerAs(
	'database',
	(): Record<string, any> => ({
		host: process.env.DATABASE_HOST || 'mongodb://localhost:27017',
		name: process.env.DATABASE_NAME || 'happycare_mongo',
		user: process.env.DATABASE_USER || 'ductruong',
		password: process.env.DATABASE_PASSWORD || '123456',
		debug: process.env.DATABASE_DEBUG === 'true' || false,
		options: process.env.DATABASE_OPTIONS,
	}),
);
