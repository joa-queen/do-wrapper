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
var Registry = /** @class */ (function (_super) {
    __extends(Registry, _super);
    function Registry(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'registry';
        _this.baseOptions = {
            actionPath: "" + _this.basePath,
        };
        return _this;
    }
    /**
     * Get Registry
     * @returns Promise
     */
    Registry.prototype.getInfo = function () {
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'registry',
        });
        return this._execute(requestOptions);
    };
    /**
     * Get Registry subscription
     * @returns Promise
     */
    Registry.prototype.getSubscription = function () {
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/subscription",
        });
        return this._execute(requestOptions);
    };
    Registry.prototype.getDockerCredentials = function () {
        return this._execute({
            actionPath: this.basePath + "/docker-credentials",
        });
    };
    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    Registry.prototype.create = function (registryOptions) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: registryOptions }));
    };
    /**
     * Create a new Registry
     * @param registryOptions the options for the Registry
     * @returns Promise
     */
    Registry.prototype.updateSubscriptionTier = function (registryOptions) {
        return this._execute(__assign(__assign({}, this.baseOptions), { actionPath: this.basePath + "/subscription", method: common_1.HttpMethods.POST, body: registryOptions }));
    };
    Registry.prototype.validateName = function (name) {
        return this._execute({
            actionPath: this.basePath + "/validate-name",
            method: common_1.HttpMethods.POST,
            body: {
                name: name,
            },
        });
    };
    Registry.prototype.getRepositories = function (registryName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/repositoriesV2",
            key: 'repositories',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    };
    Registry.prototype.listRepositoryManifests = function (registryName, repositoryName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/repositories/" + repositoryName + "/digests",
            key: 'manifests',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    };
    Registry.prototype.deleteRepositoryManifest = function (registryName, repositoryName, digest) {
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/repositories/" + repositoryName + "/digests/" + digest,
            method: common_1.HttpMethods.DELETE,
        });
    };
    Registry.prototype.startGarbageCollection = function (registryName) {
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/garbage-collection",
            method: common_1.HttpMethods.POST,
        });
    };
    Registry.prototype.getActiveGarbageCollection = function (registryName) {
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/garbage-collection",
        });
    };
    Registry.prototype.listGarbageCollections = function (registryName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/garbage-collections",
            key: 'garbage_collections',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
    };
    Registry.prototype.cancelGarbageCollection = function (registryName, garbageCollectionId) {
        return this._execute({
            actionPath: this.basePath + "/" + registryName + "/garbage-collection/" + garbageCollectionId,
            method: common_1.HttpMethods.PUT,
            body: { cancel: true },
        });
    };
    Registry.prototype.listRegistryOptions = function () {
        return this._execute({
            actionPath: this.basePath + "/options",
        });
    };
    return Registry;
}(base_module_1.BaseModule));
exports.default = Registry;
