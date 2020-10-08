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
 * Enum PlaystateCommand.
 * @export
 * @enum {string}
 */
export enum PlaystateCommand {
    Stop = 'Stop',
    Pause = 'Pause',
    Unpause = 'Unpause',
    NextTrack = 'NextTrack',
    PreviousTrack = 'PreviousTrack',
    Seek = 'Seek',
    Rewind = 'Rewind',
    FastForward = 'FastForward',
    PlayPause = 'PlayPause'
}

export function PlaystateCommandFromJSON(json: any): PlaystateCommand {
    return PlaystateCommandFromJSONTyped(json, false);
}

export function PlaystateCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaystateCommand {
    return json as PlaystateCommand;
}

export function PlaystateCommandToJSON(value?: PlaystateCommand | null): any {
    return value as any;
}
