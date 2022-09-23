import { DynamicModule, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({})
export class JobsModule {
	static register(): DynamicModule {
		if (process.env.APP_JOB_ON === 'true') {
			return {
				module: JobsModule,
				controllers: [],
				providers: [],
				exports: [],
				imports: [ScheduleModule.forRoot(), JobsModule],
			};
		}

		return {
			module: JobsModule,
			controllers: [],
			providers: [],
			exports: [],
			imports: [],
		};
	}
}
