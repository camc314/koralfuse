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
/**
 * Get programs dto.
 * @export
 * @interface GetProgramsDto
 */
export interface GetProgramsDto {
    /**
     * Gets or sets the channels to return guide information for.
     * @type {string}
     * @memberof GetProgramsDto
     */
    channelIds?: string | null;
    /**
     * Gets or sets optional. Filter by user id.
     * @type {string}
     * @memberof GetProgramsDto
     */
    userId?: string;
    /**
     * Gets or sets the minimum premiere start date.
     * Optional.
     * @type {Date}
     * @memberof GetProgramsDto
     */
    minStartDate?: Date | null;
    /**
     * Gets or sets filter by programs that have completed airing, or not.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    hasAired?: boolean | null;
    /**
     * Gets or sets filter by programs that are currently airing, or not.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isAiring?: boolean | null;
    /**
     * Gets or sets the maximum premiere start date.
     * Optional.
     * @type {Date}
     * @memberof GetProgramsDto
     */
    maxStartDate?: Date | null;
    /**
     * Gets or sets the minimum premiere end date.
     * Optional.
     * @type {Date}
     * @memberof GetProgramsDto
     */
    minEndDate?: Date | null;
    /**
     * Gets or sets the maximum premiere end date.
     * Optional.
     * @type {Date}
     * @memberof GetProgramsDto
     */
    maxEndDate?: Date | null;
    /**
     * Gets or sets filter for movies.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isMovie?: boolean | null;
    /**
     * Gets or sets filter for series.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isSeries?: boolean | null;
    /**
     * Gets or sets filter for news.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isNews?: boolean | null;
    /**
     * Gets or sets filter for kids.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isKids?: boolean | null;
    /**
     * Gets or sets filter for sports.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    isSports?: boolean | null;
    /**
     * Gets or sets the record index to start at. All items with a lower index will be dropped from the results.
     * Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    startIndex?: number | null;
    /**
     * Gets or sets the maximum number of records to return.
     * Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    limit?: number | null;
    /**
     * Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.
     * Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    sortBy?: string | null;
    /**
     * Gets or sets sort Order - Ascending,Descending.
     * @type {string}
     * @memberof GetProgramsDto
     */
    sortOrder?: string | null;
    /**
     * Gets or sets the genres to return guide information for.
     * @type {string}
     * @memberof GetProgramsDto
     */
    genres?: string | null;
    /**
     * Gets or sets the genre ids to return guide information for.
     * @type {string}
     * @memberof GetProgramsDto
     */
    genreIds?: string | null;
    /**
     * Gets or sets include image information in output.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    enableImages?: boolean | null;
    /**
     * Gets or sets a value indicating whether retrieve total record count.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    enableTotalRecordCount?: boolean;
    /**
     * Gets or sets the max number of images to return, per image type.
     * Optional.
     * @type {number}
     * @memberof GetProgramsDto
     */
    imageTypeLimit?: number | null;
    /**
     * Gets or sets the image types to include in the output.
     * Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    enableImageTypes?: string | null;
    /**
     * Gets or sets include user data.
     * Optional.
     * @type {boolean}
     * @memberof GetProgramsDto
     */
    enableUserData?: boolean | null;
    /**
     * Gets or sets filter by series timer id.
     * Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    seriesTimerId?: string | null;
    /**
     * Gets or sets filter by library series id.
     * Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    librarySeriesId?: string;
    /**
     * Gets or sets specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
     * Optional.
     * @type {string}
     * @memberof GetProgramsDto
     */
    fields?: string | null;
}

export function GetProgramsDtoFromJSON(json: any): GetProgramsDto {
    return GetProgramsDtoFromJSONTyped(json, false);
}

