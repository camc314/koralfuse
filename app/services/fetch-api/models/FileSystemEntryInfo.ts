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
    FileSystemEntryType,
    FileSystemEntryTypeFromJSON,
    FileSystemEntryTypeFromJSONTyped,
    FileSystemEntryTypeToJSON,
} from './';

/**
 * Class FileSystemEntryInfo.
 * @export
 * @interface FileSystemEntryInfo
 */
export interface FileSystemEntryInfo {
    /**
     * Gets the name.
     * @type {string}
     * @memberof FileSystemEntryInfo
     */
    readonly name?: string | null;
    /**
     * Gets the path.
     * @type {string}
     * @memberof FileSystemEntryInfo
     */
    readonly path?: string | null;
    /**
     * 
     * @type {FileSystemEntryType}
     * @memberof FileSystemEntryInfo
     */
    type?: FileSystemEntryType;
}

export function FileSystemEntryInfoFromJSON(json: any): FileSystemEntryInfo {
    return FileSystemEntryInfoFromJSONTyped(json, false);
}

export function FileSystemEntryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileSystemEntryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'path': !exists(json, 'Path') ? undefined : json['Path'],
        'type': !exists(json, 'Type') ? undefined : FileSystemEntryTypeFromJSON(json['Type']),
    };
}

export function FileSystemEntryInfoToJSON(value?: FileSystemEntryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Type': FileSystemEntryTypeToJSON(value.type),
    };
}


