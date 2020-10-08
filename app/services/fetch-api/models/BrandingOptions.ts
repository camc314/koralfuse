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
 * 
 * @export
 * @interface BrandingOptions
 */
export interface BrandingOptions {
    /**
     * Gets or sets the login disclaimer.
     * @type {string}
     * @memberof BrandingOptions
     */
    loginDisclaimer?: string | null;
    /**
     * Gets or sets the custom CSS.
     * @type {string}
     * @memberof BrandingOptions
     */
    customCss?: string | null;
}

export function BrandingOptionsFromJSON(json: any): BrandingOptions {
    return BrandingOptionsFromJSONTyped(json, false);
}

export function BrandingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrandingOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loginDisclaimer': !exists(json, 'LoginDisclaimer') ? undefined : json['LoginDisclaimer'],
        'customCss': !exists(json, 'CustomCss') ? undefined : json['CustomCss'],
    };
}

export function BrandingOptionsToJSON(value?: BrandingOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'LoginDisclaimer': value.loginDisclaimer,
        'CustomCss': value.customCss,
    };
}


