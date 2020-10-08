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

import { exists, mapValues } from '../runtime';
/**
 * Create new playlist dto.
 * @export
 * @interface CreatePlaylistDto
 */
export interface CreatePlaylistDto {
    /**
     * Gets or sets the name of the new playlist.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    name?: string | null;
    /**
     * Gets or sets item ids to add to the playlist.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    ids?: string | null;
    /**
     * Gets or sets the user id.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    userId?: string;
    /**
     * Gets or sets the media type.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    mediaType?: string | null;
}

export function CreatePlaylistDtoFromJSON(json: any): CreatePlaylistDto {
    return CreatePlaylistDtoFromJSONTyped(json, false);
}

export function CreatePlaylistDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlaylistDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'ids': !exists(json, 'Ids') ? undefined : json['Ids'],
        'userId': !exists(json, 'UserId') ? undefined : json['UserId'],
        'mediaType': !exists(json, 'MediaType') ? undefined : json['MediaType'],
    };
}

export function CreatePlaylistDtoToJSON(value?: CreatePlaylistDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Ids': value.ids,
        'UserId': value.userId,
        'MediaType': value.mediaType,
    };
}


