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
    BaseItemDtoQueryResult,
    BaseItemDtoQueryResultFromJSON,
    BaseItemDtoQueryResultToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface GetEpisodesRequest {
    seriesId: string;
    userId?: string | null;
    fields?: string | null;
    season?: number | null;
    seasonId?: string | null;
    isMissing?: boolean | null;
    adjacentTo?: string | null;
    startItemId?: string | null;
    startIndex?: number | null;
    limit?: number | null;
    enableImages?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    enableUserData?: boolean | null;
    sortBy?: string | null;
}

export interface GetNextUpRequest {
    userId?: string | null;
    startIndex?: number | null;
    limit?: number | null;
    fields?: string | null;
    seriesId?: string | null;
    parentId?: string | null;
    enableImges?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    enableUserData?: boolean | null;
    enableTotalRecordCount?: boolean;
}

export interface GetSeasonsRequest {
    seriesId: string;
    userId?: string | null;
    fields?: string | null;
    isSpecialSeason?: boolean | null;
    isMissing?: boolean | null;
    adjacentTo?: string | null;
    enableImages?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    enableUserData?: boolean | null;
}

export interface GetUpcomingEpisodesRequest {
    userId?: string | null;
    startIndex?: number | null;
    limit?: number | null;
    fields?: string | null;
    parentId?: string | null;
    enableImges?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    enableUserData?: boolean | null;
}

/**
 * 
 */
export class TvShowsApi extends runtime.BaseAPI {

    /**
     * Gets episodes for a tv season.
     */
    async getEpisodesRaw(requestParameters: GetEpisodesRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        if (requestParameters.seriesId === null || requestParameters.seriesId === undefined) {
            throw new runtime.RequiredError('seriesId','Required parameter requestParameters.seriesId was null or undefined when calling getEpisodes.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.season !== undefined) {
            queryParameters['season'] = requestParameters.season;
        }

        if (requestParameters.seasonId !== undefined) {
            queryParameters['seasonId'] = requestParameters.seasonId;
        }

        if (requestParameters.isMissing !== undefined) {
            queryParameters['isMissing'] = requestParameters.isMissing;
        }

        if (requestParameters.adjacentTo !== undefined) {
            queryParameters['adjacentTo'] = requestParameters.adjacentTo;
        }

        if (requestParameters.startItemId !== undefined) {
            queryParameters['startItemId'] = requestParameters.startItemId;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.enableImages !== undefined) {
            queryParameters['enableImages'] = requestParameters.enableImages;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Shows/{seriesId}/Episodes`.replace(`{${"seriesId"}}`, encodeURIComponent(String(requestParameters.seriesId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets episodes for a tv season.
     */
    async getEpisodes(requestParameters: GetEpisodesRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getEpisodesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of next up episodes.
     */
    async getNextUpRaw(requestParameters: GetNextUpRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.seriesId !== undefined) {
            queryParameters['seriesId'] = requestParameters.seriesId;
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parentId'] = requestParameters.parentId;
        }

        if (requestParameters.enableImges !== undefined) {
            queryParameters['enableImges'] = requestParameters.enableImges;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        if (requestParameters.enableTotalRecordCount !== undefined) {
            queryParameters['enableTotalRecordCount'] = requestParameters.enableTotalRecordCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Shows/NextUp`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets a list of next up episodes.
     */
    async getNextUp(requestParameters: GetNextUpRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getNextUpRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets seasons for a tv series.
     */
    async getSeasonsRaw(requestParameters: GetSeasonsRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        if (requestParameters.seriesId === null || requestParameters.seriesId === undefined) {
            throw new runtime.RequiredError('seriesId','Required parameter requestParameters.seriesId was null or undefined when calling getSeasons.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.isSpecialSeason !== undefined) {
            queryParameters['isSpecialSeason'] = requestParameters.isSpecialSeason;
        }

        if (requestParameters.isMissing !== undefined) {
            queryParameters['isMissing'] = requestParameters.isMissing;
        }

        if (requestParameters.adjacentTo !== undefined) {
            queryParameters['adjacentTo'] = requestParameters.adjacentTo;
        }

        if (requestParameters.enableImages !== undefined) {
            queryParameters['enableImages'] = requestParameters.enableImages;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Shows/{seriesId}/Seasons`.replace(`{${"seriesId"}}`, encodeURIComponent(String(requestParameters.seriesId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets seasons for a tv series.
     */
    async getSeasons(requestParameters: GetSeasonsRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getSeasonsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of upcoming episodes.
     */
    async getUpcomingEpisodesRaw(requestParameters: GetUpcomingEpisodesRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parentId'] = requestParameters.parentId;
        }

        if (requestParameters.enableImges !== undefined) {
            queryParameters['enableImges'] = requestParameters.enableImges;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Shows/Upcoming`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets a list of upcoming episodes.
     */
    async getUpcomingEpisodes(requestParameters: GetUpcomingEpisodesRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getUpcomingEpisodesRaw(requestParameters);
        return await response.value();
    }

}