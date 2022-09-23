import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { CommandModule } from 'nestjs-command';
import { AuthModule } from 'src/common/auth/auth.module';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleModule } from 'src/modules/role/role.module';
import { UserModule } from 'src/modules/user/user.module';
import { AuthApiSeed } from 'src/migration/seeds/auth.api.seed';
import { PermissionSeed } from 'src/migration/seeds/permission.seed';
import { RoleSeed } from 'src/migration/seeds/role.seed';
import { SettingSeed } from 'src/migration/seeds/setting.seed';
import { UserSeed } from 'src/migration/seeds/user.seed';

@Module({
	imports: [
		CommonModule,
		CommandModule,
		AuthModule,
		PermissionModule,
		RoleModule,
		UserModule,
	],
	providers: [AuthApiSeed, PermissionSeed, RoleSeed, SettingSeed, UserSeed],
	exports: [],
})
export class MigrationModule {}
