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
 * Media Encoder Path Dto.
 * @export
 * @interface MediaEncoderPathDto
 */
export interface MediaEncoderPathDto {
    /**
     * Gets or sets media encoder path.
     * @type {string}
     * @memberof MediaEncoderPathDto
     */
    path?: string | null;
    /**
     * Gets or sets media encoder path type.
     * @type {string}
     * @memberof MediaEncoderPathDto
     */
    pathType?: string | null;
}

export function MediaEncoderPathDtoFromJSON(json: any): MediaEncoderPathDto {
    return MediaEncoderPathDtoFromJSONTyped(json, false);
}

export function MediaEncoderPathDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaEncoderPathDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'Path') ? undefined : json['Path'],
        'pathType': !exists(json, 'PathType') ? undefined : json['PathType'],
    };
}

export function MediaEncoderPathDtoToJSON(value?: MediaEncoderPathDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Path': value.path,
        'PathType': value.pathType,
    };
}


