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
export enum DayOfWeek {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}

export function DayOfWeekFromJSON(json: any): DayOfWeek {
    return DayOfWeekFromJSONTyped(json, false);
}

export function DayOfWeekFromJSONTyped(json: any, ignoreDiscriminator: boolean): DayOfWeek {
    return json as DayOfWeek;
}

export function DayOfWeekToJSON(value?: DayOfWeek | null): any {
    return value as any;
}

