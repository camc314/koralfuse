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
    DeviceProfile,
    DeviceProfileFromJSON,
    DeviceProfileFromJSONTyped,
    DeviceProfileToJSON,
    MediaProtocol,
    MediaProtocolFromJSON,
    MediaProtocolFromJSONTyped,
    MediaProtocolToJSON,
} from './';

/**
 * Open live stream dto.
 * @export
 * @interface OpenLiveStreamDto
 */
export interface OpenLiveStreamDto {
    /**
     * 
     * @type {DeviceProfile}
     * @memberof OpenLiveStreamDto
     */
    deviceProfile?: DeviceProfile;
    /**
     * Gets or sets the device play protocols.
     * @type {Array<MediaProtocol>}
     * @memberof OpenLiveStreamDto
     */
    directPlayProtocols?: Array<MediaProtocol> | null;
}

export function OpenLiveStreamDtoFromJSON(json: any): OpenLiveStreamDto {
    return OpenLiveStreamDtoFromJSONTyped(json, false);
}

export function OpenLiveStreamDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenLiveStreamDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceProfile': !exists(json, 'DeviceProfile') ? undefined : DeviceProfileFromJSON(json['DeviceProfile']),
        'directPlayProtocols': !exists(json, 'DirectPlayProtocols') ? undefined : (json['DirectPlayProtocols'] === null ? null : (json['DirectPlayProtocols'] as Array<any>).map(MediaProtocolFromJSON)),
    };
}

export function OpenLiveStreamDtoToJSON(value?: OpenLiveStreamDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DeviceProfile': DeviceProfileToJSON(value.deviceProfile),
        'DirectPlayProtocols': value.directPlayProtocols === undefined ? undefined : (value.directPlayProtocols === null ? null : (value.directPlayProtocols as Array<any>).map(MediaProtocolToJSON)),
    };
}


