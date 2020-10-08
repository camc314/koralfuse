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
    PackageInfo,
    PackageInfoFromJSON,
    PackageInfoToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    RepositoryInfo,
    RepositoryInfoFromJSON,
    RepositoryInfoToJSON,
} from '../models';

export interface CancelPackageInstallationRequest {
    packageId: string;
}

export interface GetPackageInfoRequest {
    name: string;
    assemblyGuid?: string | null;
}

export interface InstallPackageRequest {
    name: string;
    assemblyGuid?: string | null;
    version?: string | null;
}

export interface SetRepositoriesRequest {
    repositoryInfo?: Array<RepositoryInfo> | null;
}

/**
 * 
 */
export class PackageApi extends runtime.BaseAPI {

    /**
     * Cancels a package installation.
     */
    async cancelPackageInstallationRaw(requestParameters: CancelPackageInstallationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.packageId === null || requestParameters.packageId === undefined) {
            throw new runtime.RequiredError('packageId','Required parameter requestParameters.packageId was null or undefined when calling cancelPackageInstallation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Packages/Installing/{packageId}`.replace(`{${"packageId"}}`, encodeURIComponent(String(requestParameters.packageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancels a package installation.
     */
    async cancelPackageInstallation(requestParameters: CancelPackageInstallationRequest): Promise<void> {
        await this.cancelPackageInstallationRaw(requestParameters);
    }

    /**
     * Gets a package by name or assembly GUID.
     */
    async getPackageInfoRaw(requestParameters: GetPackageInfoRequest): Promise<runtime.ApiResponse<PackageInfo>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getPackageInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.assemblyGuid !== undefined) {
            queryParameters['assemblyGuid'] = requestParameters.assemblyGuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Packages/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PackageInfoFromJSON(jsonValue));
    }

    /**
     * Gets a package by name or assembly GUID.
     */
    async getPackageInfo(requestParameters: GetPackageInfoRequest): Promise<PackageInfo> {
        const response = await this.getPackageInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets available packages.
     */
    async getPackagesRaw(): Promise<runtime.ApiResponse<Array<PackageInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Packages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PackageInfoFromJSON));
    }

    /**
     * Gets available packages.
     */
    async getPackages(): Promise<Array<PackageInfo>> {
        const response = await this.getPackagesRaw();
        return await response.value();
    }

    /**
     * Gets all package repositories.
     */
    async getRepositoriesRaw(): Promise<runtime.ApiResponse<Array<RepositoryInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Repositories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RepositoryInfoFromJSON));
    }

    /**
     * Gets all package repositories.
     */
    async getRepositories(): Promise<Array<RepositoryInfo>> {
        const response = await this.getRepositoriesRaw();
        return await response.value();
    }

    /**
     * Installs a package.
     */
    async installPackageRaw(requestParameters: InstallPackageRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling installPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.assemblyGuid !== undefined) {
            queryParameters['assemblyGuid'] = requestParameters.assemblyGuid;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Packages/Installed/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Installs a package.
     */
    async installPackage(requestParameters: InstallPackageRequest): Promise<void> {
        await this.installPackageRaw(requestParameters);
    }

    /**
     * Sets the enabled and existing package repositories.
     */
    async setRepositoriesRaw(requestParameters: SetRepositoriesRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Emby-Authorization"] = this.configuration.apiKey("X-Emby-Authorization"); // CustomAuthentication authentication
        }

        const response = await this.request({
            path: `/Repositories`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.repositoryInfo.map(RepositoryInfoToJSON),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets the enabled and existing package repositories.
     */
    async setRepositories(requestParameters: SetRepositoriesRequest): Promise<void> {
        await this.setRepositoriesRaw(requestParameters);
    }

}
