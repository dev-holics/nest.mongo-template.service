import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';
import { RoutesEnumModule } from 'src/router/routes/routes.enum.module';
import { RoutesTestModule } from 'src/router/routes/routes.test.module';
import { RoutesCallbackModule } from 'src/router/routes/routes.callback.module';
import { RoutesAdminModule } from 'src/router/routes/routes.admin.module';
import { RoutesPublicModule } from 'src/router/routes/routes.public.module';
import { RoutesModule } from 'src/router/routes/routes.module';

@Module({})
export class RouterModule {
	static register(): DynamicModule {
		if (process.env.APP_HTTP_ON === 'true') {
			return {
				module: RouterModule,
				controllers: [],
				providers: [],
				exports: [],
				imports: [
					RoutesModule,
					RoutesEnumModule,
					RoutesTestModule,
					RoutesCallbackModule,
					RoutesAdminModule,
					RoutesPublicModule,
					NestJsRouterModule.register([
						{
							path: '/',
							module: RoutesModule,
						},
						{
							path: '/test',
							module: RoutesTestModule,
						},
						{
							path: '/enum',
							module: RoutesEnumModule,
						},
						{
							path: '/public',
							module: RoutesPublicModule,
						},
						{
							path: '/admin',
							module: RoutesAdminModule,
						},
						{
							path: '/callback',
							module: RoutesCallbackModule,
						},
					]),
				],
			};
		}

		return {
			module: RouterModule,
			controllers: [],
			providers: [],
			exports: [],
			imports: [],
		};
	}
}
