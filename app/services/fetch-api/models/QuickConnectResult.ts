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
 * Stores the result of an incoming quick connect request.
 * @export
 * @interface QuickConnectResult
 */
export interface QuickConnectResult {
    /**
     * Gets a value indicating whether this request is authorized.
     * @type {boolean}
     * @memberof QuickConnectResult
     */
    readonly authenticated?: boolean;
    /**
     * Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.
     * @type {string}
     * @memberof QuickConnectResult
     */
    secret?: string | null;
    /**
     * Gets or sets the user facing code used so the user can quickly differentiate this request from others.
     * @type {string}
     * @memberof QuickConnectResult
     */
    code?: string | null;
    /**
     * Gets or sets the private access token.
     * @type {string}
     * @memberof QuickConnectResult
     */
    authentication?: string | null;
    /**
     * Gets or sets an error message.
     * @type {string}
     * @memberof QuickConnectResult
     */
    error?: string | null;
    /**
     * Gets or sets the DateTime that this request was created.
     * @type {Date}
     * @memberof QuickConnectResult
     */
    dateAdded?: Date | null;
}

export function QuickConnectResultFromJSON(json: any): QuickConnectResult {
    return QuickConnectResultFromJSONTyped(json, false);
}

export function QuickConnectResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuickConnectResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authenticated': !exists(json, 'Authenticated') ? undefined : json['Authenticated'],
        'secret': !exists(json, 'Secret') ? undefined : json['Secret'],
        'code': !exists(json, 'Code') ? undefined : json['Code'],
        'authentication': !exists(json, 'Authentication') ? undefined : json['Authentication'],
        'error': !exists(json, 'Error') ? undefined : json['Error'],
        'dateAdded': !exists(json, 'DateAdded') ? undefined : (json['DateAdded'] === null ? null : new Date(json['DateAdded'])),
    };
}

export function QuickConnectResultToJSON(value?: QuickConnectResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Secret': value.secret,
        'Code': value.code,
        'Authentication': value.authentication,
        'Error': value.error,
        'DateAdded': value.dateAdded === undefined ? undefined : (value.dateAdded === null ? null : value.dateAdded.toISOString()),
    };
}

