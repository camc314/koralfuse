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
export enum RecommendationType {
    SimilarToRecentlyPlayed = 'SimilarToRecentlyPlayed',
    SimilarToLikedItem = 'SimilarToLikedItem',
    HasDirectorFromRecentlyPlayed = 'HasDirectorFromRecentlyPlayed',
    HasActorFromRecentlyPlayed = 'HasActorFromRecentlyPlayed',
    HasLikedDirector = 'HasLikedDirector',
    HasLikedActor = 'HasLikedActor'
}

export function RecommendationTypeFromJSON(json: any): RecommendationType {
    return RecommendationTypeFromJSONTyped(json, false);
}

export function RecommendationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendationType {
    return json as RecommendationType;
}

export function RecommendationTypeToJSON(value?: RecommendationType | null): any {
    return value as any;
}
