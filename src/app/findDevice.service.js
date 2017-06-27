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
var FindDevice = (function () {
    function FindDevice(_http) {
        this._http = _http;
    }
    FindDevice.prototype.getDeviceById = function (id) {
        var url = "https://api.us.apiconnect.ibmcloud.com/everis-iot-dev/sb/v1/devices/findAll";
        var username = '929ec701-5648-40b3-bb87-08fa9088c391';
        var password = 'K1oW8uG1nB6oT6wI1hL1rB7kM7yO7sO7cA5eR2eO7rV8sE6wI0';
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        return this._http.get(url, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    FindDevice.prototype._handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return FindDevice;
}());
FindDevice = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FindDevice);
exports.FindDevice = FindDevice;
//# sourceMappingURL=findDevice.service.js.map