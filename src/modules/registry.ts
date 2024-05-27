import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CreateRegistryOptions, UpdateSubscriptionTierOptions } from "../types/registry";
import { HttpMethods } from "../common";

export default class Registry extends BaseModule {
    private basePath: string = 'registry';

    private baseOptions: any = {
        actionPath: `${this.basePath}`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get Registry
     * @returns Promise
     */
    public getInfo(): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'registry',
        });

        return this._execute(requestOptions);
    }

    /**
     * Get Registry subscription
     * @returns Promise
     */
    public getSubscription(): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/subscription`,
        });

        return this._execute(requestOptions);
    }

    public getDockerCredentials(): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/docker-credentials`,
        });
    }

    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    public create(registryOptions: CreateRegistryOptions): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: registryOptions,
        });
    }

    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    public updateSubscriptionTier(registryOptions: UpdateSubscriptionTierOptions): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            actionPath: `${this.basePath}/subscription`,
            method: HttpMethods.POST,
            body: registryOptions,
        });
    }

    public validateName(name: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/validate-name`,
            method: HttpMethods.POST,
            body: {
                name,
            },
        });
    }

    public getRepositories(registryName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        return this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${registryName}/repositoriesV2`,
            key: 'repositories',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    }

    public listRepositoryManifests(registryName: string, repositoryName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        return this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${registryName}/repositories/${repositoryName}/digests`,
            key: 'manifests',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    }

    public deleteRepositoryManifest(registryName: string, repositoryName: string, digest: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${registryName}/repositories/${repositoryName}/digests/${digest}`,
            method: HttpMethods.DELETE,
        });
    }

    public startGarbageCollection(registryName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${registryName}/garbage-collection`,
            method: HttpMethods.POST,
        });
    }

    public getActiveGarbageCollection(registryName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${registryName}/garbage-collection`,
        });
    }

    public listGarbageCollections(registryName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        return this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${registryName}/garbage-collections`,
            key: 'garbage_collections',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    }

    public cancelGarbageCollection(registryName: string, garbageCollectionId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${registryName}/garbage-collection/${garbageCollectionId}`,
            method: HttpMethods.PUT,
            body: { cancel: true },
        });
    }

    public listRegistryOptions(): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/options`,
        });
    }
}
