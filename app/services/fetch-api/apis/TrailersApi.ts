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


import * as runtime from '../runtime';
import {
    BaseItemDtoQueryResult,
    BaseItemDtoQueryResultFromJSON,
    BaseItemDtoQueryResultToJSON,
} from '../models';

export interface GetTrailersRequest {
    userId?: string | null;
    maxOfficialRating?: string | null;
    hasThemeSong?: boolean | null;
    hasThemeVideo?: boolean | null;
    hasSubtitles?: boolean | null;
    hasSpecialFeature?: boolean | null;
    hasTrailer?: boolean | null;
    adjacentTo?: string | null;
    parentIndexNumber?: number | null;
    hasParentalRating?: boolean | null;
    isHd?: boolean | null;
    is4K?: boolean | null;
    locationTypes?: string | null;
    excludeLocationTypes?: string | null;
    isMissing?: boolean | null;
    isUnaired?: boolean | null;
    minCommunityRating?: number | null;
    minCriticRating?: number | null;
    minPremiereDate?: Date | null;
    minDateLastSaved?: Date | null;
    minDateLastSavedForUser?: Date | null;
    maxPremiereDate?: Date | null;
    hasOverview?: boolean | null;
    hasImdbId?: boolean | null;
    hasTmdbId?: boolean | null;
    hasTvdbId?: boolean | null;
    excludeItemIds?: string | null;
    startIndex?: number | null;
    limit?: number | null;
    recursive?: boolean | null;
    searchTerm?: string | null;
    sortOrder?: string | null;
    parentId?: string | null;
    fields?: string | null;
    excludeItemTypes?: string | null;
    filters?: string | null;
    isFavorite?: boolean | null;
    mediaTypes?: string | null;
    imageTypes?: string | null;
    sortBy?: string | null;
    isPlayed?: boolean | null;
    genres?: string | null;
    officialRatings?: string | null;
    tags?: string | null;
    years?: string | null;
    enableUserData?: boolean | null;
    imageTypeLimit?: number | null;
    enableImageTypes?: string | null;
    person?: string | null;
    personIds?: string | null;
    personTypes?: string | null;
    studios?: string | null;
    artists?: string | null;
    excludeArtistIds?: string | null;
    artistIds?: string | null;
    albumArtistIds?: string | null;
    contributingArtistIds?: string | null;
    albums?: string | null;
    albumIds?: string | null;
    ids?: string | null;
    videoTypes?: string | null;
    minOfficialRating?: string | null;
    isLocked?: boolean | null;
    isPlaceHolder?: boolean | null;
    hasOfficialRating?: boolean | null;
    collapseBoxSetItems?: boolean | null;
    minWidth?: number | null;
    minHeight?: number | null;
    maxWidth?: number | null;
    maxHeight?: number | null;
    is3D?: boolean | null;
    seriesStatus?: string | null;
    nameStartsWithOrGreater?: string | null;
    nameStartsWith?: string | null;
    nameLessThan?: string | null;
    studioIds?: string | null;
    genreIds?: string | null;
    enableTotalRecordCount?: boolean;
    enableImages?: boolean | null;
}

/**
 * 
 */
export class TrailersApi extends runtime.BaseAPI {