export function GetProgramsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProgramsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelIds': !exists(json, 'ChannelIds') ? undefined : json['ChannelIds'],
        'userId': !exists(json, 'UserId') ? undefined : json['UserId'],
        'minStartDate': !exists(json, 'MinStartDate') ? undefined : (json['MinStartDate'] === null ? null : new Date(json['MinStartDate'])),
        'hasAired': !exists(json, 'HasAired') ? undefined : json['HasAired'],
        'isAiring': !exists(json, 'IsAiring') ? undefined : json['IsAiring'],
        'maxStartDate': !exists(json, 'MaxStartDate') ? undefined : (json['MaxStartDate'] === null ? null : new Date(json['MaxStartDate'])),
        'minEndDate': !exists(json, 'MinEndDate') ? undefined : (json['MinEndDate'] === null ? null : new Date(json['MinEndDate'])),
        'maxEndDate': !exists(json, 'MaxEndDate') ? undefined : (json['MaxEndDate'] === null ? null : new Date(json['MaxEndDate'])),
        'isMovie': !exists(json, 'IsMovie') ? undefined : json['IsMovie'],
        'isSeries': !exists(json, 'IsSeries') ? undefined : json['IsSeries'],
        'isNews': !exists(json, 'IsNews') ? undefined : json['IsNews'],
        'isKids': !exists(json, 'IsKids') ? undefined : json['IsKids'],
        'isSports': !exists(json, 'IsSports') ? undefined : json['IsSports'],
        'startIndex': !exists(json, 'StartIndex') ? undefined : json['StartIndex'],
        'limit': !exists(json, 'Limit') ? undefined : json['Limit'],
        'sortBy': !exists(json, 'SortBy') ? undefined : json['SortBy'],
        'sortOrder': !exists(json, 'SortOrder') ? undefined : json['SortOrder'],
        'genres': !exists(json, 'Genres') ? undefined : json['Genres'],
        'genreIds': !exists(json, 'GenreIds') ? undefined : json['GenreIds'],
        'enableImages': !exists(json, 'EnableImages') ? undefined : json['EnableImages'],
        'enableTotalRecordCount': !exists(json, 'EnableTotalRecordCount') ? undefined : json['EnableTotalRecordCount'],
        'imageTypeLimit': !exists(json, 'ImageTypeLimit') ? undefined : json['ImageTypeLimit'],
        'enableImageTypes': !exists(json, 'EnableImageTypes') ? undefined : json['EnableImageTypes'],
        'enableUserData': !exists(json, 'EnableUserData') ? undefined : json['EnableUserData'],
        'seriesTimerId': !exists(json, 'SeriesTimerId') ? undefined : json['SeriesTimerId'],
        'librarySeriesId': !exists(json, 'LibrarySeriesId') ? undefined : json['LibrarySeriesId'],
        'fields': !exists(json, 'Fields') ? undefined : json['Fields'],
    };
}

export function GetProgramsDtoToJSON(value?: GetProgramsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ChannelIds': value.channelIds,
        'UserId': value.userId,
        'MinStartDate': value.minStartDate === undefined ? undefined : (value.minStartDate === null ? null : value.minStartDate.toISOString()),
        'HasAired': value.hasAired,
        'IsAiring': value.isAiring,
        'MaxStartDate': value.maxStartDate === undefined ? undefined : (value.maxStartDate === null ? null : value.maxStartDate.toISOString()),
        'MinEndDate': value.minEndDate === undefined ? undefined : (value.minEndDate === null ? null : value.minEndDate.toISOString()),
        'MaxEndDate': value.maxEndDate === undefined ? undefined : (value.maxEndDate === null ? null : value.maxEndDate.toISOString()),
        'IsMovie': value.isMovie,
        'IsSeries': value.isSeries,
        'IsNews': value.isNews,
        'IsKids': value.isKids,
        'IsSports': value.isSports,
        'StartIndex': value.startIndex,
        'Limit': value.limit,
        'SortBy': value.sortBy,
        'SortOrder': value.sortOrder,
        'Genres': value.genres,
        'GenreIds': value.genreIds,
        'EnableImages': value.enableImages,
        'EnableTotalRecordCount': value.enableTotalRecordCount,
        'ImageTypeLimit': value.imageTypeLimit,
        'EnableImageTypes': value.enableImageTypes,
        'EnableUserData': value.enableUserData,
        'SeriesTimerId': value.seriesTimerId,
        'LibrarySeriesId': value.librarySeriesId,
        'Fields': value.fields,
    };
}


