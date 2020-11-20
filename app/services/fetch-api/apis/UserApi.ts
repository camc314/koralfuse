/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AuthenticateUserByName,
    AuthenticateUserByNameFromJSON,
    AuthenticateUserByNameToJSON,
    AuthenticationResult,
    AuthenticationResultFromJSON,
    AuthenticationResultToJSON,
    CreateUserByName,
    CreateUserByNameFromJSON,
    CreateUserByNameToJSON,
    ForgotPasswordDto,
    ForgotPasswordDtoFromJSON,
    ForgotPasswordDtoToJSON,
    ForgotPasswordResult,
    ForgotPasswordResultFromJSON,
    ForgotPasswordResultToJSON,
    PinRedeemResult,
    PinRedeemResultFromJSON,
    PinRedeemResultToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    QuickConnectDto,
    QuickConnectDtoFromJSON,
    QuickConnectDtoToJSON,
    UpdateUserEasyPassword,
    UpdateUserEasyPasswordFromJSON,
    UpdateUserEasyPasswordToJSON,
    UpdateUserPassword,
    UpdateUserPasswordFromJSON,
    UpdateUserPasswordToJSON,
    UserConfiguration,
    UserConfigurationFromJSON,
    UserConfigurationToJSON,
    UserDto,
    UserDtoFromJSON,
    UserDtoToJSON,
    UserPolicy,
    UserPolicyFromJSON,
    UserPolicyToJSON,
} from '../models';

export interface AuthenticateUserRequest {
    userId: string;
    pw: string;
    password?: string | null;
}

export interface AuthenticateUserByNameRequest {
    authenticateUserByName: AuthenticateUserByName;
}

export interface AuthenticateWithQuickConnectRequest {
    quickConnectDto: QuickConnectDto;
}

export interface CreateUserByNameRequest {
    createUserByName?: CreateUserByName;
}

export interface DeleteUserRequest {
    userId: string;
}

export interface ForgotPasswordRequest {
    forgotPasswordDto: ForgotPasswordDto;
}

export interface ForgotPasswordPinRequest {
    body?: string | null;
}

export interface GetUserByIdRequest {
    userId: string;
}

export interface GetUsersRequest {
    isHidden?: boolean | null;
    isDisabled?: boolean | null;
}

export interface UpdateUserRequest {
    userId: string;
    userDto?: UserDto;
}

export interface UpdateUserConfigurationRequest {
    userId: string;
    userConfiguration?: UserConfiguration;
}

export interface UpdateUserEasyPasswordRequest {
    userId: string;
    updateUserEasyPassword?: UpdateUserEasyPassword;
}

export interface UpdateUserPasswordRequest {
    userId: string;
    updateUserPassword?: UpdateUserPassword;
}

