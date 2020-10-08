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
    DisplayPreferencesDto,
    DisplayPreferencesDtoFromJSON,
    DisplayPreferencesDtoToJSON,
} from '../models';

export interface GetDisplayPreferencesRequest {
    displayPreferencesId: string;
    userId: string;
    client: string;
}

export interface UpdateDisplayPreferencesRequest {
    displayPreferencesId: string;
    userId: string;
    client: string;
    displayPreferencesDto: DisplayPreferencesDto;
}

/**
 * 
 */
export class DisplayPreferencesApi extends runtime.BaseAPI {

    /**
     * Get Display Preferences.
     */
    async getDisplayPreferencesRaw(requestParameters: GetDisplayPreferencesRequest): Promise<runtime.ApiResponse<DisplayPreferencesDto>> {
        if (requestParameters.displayPreferencesId === null || requestParameters.displayPreferencesId === undefined) {
            throw new runtime.RequiredError('displayPreferencesId','Required parameter requestParameters.displayPreferencesId was null or undefined when calling getDisplayPreferences.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getDisplayPreferences.');
        }

        if (requestParameters.client === null || requestParameters.client === undefined) {
            throw new runtime.RequiredError('client','Required parameter requestParameters.client was null or undefined when calling getDisplayPreferences.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.client !== undefined) {
            queryParameters['client'] = requestParameters.client;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/DisplayPreferences/{displayPreferencesId}`.replace(`{${"displayPreferencesId"}}`, encodeURIComponent(String(requestParameters.displayPreferencesId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DisplayPreferencesDtoFromJSON(jsonValue));
    }

    /**
     * Get Display Preferences.
     */
    async getDisplayPreferences(requestParameters: GetDisplayPreferencesRequest): Promise<DisplayPreferencesDto> {
        const response = await this.getDisplayPreferencesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update Display Preferences.
     */
    async updateDisplayPreferencesRaw(requestParameters: UpdateDisplayPreferencesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.displayPreferencesId === null || requestParameters.displayPreferencesId === undefined) {
            throw new runtime.RequiredError('displayPreferencesId','Required parameter requestParameters.displayPreferencesId was null or undefined when calling updateDisplayPreferences.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateDisplayPreferences.');
        }

        if (requestParameters.client === null || requestParameters.client === undefined) {
            throw new runtime.RequiredError('client','Required parameter requestParameters.client was null or undefined when calling updateDisplayPreferences.');
        }

        if (requestParameters.displayPreferencesDto === null || requestParameters.displayPreferencesDto === undefined) {
            throw new runtime.RequiredError('displayPreferencesDto','Required parameter requestParameters.displayPreferencesDto was null or undefined when calling updateDisplayPreferences.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.client !== undefined) {
            queryParameters['client'] = requestParameters.client;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/DisplayPreferences/{displayPreferencesId}`.replace(`{${"displayPreferencesId"}}`, encodeURIComponent(String(requestParameters.displayPreferencesId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DisplayPreferencesDtoToJSON(requestParameters.displayPreferencesDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update Display Preferences.
     */
    async updateDisplayPreferences(requestParameters: UpdateDisplayPreferencesRequest): Promise<void> {
        await this.updateDisplayPreferencesRaw(requestParameters);
    }

}
