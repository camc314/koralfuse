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
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoFromJSONTyped,
    BaseItemDtoToJSON,
} from './';

/**
 * Class ThemeMediaResult.
 * @export
 * @interface ThemeMediaResult
 */
export interface ThemeMediaResult {
    /**
     * Gets or sets the owner id.
     * @type {string}
     * @memberof ThemeMediaResult
     */
    ownerId?: string;
    /**
     * Gets or sets the items.
     * @type {Array<BaseItemDto>}
     * @memberof ThemeMediaResult
     */
    items?: Array<BaseItemDto> | null;
    /**
     * The total number of records available.
     * @type {number}
     * @memberof ThemeMediaResult
     */
    totalRecordCount?: number;
    /**
     * The index of the first record in Items.
     * @type {number}
     * @memberof ThemeMediaResult
     */
    startIndex?: number;
}

export function ThemeMediaResultFromJSON(json: any): ThemeMediaResult {
    return ThemeMediaResultFromJSONTyped(json, false);
}

export function ThemeMediaResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeMediaResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ownerId': !exists(json, 'OwnerId') ? undefined : json['OwnerId'],
        'items': !exists(json, 'Items') ? undefined : (json['Items'] === null ? null : (json['Items'] as Array<any>).map(BaseItemDtoFromJSON)),
        'totalRecordCount': !exists(json, 'TotalRecordCount') ? undefined : json['TotalRecordCount'],
        'startIndex': !exists(json, 'StartIndex') ? undefined : json['StartIndex'],
    };
}

export function ThemeMediaResultToJSON(value?: ThemeMediaResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OwnerId': value.ownerId,
        'Items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(BaseItemDtoToJSON)),
        'TotalRecordCount': value.totalRecordCount,
        'StartIndex': value.startIndex,
    };
}


