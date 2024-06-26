import { HttpMethods } from "../common";
import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Monitoring extends BaseModule {
    private basePath: string = 'monitoring';

    private baseOptions: Object = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    public getAppCPUPercentage(app_id: string, app_component: string | undefined, start: number, end: number): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/metrics/apps/cpu_percentage`,
            method: HttpMethods.GET,
            key: 'appcpupercentage',
            qs: {
                app_id,
                start,
                end,
                app_component,
            }
        });

        return this._execute(requestOptions);
    }
}
