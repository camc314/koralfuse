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
    ProfileConditionType,
    ProfileConditionTypeFromJSON,
    ProfileConditionTypeFromJSONTyped,
    ProfileConditionTypeToJSON,
    ProfileConditionValue,
    ProfileConditionValueFromJSON,
    ProfileConditionValueFromJSONTyped,
    ProfileConditionValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProfileCondition
 */
export interface ProfileCondition {
    /**
     * 
     * @type {ProfileConditionType}
     * @memberof ProfileCondition
     */
    condition?: ProfileConditionType;
    /**
     * 
     * @type {ProfileConditionValue}
     * @memberof ProfileCondition
     */
    property?: ProfileConditionValue;
    /**
     * 
     * @type {string}
     * @memberof ProfileCondition
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileCondition
     */
    isRequired?: boolean;
}

export function ProfileConditionFromJSON(json: any): ProfileCondition {
    return ProfileConditionFromJSONTyped(json, false);
}

export function ProfileConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'condition': !exists(json, 'Condition') ? undefined : ProfileConditionTypeFromJSON(json['Condition']),
        'property': !exists(json, 'Property') ? undefined : ProfileConditionValueFromJSON(json['Property']),
        'value': !exists(json, 'Value') ? undefined : json['Value'],
        'isRequired': !exists(json, 'IsRequired') ? undefined : json['IsRequired'],
    };
}

export function ProfileConditionToJSON(value?: ProfileCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Condition': ProfileConditionTypeToJSON(value.condition),
        'Property': ProfileConditionValueToJSON(value.property),
        'Value': value.value,
        'IsRequired': value.isRequired,
    };
}