    /**
     * Finds movies and trailers similar to a given trailer.
     */
    async getTrailersRaw(requestParameters: GetTrailersRequest): Promise<runtime.ApiResponse<BaseItemDtoQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.maxOfficialRating !== undefined) {
            queryParameters['maxOfficialRating'] = requestParameters.maxOfficialRating;
        }

        if (requestParameters.hasThemeSong !== undefined) {
            queryParameters['hasThemeSong'] = requestParameters.hasThemeSong;
        }

        if (requestParameters.hasThemeVideo !== undefined) {
            queryParameters['hasThemeVideo'] = requestParameters.hasThemeVideo;
        }

        if (requestParameters.hasSubtitles !== undefined) {
            queryParameters['hasSubtitles'] = requestParameters.hasSubtitles;
        }

        if (requestParameters.hasSpecialFeature !== undefined) {
            queryParameters['hasSpecialFeature'] = requestParameters.hasSpecialFeature;
        }

        if (requestParameters.hasTrailer !== undefined) {
            queryParameters['hasTrailer'] = requestParameters.hasTrailer;
        }

        if (requestParameters.adjacentTo !== undefined) {
            queryParameters['adjacentTo'] = requestParameters.adjacentTo;
        }

        if (requestParameters.parentIndexNumber !== undefined) {
            queryParameters['parentIndexNumber'] = requestParameters.parentIndexNumber;
        }

        if (requestParameters.hasParentalRating !== undefined) {
            queryParameters['hasParentalRating'] = requestParameters.hasParentalRating;
        }

        if (requestParameters.isHd !== undefined) {
            queryParameters['isHd'] = requestParameters.isHd;
        }

        if (requestParameters.is4K !== undefined) {
            queryParameters['is4K'] = requestParameters.is4K;
        }

        if (requestParameters.locationTypes !== undefined) {
            queryParameters['locationTypes'] = requestParameters.locationTypes;
        }

        if (requestParameters.excludeLocationTypes !== undefined) {
            queryParameters['excludeLocationTypes'] = requestParameters.excludeLocationTypes;
        }

        if (requestParameters.isMissing !== undefined) {
            queryParameters['isMissing'] = requestParameters.isMissing;
        }

        if (requestParameters.isUnaired !== undefined) {
            queryParameters['isUnaired'] = requestParameters.isUnaired;
        }

        if (requestParameters.minCommunityRating !== undefined) {
            queryParameters['minCommunityRating'] = requestParameters.minCommunityRating;
        }

        if (requestParameters.minCriticRating !== undefined) {
            queryParameters['minCriticRating'] = requestParameters.minCriticRating;
        }

        if (requestParameters.minPremiereDate !== undefined) {
            queryParameters['minPremiereDate'] = (requestParameters.minPremiereDate as any).toISOString();
        }

        if (requestParameters.minDateLastSaved !== undefined) {
            queryParameters['minDateLastSaved'] = (requestParameters.minDateLastSaved as any).toISOString();
        }

        if (requestParameters.minDateLastSavedForUser !== undefined) {
            queryParameters['minDateLastSavedForUser'] = (requestParameters.minDateLastSavedForUser as any).toISOString();
        }

        if (requestParameters.maxPremiereDate !== undefined) {
            queryParameters['maxPremiereDate'] = (requestParameters.maxPremiereDate as any).toISOString();
        }

        if (requestParameters.hasOverview !== undefined) {
            queryParameters['hasOverview'] = requestParameters.hasOverview;
        }

        if (requestParameters.hasImdbId !== undefined) {
            queryParameters['hasImdbId'] = requestParameters.hasImdbId;
        }

        if (requestParameters.hasTmdbId !== undefined) {
            queryParameters['hasTmdbId'] = requestParameters.hasTmdbId;
        }

        if (requestParameters.hasTvdbId !== undefined) {
            queryParameters['hasTvdbId'] = requestParameters.hasTvdbId;
        }

        if (requestParameters.excludeItemIds !== undefined) {
            queryParameters['excludeItemIds'] = requestParameters.excludeItemIds;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.recursive !== undefined) {
            queryParameters['recursive'] = requestParameters.recursive;
        }

        if (requestParameters.searchTerm !== undefined) {
            queryParameters['searchTerm'] = requestParameters.searchTerm;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        if (requestParameters.parentId !== undefined) {
            queryParameters['parentId'] = requestParameters.parentId;
        }

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.excludeItemTypes !== undefined) {
            queryParameters['excludeItemTypes'] = requestParameters.excludeItemTypes;
        }

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.isFavorite !== undefined) {
            queryParameters['isFavorite'] = requestParameters.isFavorite;
        }

        if (requestParameters.mediaTypes !== undefined) {
            queryParameters['mediaTypes'] = requestParameters.mediaTypes;
        }

        if (requestParameters.imageTypes !== undefined) {
            queryParameters['imageTypes'] = requestParameters.imageTypes;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.isPlayed !== undefined) {
            queryParameters['isPlayed'] = requestParameters.isPlayed;
        }

        if (requestParameters.genres !== undefined) {
            queryParameters['genres'] = requestParameters.genres;
        }

        if (requestParameters.officialRatings !== undefined) {
            queryParameters['officialRatings'] = requestParameters.officialRatings;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.years !== undefined) {
            queryParameters['years'] = requestParameters.years;
        }

        if (requestParameters.enableUserData !== undefined) {
            queryParameters['enableUserData'] = requestParameters.enableUserData;
        }

        if (requestParameters.imageTypeLimit !== undefined) {
            queryParameters['imageTypeLimit'] = requestParameters.imageTypeLimit;
        }

        if (requestParameters.enableImageTypes !== undefined) {
            queryParameters['enableImageTypes'] = requestParameters.enableImageTypes;
        }

        if (requestParameters.person !== undefined) {
            queryParameters['person'] = requestParameters.person;
        }

        if (requestParameters.personIds !== undefined) {
            queryParameters['personIds'] = requestParameters.personIds;
        }

        if (requestParameters.personTypes !== undefined) {
            queryParameters['personTypes'] = requestParameters.personTypes;
        }

        if (requestParameters.studios !== undefined) {
            queryParameters['studios'] = requestParameters.studios;
        }

        if (requestParameters.artists !== undefined) {
            queryParameters['artists'] = requestParameters.artists;
        }

        if (requestParameters.excludeArtistIds !== undefined) {
            queryParameters['excludeArtistIds'] = requestParameters.excludeArtistIds;
        }

        if (requestParameters.artistIds !== undefined) {
            queryParameters['artistIds'] = requestParameters.artistIds;
        }

        if (requestParameters.albumArtistIds !== undefined) {
            queryParameters['albumArtistIds'] = requestParameters.albumArtistIds;
        }

        if (requestParameters.contributingArtistIds !== undefined) {
            queryParameters['contributingArtistIds'] = requestParameters.contributingArtistIds;
        }

        if (requestParameters.albums !== undefined) {
            queryParameters['albums'] = requestParameters.albums;
        }

        if (requestParameters.albumIds !== undefined) {
            queryParameters['albumIds'] = requestParameters.albumIds;
        }

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        if (requestParameters.videoTypes !== undefined) {
            queryParameters['videoTypes'] = requestParameters.videoTypes;
        }

        if (requestParameters.minOfficialRating !== undefined) {
            queryParameters['minOfficialRating'] = requestParameters.minOfficialRating;
        }

        if (requestParameters.isLocked !== undefined) {
            queryParameters['isLocked'] = requestParameters.isLocked;
        }

        if (requestParameters.isPlaceHolder !== undefined) {
            queryParameters['isPlaceHolder'] = requestParameters.isPlaceHolder;
        }

        if (requestParameters.hasOfficialRating !== undefined) {
            queryParameters['hasOfficialRating'] = requestParameters.hasOfficialRating;
        }

        if (requestParameters.collapseBoxSetItems !== undefined) {
            queryParameters['collapseBoxSetItems'] = requestParameters.collapseBoxSetItems;
        }

        if (requestParameters.minWidth !== undefined) {
            queryParameters['minWidth'] = requestParameters.minWidth;
        }

        if (requestParameters.minHeight !== undefined) {
            queryParameters['minHeight'] = requestParameters.minHeight;
        }

        if (requestParameters.maxWidth !== undefined) {
            queryParameters['maxWidth'] = requestParameters.maxWidth;
        }

        if (requestParameters.maxHeight !== undefined) {
            queryParameters['maxHeight'] = requestParameters.maxHeight;
        }

        if (requestParameters.is3D !== undefined) {
            queryParameters['is3D'] = requestParameters.is3D;
        }

        if (requestParameters.seriesStatus !== undefined) {
            queryParameters['seriesStatus'] = requestParameters.seriesStatus;
        }

        if (requestParameters.nameStartsWithOrGreater !== undefined) {
            queryParameters['nameStartsWithOrGreater'] = requestParameters.nameStartsWithOrGreater;
        }

        if (requestParameters.nameStartsWith !== undefined) {
            queryParameters['nameStartsWith'] = requestParameters.nameStartsWith;
        }

        if (requestParameters.nameLessThan !== undefined) {
            queryParameters['nameLessThan'] = requestParameters.nameLessThan;
        }

        if (requestParameters.studioIds !== undefined) {
            queryParameters['studioIds'] = requestParameters.studioIds;
        }

        if (requestParameters.genreIds !== undefined) {
            queryParameters['genreIds'] = requestParameters.genreIds;
        }

        if (requestParameters.enableTotalRecordCount !== undefined) {
            queryParameters['enableTotalRecordCount'] = requestParameters.enableTotalRecordCount;
        }

        if (requestParameters.enableImages !== undefined) {
            queryParameters['enableImages'] = requestParameters.enableImages;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Trailers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseItemDtoQueryResultFromJSON(jsonValue));
    }

    /**
     * Finds movies and trailers similar to a given trailer.
     */
    async getTrailers(requestParameters: GetTrailersRequest): Promise<BaseItemDtoQueryResult> {
        const response = await this.getTrailersRaw(requestParameters);
        return await response.value();
    }

}
