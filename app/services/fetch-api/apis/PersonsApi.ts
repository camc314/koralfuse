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
    ImageType,
    ImageTypeFromJSON,
    ImageTypeToJSON,
    ItemFields,
    ItemFieldsFromJSON,
    ItemFieldsToJSON,
    ItemFilter,
    ItemFilterFromJSON,
    ItemFilterToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface GetPersonRequest {
    name: string;
    userId?: string | null;
}

export interface GetPersonsRequest {
    limit?: number | null;
    searchTerm?: string | null;
    fields?: Array<ItemFields> | null;
    filters?: Array<ItemFilter> | null;
    isFavorite?: boolean | null;
    enableUserData?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: Array<ImageType> | null;
    excludePersonTypes?: string | null;
    personTypes?: string | null;
    appearsInItemId?: string | null;
    userId?: string | null;
    enableImages?: boolean | null;
}

/**
 * 
 */
export class PersonsApi extends runtime.BaseAPI {

    /**
     * Get person by name.
     */
    async getPersonRaw(requestParameters: GetPersonRequest): Promise<runtime.ApiResponse<BaseItemDto>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getPerson.');
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
            path: `/Persons/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoFromJSON(jsonValue));
    }

    /**
     * Get person by name.
     */
    async getPerson(requestParameters: GetPersonRequest): Promise<BaseItemDto> {
        const response = await this.getPersonRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets all persons.
     */
    async getPersonsRaw(requestParameters: GetPersonsRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.searchTerm !== undefined) {
            queryParameters['searchTerm'] = requestParameters.searchTerm;
        }

        if (requestParameters.fields) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.filters) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.isFavorite !== undefined) {
            queryParameters['isFavorite'] = requestParameters.isFavorite;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.excludePersonTypes !== undefined) {
            queryParameters['excludePersonTypes'] = requestParameters.excludePersonTypes;
        }

        if (requestParameters.personTypes !== undefined) {
            queryParameters['personTypes'] = requestParameters.personTypes;
        }

        if (requestParameters.appearsInItemId !== undefined) {
            queryParameters['appearsInItemId'] = requestParameters.appearsInItemId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.enableImages !== undefined) {
            queryParameters['enableImages'] = requestParameters.enableImages;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Persons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Gets all persons.
     */
    async getPersons(requestParameters: GetPersonsRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getPersonsRaw(requestParameters);
        return await response.value();
    }

}
