/* eslint-disable @typescript-eslint/naming-convention */
export enum ENUM_AUTH_STATUS_CODE_ERROR {
	AUTH_BASIC_TOKEN_NEEDED_ERROR = 5100,
	AUTH_BASIC_TOKEN_INVALID_ERROR = 5101,
	AUTH_JWT_ACCESS_TOKEN_ERROR = 5102,
	AUTH_JWT_REFRESH_TOKEN_ERROR = 5103,
	AUTH_INACTIVE_ERROR = 5104,
	AUTH_ROLE_INACTIVE_ERROR = 5105,
	AUTH_ROLE_ACCESS_FOR_INVALID_ERROR = 5106,
	AUTH_PASSWORD_EXPIRED_ERROR = 5107,
	AUTH_PERMISSION_INVALID_ERROR = 5108,
	AUTH_ACCESS_FOR_INVALID_ERROR = 5109,

	AUTH_API_KEY_NEEDED_ERROR = 5120,
	AUTH_API_KEY_PREFIX_INVALID_ERROR = 5121,
	AUTH_API_KEY_SCHEMA_INVALID_ERROR = 5122,
	AUTH_API_KEY_TIMESTAMP_NOT_MATCH_WITH_REQUEST_ERROR = 5123,
	AUTH_API_KEY_NOT_FOUND_ERROR = 5124,
	AUTH_API_KEY_INACTIVE_ERROR = 5125,
	AUTH_API_KEY_INVALID_ERROR = 5126,
}
