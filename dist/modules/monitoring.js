"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var base_module_1 = require("./base-module");
var Monitoring = /** @class */ (function (_super) {
    __extends(Monitoring, _super);
    function Monitoring(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'monitoring';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    Monitoring.prototype.getAppCPUPercentage = function (app_id, app_component, start, end) {
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/metrics/apps/cpu_percentage",
            method: common_1.HttpMethods.GET,
            key: 'appcpupercentage',
            qs: {
                app_id: app_id,
                start: start,
                end: end,
                app_component: app_component,
            }
        });
        return this._execute(requestOptions);
    };
    return Monitoring;
}(base_module_1.BaseModule));
exports.default = Monitoring;
