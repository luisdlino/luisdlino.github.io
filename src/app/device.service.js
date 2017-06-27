"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DeviceService = (function () {
    function DeviceService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'JsonStub-User-Key': '88d930ae-dcb8-4a6e-939f-b53d6c6dc9e6',
            'JsonStub-Project-Key': '4eca9611-de90-4967-a475-2f6cdfdd973e',
            'Access-Control-Allow-Origin': '*'
        });
    }
    DeviceService.prototype.getDevice = function () {
        var url = "http://jsonstub.com/teste/3";
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    DeviceService.prototype._handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return DeviceService;
}());
DeviceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map