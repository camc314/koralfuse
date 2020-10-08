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
    BaseItemDto,
    BaseItemDtoFromJSON,
    BaseItemDtoFromJSONTyped,
    BaseItemDtoToJSON,
    KeepUntil,
    KeepUntilFromJSON,
    KeepUntilFromJSONTyped,
    KeepUntilToJSON,
    RecordingStatus,
    RecordingStatusFromJSON,
    RecordingStatusFromJSONTyped,
    RecordingStatusToJSON,
} from './';

/**
 * 
 * @export
 * @interface TimerInfoDto
 */
export interface TimerInfoDto {
    /**
     * 
     * @type {RecordingStatus}
     * @memberof TimerInfoDto
     */
    status?: RecordingStatus;
    /**
     * Gets or sets the series timer identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    seriesTimerId?: string | null;
    /**
     * Gets or sets the external series timer identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    externalSeriesTimerId?: string | null;
    /**
     * Gets or sets the run time ticks.
     * @type {number}
     * @memberof TimerInfoDto
     */
    runTimeTicks?: number | null;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof TimerInfoDto
     */
    programInfo?: BaseItemDto;
    /**
     * Id of the recording.
     * @type {string}
     * @memberof TimerInfoDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimerInfoDto
     */
    type?: string | null;
    /**
     * Gets or sets the server identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    serverId?: string | null;
    /**
     * Gets or sets the external identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    externalId?: string | null;
    /**
     * ChannelId of the recording.
     * @type {string}
     * @memberof TimerInfoDto
     */
    channelId?: string;
    /**
     * Gets or sets the external channel identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    externalChannelId?: string | null;
    /**
     * ChannelName of the recording.
     * @type {string}
     * @memberof TimerInfoDto
     */
    channelName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimerInfoDto
     */
    channelPrimaryImageTag?: string | null;
    /**
     * Gets or sets the program identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    programId?: string | null;
    /**
     * Gets or sets the external program identifier.
     * @type {string}
     * @memberof TimerInfoDto
     */
    externalProgramId?: string | null;
    /**
     * Name of the recording.
     * @type {string}
     * @memberof TimerInfoDto
     */
    name?: string | null;
    /**
     * Description of the recording.
     * @type {string}
     * @memberof TimerInfoDto
     */
    overview?: string | null;
    /**
     * The start date of the recording, in UTC.
     * @type {Date}
     * @memberof TimerInfoDto
     */
    startDate?: Date;
    /**
     * The end date of the recording, in UTC.
     * @type {Date}
     * @memberof TimerInfoDto
     */
    endDate?: Date;
    /**
     * Gets or sets the name of the service.
     * @type {string}
     * @memberof TimerInfoDto
     */
    serviceName?: string | null;
    /**
     * Gets or sets the priority.
     * @type {number}
     * @memberof TimerInfoDto
     */
    priority?: number;
    /**
     * Gets or sets the pre padding seconds.
     * @type {number}
     * @memberof TimerInfoDto
     */
    prePaddingSeconds?: number;
    /**
     * Gets or sets the post padding seconds.
     * @type {number}
     * @memberof TimerInfoDto
     */
    postPaddingSeconds?: number;
    /**
     * Gets or sets a value indicating whether this instance is pre padding required.
     * @type {boolean}
     * @memberof TimerInfoDto
     */
    isPrePaddingRequired?: boolean;
    /**
     * If the item does not have any backdrops, this will hold the Id of the Parent that has one.
     * @type {string}
     * @memberof TimerInfoDto
     */
    parentBackdropItemId?: string | null;
    /**
     * Gets or sets the parent backdrop image tags.
     * @type {Array<string>}
     * @memberof TimerInfoDto
     */
    parentBackdropImageTags?: Array<string> | null;
    /**
     * Gets or sets a value indicating whether this instance is post padding required.
     * @type {boolean}
     * @memberof TimerInfoDto
     */
    isPostPaddingRequired?: boolean;
    /**
     * 
     * @type {KeepUntil}
     * @memberof TimerInfoDto
     */
    keepUntil?: KeepUntil;
}

export function TimerInfoDtoFromJSON(json: any): TimerInfoDto {
    return TimerInfoDtoFromJSONTyped(json, false);
}