export interface UpdateUserPolicyRequest {
    userId: string;
    userPolicy?: UserPolicy;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Authenticates a user.
     */
    async authenticateUserRaw(requestParameters: AuthenticateUserRequest): Promise<runtime.ApiResponse<AuthenticationResult>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling authenticateUser.');
        }

        if (requestParameters.pw === null || requestParameters.pw === undefined) {
            throw new runtime.RequiredError('pw','Required parameter requestParameters.pw was null or undefined when calling authenticateUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.pw !== undefined) {
            queryParameters['pw'] = requestParameters.pw;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/Authenticate`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthenticationResultFromJSON(jsonValue));
    }

    /**
     * Authenticates a user.
     */
    async authenticateUser(requestParameters: AuthenticateUserRequest): Promise<AuthenticationResult> {
        const response = await this.authenticateUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Authenticates a user by name.
     */
    async authenticateUserByNameRaw(requestParameters: AuthenticateUserByNameRequest): Promise<runtime.ApiResponse<AuthenticationResult>> {
        if (requestParameters.authenticateUserByName === null || requestParameters.authenticateUserByName === undefined) {
            throw new runtime.RequiredError('authenticateUserByName','Required parameter requestParameters.authenticateUserByName was null or undefined when calling authenticateUserByName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/AuthenticateByName`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthenticateUserByNameToJSON(requestParameters.authenticateUserByName),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthenticationResultFromJSON(jsonValue));
    }

    /**
     * Authenticates a user by name.
     */
    async authenticateUserByName(requestParameters: AuthenticateUserByNameRequest): Promise<AuthenticationResult> {
        const response = await this.authenticateUserByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     * Authenticates a user with quick connect.
     */
    async authenticateWithQuickConnectRaw(requestParameters: AuthenticateWithQuickConnectRequest): Promise<runtime.ApiResponse<AuthenticationResult>> {
        if (requestParameters.quickConnectDto === null || requestParameters.quickConnectDto === undefined) {
            throw new runtime.RequiredError('quickConnectDto','Required parameter requestParameters.quickConnectDto was null or undefined when calling authenticateWithQuickConnect.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/AuthenticateWithQuickConnect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QuickConnectDtoToJSON(requestParameters.quickConnectDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthenticationResultFromJSON(jsonValue));
    }

    /**
     * Authenticates a user with quick connect.
     */
    async authenticateWithQuickConnect(requestParameters: AuthenticateWithQuickConnectRequest): Promise<AuthenticationResult> {
        const response = await this.authenticateWithQuickConnectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a user.
     */
    async createUserByNameRaw(requestParameters: CreateUserByNameRequest): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/New`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserByNameToJSON(requestParameters.createUserByName),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Creates a user.
     */
    async createUserByName(requestParameters: CreateUserByNameRequest): Promise<UserDto> {
        const response = await this.createUserByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a user.
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a user.
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<void> {
        await this.deleteUserRaw(requestParameters);
    }

    /**
     * Initiates the forgot password process for a local user.
     */
    async forgotPasswordRaw(requestParameters: ForgotPasswordRequest): Promise<runtime.ApiResponse<ForgotPasswordResult>> {
        if (requestParameters.forgotPasswordDto === null || requestParameters.forgotPasswordDto === undefined) {
            throw new runtime.RequiredError('forgotPasswordDto','Required parameter requestParameters.forgotPasswordDto was null or undefined when calling forgotPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/ForgotPassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ForgotPasswordDtoToJSON(requestParameters.forgotPasswordDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ForgotPasswordResultFromJSON(jsonValue));
    }

    /**
     * Initiates the forgot password process for a local user.
     */
    async forgotPassword(requestParameters: ForgotPasswordRequest): Promise<ForgotPasswordResult> {
        const response = await this.forgotPasswordRaw(requestParameters);
        return await response.value();
    }

    /**
     * Redeems a forgot password pin.
     */
    async forgotPasswordPinRaw(requestParameters: ForgotPasswordPinRequest): Promise<runtime.ApiResponse<PinRedeemResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/ForgotPassword/Pin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PinRedeemResultFromJSON(jsonValue));
    }

    /**
     * Redeems a forgot password pin.
     */
    async forgotPasswordPin(requestParameters: ForgotPasswordPinRequest): Promise<PinRedeemResult> {
        const response = await this.forgotPasswordPinRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets the user based on auth token.
     */
    async getCurrentUserRaw(): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/Me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Gets the user based on auth token.
     */
    async getCurrentUser(): Promise<UserDto> {
        const response = await this.getCurrentUserRaw();
        return await response.value();
    }

    /**
     * Gets a list of publicly visible users for display on a login screen.
     */
    async getPublicUsersRaw(): Promise<runtime.ApiResponse<Array<UserDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/Public`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserDtoFromJSON));
    }

    /**
     * Gets a list of publicly visible users for display on a login screen.
     */
    async getPublicUsers(): Promise<Array<UserDto>> {
        const response = await this.getPublicUsersRaw();
        return await response.value();
    }

    /**
     * Gets a user by Id.
     */
    async getUserByIdRaw(requestParameters: GetUserByIdRequest): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Gets a user by Id.
     */
    async getUserById(requestParameters: GetUserByIdRequest): Promise<UserDto> {
        const response = await this.getUserByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of users.
     */
    async getUsersRaw(requestParameters: GetUsersRequest): Promise<runtime.ApiResponse<Array<UserDto>>> {
        const queryParameters: any = {};

        if (requestParameters.isHidden !== undefined) {
            queryParameters['isHidden'] = requestParameters.isHidden;
        }

        if (requestParameters.isDisabled !== undefined) {
            queryParameters['isDisabled'] = requestParameters.isDisabled;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserDtoFromJSON));
    }

    /**
     * Gets a list of users.
     */
    async getUsers(requestParameters: GetUsersRequest): Promise<Array<UserDto>> {
        const response = await this.getUsersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a user.
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserDtoToJSON(requestParameters.userDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a user.
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<void> {
        await this.updateUserRaw(requestParameters);
    }

    /**
     * Updates a user configuration.
     */
    async updateUserConfigurationRaw(requestParameters: UpdateUserConfigurationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/Configuration`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserConfigurationToJSON(requestParameters.userConfiguration),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a user configuration.
     */
    async updateUserConfiguration(requestParameters: UpdateUserConfigurationRequest): Promise<void> {
        await this.updateUserConfigurationRaw(requestParameters);
    }

    /**
     * Updates a user\'s easy password.
     */
    async updateUserEasyPasswordRaw(requestParameters: UpdateUserEasyPasswordRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserEasyPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/EasyPassword`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserEasyPasswordToJSON(requestParameters.updateUserEasyPassword),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a user\'s easy password.
     */
    async updateUserEasyPassword(requestParameters: UpdateUserEasyPasswordRequest): Promise<void> {
        await this.updateUserEasyPasswordRaw(requestParameters);
    }

    /**
     * Updates a user\'s password.
     */
    async updateUserPasswordRaw(requestParameters: UpdateUserPasswordRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/Password`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserPasswordToJSON(requestParameters.updateUserPassword),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a user\'s password.
     */
    async updateUserPassword(requestParameters: UpdateUserPasswordRequest): Promise<void> {
        await this.updateUserPasswordRaw(requestParameters);
    }

    /**
     * Updates a user policy.
     */
    async updateUserPolicyRaw(requestParameters: UpdateUserPolicyRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserPolicy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Users/{userId}/Policy`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserPolicyToJSON(requestParameters.userPolicy),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a user policy.
     */
    async updateUserPolicy(requestParameters: UpdateUserPolicyRequest): Promise<void> {
        await this.updateUserPolicyRaw(requestParameters);
    }

}
