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
export enum ChannelMediaType {
    Audio = 'Audio',
    Video = 'Video',
    Photo = 'Photo'
}

export function ChannelMediaTypeFromJSON(json: any): ChannelMediaType {
    return ChannelMediaTypeFromJSONTyped(json, false);
}

export function ChannelMediaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMediaType {
    return json as ChannelMediaType;
}

export function ChannelMediaTypeToJSON(value?: ChannelMediaType | null): any {
    return value as any;
}

