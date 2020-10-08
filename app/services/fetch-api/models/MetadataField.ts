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

/**
 * Enum MetadataFields.
 * @export
 * @enum {string}
 */
export enum MetadataField {
    Cast = 'Cast',
    Genres = 'Genres',
    ProductionLocations = 'ProductionLocations',
    Studios = 'Studios',
    Tags = 'Tags',
    Name = 'Name',
    Overview = 'Overview',
    Runtime = 'Runtime',
    OfficialRating = 'OfficialRating'
}

export function MetadataFieldFromJSON(json: any): MetadataField {
    return MetadataFieldFromJSONTyped(json, false);
}

export function MetadataFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataField {
    return json as MetadataField;
}

export function MetadataFieldToJSON(value?: MetadataField | null): any {
    return value as any;
}
