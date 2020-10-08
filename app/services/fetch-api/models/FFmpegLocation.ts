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
 * Enum describing the location of the FFmpeg tool.
 * @export
 * @enum {string}
 */
export enum FFmpegLocation {
    NotFound = 'NotFound',
    SetByArgument = 'SetByArgument',
    Custom = 'Custom',
    System = 'System'
}

export function FFmpegLocationFromJSON(json: any): FFmpegLocation {
    return FFmpegLocationFromJSONTyped(json, false);
}

export function FFmpegLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FFmpegLocation {
    return json as FFmpegLocation;
}

export function FFmpegLocationToJSON(value?: FFmpegLocation | null): any {
    return value as any;
}

