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
 * This exists simply to identify a set of known commands.
 * @export
 * @enum {string}
 */
export enum GeneralCommandType {
    MoveUp = 'MoveUp',
    MoveDown = 'MoveDown',
    MoveLeft = 'MoveLeft',
    MoveRight = 'MoveRight',
    PageUp = 'PageUp',
    PageDown = 'PageDown',
    PreviousLetter = 'PreviousLetter',
    NextLetter = 'NextLetter',
    ToggleOsd = 'ToggleOsd',
    ToggleContextMenu = 'ToggleContextMenu',
    Select = 'Select',
    Back = 'Back',
    TakeScreenshot = 'TakeScreenshot',
    SendKey = 'SendKey',
    SendString = 'SendString',
    GoHome = 'GoHome',
    GoToSettings = 'GoToSettings',
    VolumeUp = 'VolumeUp',
    VolumeDown = 'VolumeDown',
    Mute = 'Mute',
    Unmute = 'Unmute',
    ToggleMute = 'ToggleMute',
    SetVolume = 'SetVolume',
    SetAudioStreamIndex = 'SetAudioStreamIndex',
    SetSubtitleStreamIndex = 'SetSubtitleStreamIndex',
    ToggleFullscreen = 'ToggleFullscreen',
    DisplayContent = 'DisplayContent',
    GoToSearch = 'GoToSearch',
    DisplayMessage = 'DisplayMessage',
    SetRepeatMode = 'SetRepeatMode',
    ChannelUp = 'ChannelUp',
    ChannelDown = 'ChannelDown',
    Guide = 'Guide',
    ToggleStats = 'ToggleStats',
    PlayMediaSource = 'PlayMediaSource',
    PlayTrailers = 'PlayTrailers',
    SetShuffleQueue = 'SetShuffleQueue',
    PlayState = 'PlayState',
    PlayNext = 'PlayNext',
    ToggleOsdMenu = 'ToggleOsdMenu',
    Play = 'Play'
}

export function GeneralCommandTypeFromJSON(json: any): GeneralCommandType {
    return GeneralCommandTypeFromJSONTyped(json, false);
}

export function GeneralCommandTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralCommandType {
    return json as GeneralCommandType;
}

export function GeneralCommandTypeToJSON(value?: GeneralCommandType | null): any {
    return value as any;
}

