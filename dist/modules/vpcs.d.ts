import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { createVpcRequest, updateVpcRequest } from "../types/vpcs";
export default class Vpc extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    getAll(includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    create(options: createVpcRequest): Promise<any>;
    getById(vpcId: string): Promise<any>;
    delete(vpcId: string): Promise<any>;
    update(vpcId: string, options: updateVpcRequest): Promise<any>;
}
