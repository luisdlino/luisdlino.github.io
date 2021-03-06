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
var GetAdressService = (function () {
    function GetAdressService(_http) {
        this._http = _http;
    }
    GetAdressService.prototype.getAdress = function (latitude, longitude) {
        var lat = latitude;
        var lon = longitude;
        var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&sensor=true";
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    GetAdressService.prototype._handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return GetAdressService;
}());
GetAdressService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GetAdressService);
exports.GetAdressService = GetAdressService;
//# sourceMappingURL=getAdress.service.js.map