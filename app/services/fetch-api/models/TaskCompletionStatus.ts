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
 * Enum TaskCompletionStatus.
 * @export
 * @enum {string}
 */
export enum TaskCompletionStatus {
    Completed = 'Completed',
    Failed = 'Failed',
    Cancelled = 'Cancelled',
    Aborted = 'Aborted'
}

export function TaskCompletionStatusFromJSON(json: any): TaskCompletionStatus {
    return TaskCompletionStatusFromJSONTyped(json, false);
}

export function TaskCompletionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCompletionStatus {
    return json as TaskCompletionStatus;
}

export function TaskCompletionStatusToJSON(value?: TaskCompletionStatus | null): any {
    return value as any;
}

