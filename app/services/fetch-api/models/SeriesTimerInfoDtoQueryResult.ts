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
    SeriesTimerInfoDto,
    SeriesTimerInfoDtoFromJSON,
    SeriesTimerInfoDtoFromJSONTyped,
    SeriesTimerInfoDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface SeriesTimerInfoDtoQueryResult
 */
export interface SeriesTimerInfoDtoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<SeriesTimerInfoDto>}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    items?: Array<SeriesTimerInfoDto> | null;
    /**
     * The total number of records available.
     * @type {number}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    totalRecordCount?: number;
    /**
     * The index of the first record in Items.
     * @type {number}
     * @memberof SeriesTimerInfoDtoQueryResult
     */
    startIndex?: number;
}

export function SeriesTimerInfoDtoQueryResultFromJSON(json: any): SeriesTimerInfoDtoQueryResult {
    return SeriesTimerInfoDtoQueryResultFromJSONTyped(json, false);
}

export function SeriesTimerInfoDtoQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesTimerInfoDtoQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'Items') ? undefined : (json['Items'] === null ? null : (json['Items'] as Array<any>).map(SeriesTimerInfoDtoFromJSON)),
        'totalRecordCount': !exists(json, 'TotalRecordCount') ? undefined : json['TotalRecordCount'],
        'startIndex': !exists(json, 'StartIndex') ? undefined : json['StartIndex'],
    };
}

export function SeriesTimerInfoDtoQueryResultToJSON(value?: SeriesTimerInfoDtoQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(SeriesTimerInfoDtoToJSON)),
        'TotalRecordCount': value.totalRecordCount,
        'StartIndex': value.startIndex,
    };
}


