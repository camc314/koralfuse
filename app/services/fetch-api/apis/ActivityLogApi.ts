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
    ActivityLogEntryQueryResult,
    ActivityLogEntryQueryResultFromJSON,
    ActivityLogEntryQueryResultToJSON,
} from '../models';

export interface GetLogEntriesRequest {
    startIndex?: number | null;
    limit?: number | null;
    minDate?: Date | null;
    hasUserId?: boolean | null;
}

/**
 * 
 */
export class ActivityLogApi extends runtime.BaseAPI {

    /**
     * Gets activity log entries.
     */
    async getLogEntriesRaw(requestParameters: GetLogEntriesRequest): Promise<runtime.ApiResponse<ActivityLogEntryQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.minDate !== undefined) {
            queryParameters['minDate'] = (requestParameters.minDate as any).toISOString();
        }

        if (requestParameters.hasUserId !== undefined) {
            queryParameters['hasUserId'] = requestParameters.hasUserId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/System/ActivityLog/Entries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivityLogEntryQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets activity log entries.
     */
    async getLogEntries(requestParameters: GetLogEntriesRequest): Promise<ActivityLogEntryQueryResult> {
        const response = await this.getLogEntriesRaw(requestParameters);
        return await response.value();
    }

}