export function TimerInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerInfoDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'Status') ? undefined : RecordingStatusFromJSON(json['Status']),
        'seriesTimerId': !exists(json, 'SeriesTimerId') ? undefined : json['SeriesTimerId'],
        'externalSeriesTimerId': !exists(json, 'ExternalSeriesTimerId') ? undefined : json['ExternalSeriesTimerId'],
        'runTimeTicks': !exists(json, 'RunTimeTicks') ? undefined : json['RunTimeTicks'],
        'programInfo': !exists(json, 'ProgramInfo') ? undefined : BaseItemDtoFromJSON(json['ProgramInfo']),
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'serverId': !exists(json, 'ServerId') ? undefined : json['ServerId'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'channelId': !exists(json, 'ChannelId') ? undefined : json['ChannelId'],
        'externalChannelId': !exists(json, 'ExternalChannelId') ? undefined : json['ExternalChannelId'],
        'channelName': !exists(json, 'ChannelName') ? undefined : json['ChannelName'],
        'channelPrimaryImageTag': !exists(json, 'ChannelPrimaryImageTag') ? undefined : json['ChannelPrimaryImageTag'],
        'programId': !exists(json, 'ProgramId') ? undefined : json['ProgramId'],
        'externalProgramId': !exists(json, 'ExternalProgramId') ? undefined : json['ExternalProgramId'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'overview': !exists(json, 'Overview') ? undefined : json['Overview'],
        'startDate': !exists(json, 'StartDate') ? undefined : (new Date(json['StartDate'])),
        'endDate': !exists(json, 'EndDate') ? undefined : (new Date(json['EndDate'])),
        'serviceName': !exists(json, 'ServiceName') ? undefined : json['ServiceName'],
        'priority': !exists(json, 'Priority') ? undefined : json['Priority'],
        'prePaddingSeconds': !exists(json, 'PrePaddingSeconds') ? undefined : json['PrePaddingSeconds'],
        'postPaddingSeconds': !exists(json, 'PostPaddingSeconds') ? undefined : json['PostPaddingSeconds'],
        'isPrePaddingRequired': !exists(json, 'IsPrePaddingRequired') ? undefined : json['IsPrePaddingRequired'],
        'parentBackdropItemId': !exists(json, 'ParentBackdropItemId') ? undefined : json['ParentBackdropItemId'],
        'parentBackdropImageTags': !exists(json, 'ParentBackdropImageTags') ? undefined : json['ParentBackdropImageTags'],
        'isPostPaddingRequired': !exists(json, 'IsPostPaddingRequired') ? undefined : json['IsPostPaddingRequired'],
        'keepUntil': !exists(json, 'KeepUntil') ? undefined : KeepUntilFromJSON(json['KeepUntil']),
    };
}

export function TimerInfoDtoToJSON(value?: TimerInfoDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Status': RecordingStatusToJSON(value.status),
        'SeriesTimerId': value.seriesTimerId,
        'ExternalSeriesTimerId': value.externalSeriesTimerId,
        'RunTimeTicks': value.runTimeTicks,
        'ProgramInfo': BaseItemDtoToJSON(value.programInfo),
        'Id': value.id,
        'Type': value.type,
        'ServerId': value.serverId,
        'ExternalId': value.externalId,
        'ChannelId': value.channelId,
        'ExternalChannelId': value.externalChannelId,
        'ChannelName': value.channelName,
        'ChannelPrimaryImageTag': value.channelPrimaryImageTag,
        'ProgramId': value.programId,
        'ExternalProgramId': value.externalProgramId,
        'Name': value.name,
        'Overview': value.overview,
        'StartDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'EndDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'ServiceName': value.serviceName,
        'Priority': value.priority,
        'PrePaddingSeconds': value.prePaddingSeconds,
        'PostPaddingSeconds': value.postPaddingSeconds,
        'IsPrePaddingRequired': value.isPrePaddingRequired,
        'ParentBackdropItemId': value.parentBackdropItemId,
        'ParentBackdropImageTags': value.parentBackdropImageTags,
        'IsPostPaddingRequired': value.isPostPaddingRequired,
        'KeepUntil': KeepUntilToJSON(value.keepUntil),
    };
}

