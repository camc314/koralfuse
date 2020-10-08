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
import {
    ImageType,
    ImageTypeFromJSON,
    ImageTypeFromJSONTyped,
    ImageTypeToJSON,
} from './';

/**
 * Class ImageProviderInfo.
 * @export
 * @interface ImageProviderInfo
 */
export interface ImageProviderInfo {
    /**
     * Gets the name.
     * @type {string}
     * @memberof ImageProviderInfo
     */
    readonly name?: string | null;
    /**
     * Gets the supported image types.
     * @type {Array<ImageType>}
     * @memberof ImageProviderInfo
     */
    readonly supportedImages?: Array<ImageType> | null;
}

export function ImageProviderInfoFromJSON(json: any): ImageProviderInfo {
    return ImageProviderInfoFromJSONTyped(json, false);
}

export function ImageProviderInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageProviderInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'supportedImages': !exists(json, 'SupportedImages') ? undefined : (json['SupportedImages'] === null ? null : (json['SupportedImages'] as Array<any>).map(ImageTypeFromJSON)),
    };
}

export function ImageProviderInfoToJSON(value?: ImageProviderInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


