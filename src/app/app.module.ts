import { Module } from '@nestjs/common';

import { CommonModule } from 'src/common/common.module';
import { AppController } from 'src/app/controllers/app.controller';
import { RouterModule } from 'src/router/router.module';
import { JobsModule } from 'src/jobs/jobs.module';

@Module({
	controllers: [AppController],
	providers: [],
	imports: [
		CommonModule,

		// Jobs
		JobsModule.register(),

		// Routes
		RouterModule.register(),
	],
})
export class AppModule {}
