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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var common_1 = require("../common");
var Vpc = /** @class */ (function (_super) {
    __extends(Vpc, _super);
    function Vpc(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'vpcs';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    Vpc.prototype.getAll = function (includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'vpcs',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    Vpc.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    Vpc.prototype.getById = function (vpcId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(vpcId),
        });
    };
    Vpc.prototype.delete = function (vpcId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(vpcId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    Vpc.prototype.update = function (vpcId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(vpcId),
            method: common_1.HttpMethods.PUT,
            body: options,
        });
    };
    return Vpc;
}(base_module_1.BaseModule));
exports.default = Vpc;
