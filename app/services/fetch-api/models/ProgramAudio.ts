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
export enum ProgramAudio {
    Mono = 'Mono',
    Stereo = 'Stereo',
    Dolby = 'Dolby',
    DolbyDigital = 'DolbyDigital',
    Thx = 'Thx',
    Atmos = 'Atmos'
}

export function ProgramAudioFromJSON(json: any): ProgramAudio {
    return ProgramAudioFromJSONTyped(json, false);
}

export function ProgramAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgramAudio {
    return json as ProgramAudio;
}

export function ProgramAudioToJSON(value?: ProgramAudio | null): any {
    return value as any;
}

