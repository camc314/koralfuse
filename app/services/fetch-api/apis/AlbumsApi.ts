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
} from '../models';

export interface GetSimilarAlbumsRequest {
    albumId: string;
    userId?: string | null;
    excludeArtistIds?: string | null;
    limit?: number | null;
}

export interface GetSimilarArtistsRequest {
    artistId: string;
    userId?: string | null;
    excludeArtistIds?: string | null;
    limit?: number | null;
}

/**
 * 
 */
export class AlbumsApi extends runtime.BaseAPI {

    /**
     * Finds albums similar to a given album.
     */
    async getSimilarAlbumsRaw(requestParameters: GetSimilarAlbumsRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        if (requestParameters.albumId === null || requestParameters.albumId === undefined) {
            throw new runtime.RequiredError('albumId','Required parameter requestParameters.albumId was null or undefined when calling getSimilarAlbums.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.excludeArtistIds !== undefined) {
            queryParameters['excludeArtistIds'] = requestParameters.excludeArtistIds;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Albums/{albumId}/Similar`.replace(`{${"albumId"}}`, encodeURIComponent(String(requestParameters.albumId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Finds albums similar to a given album.
     */
    async getSimilarAlbums(requestParameters: GetSimilarAlbumsRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getSimilarAlbumsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Finds artists similar to a given artist.
     */
    async getSimilarArtistsRaw(requestParameters: GetSimilarArtistsRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        if (requestParameters.artistId === null || requestParameters.artistId === undefined) {
            throw new runtime.RequiredError('artistId','Required parameter requestParameters.artistId was null or undefined when calling getSimilarArtists.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.excludeArtistIds !== undefined) {
            queryParameters['excludeArtistIds'] = requestParameters.excludeArtistIds;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Artists/{artistId}/Similar`.replace(`{${"artistId"}}`, encodeURIComponent(String(requestParameters.artistId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Finds artists similar to a given artist.
     */
    async getSimilarArtists(requestParameters: GetSimilarArtistsRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getSimilarArtistsRaw(requestParameters);
        return await response.value();
    }

}