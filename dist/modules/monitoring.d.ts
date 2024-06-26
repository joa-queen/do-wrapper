import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Monitoring extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    getAppCPUPercentage(app_id: string, app_component: string | undefined, start: number, end: number): Promise<any>;
}
