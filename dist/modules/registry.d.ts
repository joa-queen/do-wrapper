import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CreateRegistryOptions, UpdateSubscriptionTierOptions } from "../types/registry";
export default class Registry extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get Registry
     * @returns Promise
     */
    getInfo(): Promise<any>;
    /**
     * Get Registry subscription
     * @returns Promise
     */
    getSubscription(): Promise<any>;
    getDockerCredentials(): Promise<any>;
    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    create(registryOptions: CreateRegistryOptions): Promise<any>;
    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    updateSubscriptionTier(registryOptions: UpdateSubscriptionTierOptions): Promise<any>;
    validateName(name: string): Promise<any>;
    getRepositories(registryName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    listRepositoryManifests(registryName: string, repositoryName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    deleteRepositoryManifest(registryName: string, repositoryName: string, digest: string): Promise<any>;
    startGarbageCollection(registryName: string): Promise<any>;
    getActiveGarbageCollection(registryName: string): Promise<any>;
    listGarbageCollections(registryName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    cancelGarbageCollection(registryName: string, garbageCollectionId: string): Promise<any>;
    listRegistryOptions(): Promise<any>;
}
