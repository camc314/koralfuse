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
    DlnaProfileType,
    DlnaProfileTypeFromJSON,
    DlnaProfileTypeFromJSONTyped,
    DlnaProfileTypeToJSON,
    ProfileCondition,
    ProfileConditionFromJSON,
    ProfileConditionFromJSONTyped,
    ProfileConditionToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResponseProfile
 */
export interface ResponseProfile {
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    audioCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    videoCodec?: string | null;
    /**
     * 
     * @type {DlnaProfileType}
     * @memberof ResponseProfile
     */
    type?: DlnaProfileType;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    orgPn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResponseProfile
     */
    mimeType?: string | null;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof ResponseProfile
     */
    conditions?: Array<ProfileCondition> | null;
}

export function ResponseProfileFromJSON(json: any): ResponseProfile {
    return ResponseProfileFromJSONTyped(json, false);
}

export function ResponseProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container': !exists(json, 'Container') ? undefined : json['Container'],
        'audioCodec': !exists(json, 'AudioCodec') ? undefined : json['AudioCodec'],
        'videoCodec': !exists(json, 'VideoCodec') ? undefined : json['VideoCodec'],
        'type': !exists(json, 'Type') ? undefined : DlnaProfileTypeFromJSON(json['Type']),
        'orgPn': !exists(json, 'OrgPn') ? undefined : json['OrgPn'],
        'mimeType': !exists(json, 'MimeType') ? undefined : json['MimeType'],
        'conditions': !exists(json, 'Conditions') ? undefined : (json['Conditions'] === null ? null : (json['Conditions'] as Array<any>).map(ProfileConditionFromJSON)),
    };
}

export function ResponseProfileToJSON(value?: ResponseProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Container': value.container,
        'AudioCodec': value.audioCodec,
        'VideoCodec': value.videoCodec,
        'Type': DlnaProfileTypeToJSON(value.type),
        'OrgPn': value.orgPn,
        'MimeType': value.mimeType,
        'Conditions': value.conditions === undefined ? undefined : (value.conditions === null ? null : (value.conditions as Array<any>).map(ProfileConditionToJSON)),
    };
}


