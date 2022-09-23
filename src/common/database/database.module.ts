import { Module } from '@nestjs/common';
import { DatabaseOptionService } from 'src/common/database/services/database.option.service';

@Module({
	providers: [DatabaseOptionService],
	exports: [DatabaseOptionService],
	imports: [],
})
export class DatabaseModule {}
