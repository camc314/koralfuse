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
 * 
 * @export
 * @enum {string}
 */
export enum HeaderMatchType {
    Equals = 'Equals',
    Regex = 'Regex',
    Substring = 'Substring'
}

export function HeaderMatchTypeFromJSON(json: any): HeaderMatchType {
    return HeaderMatchTypeFromJSONTyped(json, false);
}

export function HeaderMatchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderMatchType {
    return json as HeaderMatchType;
}

export function HeaderMatchTypeToJSON(value?: HeaderMatchType | null): any {
    return value as any;
}

