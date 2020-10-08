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
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoToJSON,
    BaseItemDtoQueryResult,
    BaseItemDtoQueryResultFromJSON,
    BaseItemDtoQueryResultToJSON,
} from '../models';

export interface GetMusicGenreRequest {
    genreName: string;
    userId?: string | null;
}

export interface GetMusicGenresRequest {
    minCommunityRating?: number | null;
    startIndex?: number | null;
    limit?: number | null;
    searchTerm?: string | null;
    parentId?: string | null;
    fields?: string | null;
    excludeItemTypes?: string | null;
    includeItemTypes?: string | null;
    filters?: string | null;
    isFavorite?: boolean | null;
    mediaTypes?: string | null;
    genres?: string | null;
    genreIds?: string | null;
    officialRatings?: string | null;
    tags?: string | null;
    years?: string | null;
    enableUserData?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    person?: string | null;
    personIds?: string | null;
    personTypes?: string | null;
    studios?: string | null;
    studioIds?: string | null;
    userId?: string | null;
    nameStartsWithOrGreater?: string | null;
    nameStartsWith?: string | null;
    nameLessThan?: string | null;
    enableImages?: boolean | null;
    enableTotalRecordCount?: boolean;
}

/**
 * 
 */
export class MusicGenresApi extends runtime.BaseAPI {

    /**
     * Gets a music genre, by name.
     */
    async getMusicGenreRaw(requestParameters: GetMusicGenreRequest): Promise<runtime.ApiResponse<BaseItemDto>> {
        if (requestParameters.genreName === null || requestParameters.genreName === undefined) {
            throw new runtime.RequiredError('genreName','Required parameter requestParameters.genreName was null or undefined when calling getMusicGenre.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/MusicGenres/{genreName}`.replace(`{${"genreName"}}`, encodeURIComponent(String(requestParameters.genreName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoFromJSON(jsonValue));
    }

    /**
     * Gets a music genre, by name.
     */
    async getMusicGenre(requestParameters: GetMusicGenreRequest): Promise<BaseItemDto> {
        const response = await this.getMusicGenreRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets all music genres from a given item, folder, or the entire library.
     */
    async getMusicGenresRaw(requestParameters: GetMusicGenresRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.minCommunityRating !== undefined) {
            queryParameters['minCommunityRating'] = requestParameters.minCommunityRating;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.searchTerm !== undefined) {
            queryParameters['searchTerm'] = requestParameters.searchTerm;
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parentId'] = requestParameters.parentId;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.excludeItemTypes !== undefined) {
            queryParameters['excludeItemTypes'] = requestParameters.excludeItemTypes;
        }

        if (requestParameters.includeItemTypes !== undefined) {
            queryParameters['includeItemTypes'] = requestParameters.includeItemTypes;
        }

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.isFavorite !== undefined) {
            queryParameters['isFavorite'] = requestParameters.isFavorite;
        }

        if (requestParameters.mediaTypes !== undefined) {
            queryParameters['mediaTypes'] = requestParameters.mediaTypes;
        }

        if (requestParameters.genres !== undefined) {
            queryParameters['genres'] = requestParameters.genres;
        }

        if (requestParameters.genreIds !== undefined) {
            queryParameters['genreIds'] = requestParameters.genreIds;
        }

        if (requestParameters.officialRatings !== undefined) {
            queryParameters['officialRatings'] = requestParameters.officialRatings;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.years !== undefined) {
            queryParameters['years'] = requestParameters.years;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.person !== undefined) {
            queryParameters['person'] = requestParameters.person;
        }

        if (requestParameters.personIds !== undefined) {
            queryParameters['personIds'] = requestParameters.personIds;
        }

        if (requestParameters.personTypes !== undefined) {
            queryParameters['personTypes'] = requestParameters.personTypes;
        }

        if (requestParameters.studios !== undefined) {
            queryParameters['studios'] = requestParameters.studios;
        }

        if (requestParameters.studioIds !== undefined) {
            queryParameters['studioIds'] = requestParameters.studioIds;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.nameStartsWithOrGreater !== undefined) {
            queryParameters['nameStartsWithOrGreater'] = requestParameters.nameStartsWithOrGreater;
        }

        if (requestParameters.nameStartsWith !== undefined) {
            queryParameters['nameStartsWith'] = requestParameters.nameStartsWith;
        }

        if (requestParameters.nameLessThan !== undefined) {
            queryParameters['nameLessThan'] = requestParameters.nameLessThan;
        }

        if (requestParameters.enableImages !== undefined) {
            queryParameters['enableImages'] = requestParameters.enableImages;
        }

        if (requestParameters.enableTotalRecordCount !== undefined) {
            queryParameters['enableTotalRecordCount'] = requestParameters.enableTotalRecordCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/MusicGenres`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets all music genres from a given item, folder, or the entire library.
     */
    async getMusicGenres(requestParameters: GetMusicGenresRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getMusicGenresRaw(requestParameters);
        return await response.value();
    }

}
