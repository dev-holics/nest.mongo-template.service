import { Module } from '@nestjs/common';
import { AwsModule } from 'src/common/aws/aws.module';
import { AwsHealthIndicator } from 'src/health/indicators/health.aws.indicator';

@Module({
	providers: [AwsHealthIndicator],
	exports: [AwsHealthIndicator],
	imports: [AwsModule],
})
export class HealthModule {}
