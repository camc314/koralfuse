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
 * 
 * @export
 * @interface BookInfo
 */
export interface BookInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof BookInfo
     */
    name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof BookInfo
     */
    path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof BookInfo
     */
    metadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof BookInfo
     */
    metadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof BookInfo
     */
    providerIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof BookInfo
     */
    year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BookInfo
     */
    indexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BookInfo
     */
    parentIndexNumber?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof BookInfo
     */
    premiereDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof BookInfo
     */
    isAutomated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BookInfo
     */
    seriesName?: string | null;
}

export function BookInfoFromJSON(json: any): BookInfo {
    return BookInfoFromJSONTyped(json, false);
}

export function BookInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'path': !exists(json, 'Path') ? undefined : json['Path'],
        'metadataLanguage': !exists(json, 'MetadataLanguage') ? undefined : json['MetadataLanguage'],
        'metadataCountryCode': !exists(json, 'MetadataCountryCode') ? undefined : json['MetadataCountryCode'],
        'providerIds': !exists(json, 'ProviderIds') ? undefined : json['ProviderIds'],
        'year': !exists(json, 'Year') ? undefined : json['Year'],
        'indexNumber': !exists(json, 'IndexNumber') ? undefined : json['IndexNumber'],
        'parentIndexNumber': !exists(json, 'ParentIndexNumber') ? undefined : json['ParentIndexNumber'],
        'premiereDate': !exists(json, 'PremiereDate') ? undefined : (json['PremiereDate'] === null ? null : new Date(json['PremiereDate'])),
        'isAutomated': !exists(json, 'IsAutomated') ? undefined : json['IsAutomated'],
        'seriesName': !exists(json, 'SeriesName') ? undefined : json['SeriesName'],
    };
}

export function BookInfoToJSON(value?: BookInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Path': value.path,
        'MetadataLanguage': value.metadataLanguage,
        'MetadataCountryCode': value.metadataCountryCode,
        'ProviderIds': value.providerIds,
        'Year': value.year,
        'IndexNumber': value.indexNumber,
        'ParentIndexNumber': value.parentIndexNumber,
        'PremiereDate': value.premiereDate === undefined ? undefined : (value.premiereDate === null ? null : value.premiereDate.toISOString()),
        'IsAutomated': value.isAutomated,
        'SeriesName': value.seriesName,
    };
}


