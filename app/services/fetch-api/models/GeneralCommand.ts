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
    GeneralCommandType,
    GeneralCommandTypeFromJSON,
    GeneralCommandTypeFromJSONTyped,
    GeneralCommandTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface GeneralCommand
 */
export interface GeneralCommand {
    /**
     * 
     * @type {GeneralCommandType}
     * @memberof GeneralCommand
     */
    name?: GeneralCommandType;
    /**
     * 
     * @type {string}
     * @memberof GeneralCommand
     */
    controllingUserId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GeneralCommand
     */
    arguments?: { [key: string]: string; } | null;
}

export function GeneralCommandFromJSON(json: any): GeneralCommand {
    return GeneralCommandFromJSONTyped(json, false);
}

export function GeneralCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : GeneralCommandTypeFromJSON(json['Name']),
        'controllingUserId': !exists(json, 'ControllingUserId') ? undefined : json['ControllingUserId'],
        'arguments': !exists(json, 'Arguments') ? undefined : json['Arguments'],
    };
}

export function GeneralCommandToJSON(value?: GeneralCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': GeneralCommandTypeToJSON(value.name),
        'ControllingUserId': value.controllingUserId,
        'Arguments': value.arguments,
    };
}


