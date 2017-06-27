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
var device_service_1 = require("./device.service");
var getAdress_service_1 = require("./getAdress.service");
var MapComponent = (function () {
    function MapComponent(deviceService, getAdressService) {
        this.deviceService = deviceService;
        this.getAdressService = getAdressService;
        this.lat = -23.623407;
        this.lng = -46.698821;
        this.zoom = 14;
    }
    MapComponent.prototype.getDevice = function () {
        var _this = this;
        this.deviceService.getDevice().then(function (value) {
            //SUCCESS
            _this.devices = value.devices;
            _this.devices.forEach(function (item, index) {
                var lat = item.lat.toString();
                var lon = item.lon.toString();
                _this.getAdressService.getAdress(lat, lon).then(function (value) {
                    //Success
                    item.endereco = value.results[0].formatted_address;
                }, function (error) {
                    //FAILURE
                    console.log(error);
                });
            });
        }, function (error) {
            //FAILURE
            console.log(error);
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        this.getDevice();
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'map-app',
        template: "\n    <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n      <sebm-google-map-marker *ngFor=\"let device of devices\"[latitude]=\"device.lat\" [longitude]=\"device.lon\" [openInfoWindow]=\"true\">\n      \n\n\t\t<sebm-google-map-info-window [maxWidth]=\"200\">\n          <strong>Geladeira {{device.uid}}</strong>\n          <p>{{device.endereco}}</p>\n          <br>\n          <strong>\n\t          <p>Temperatura: {{ device.temperatura }}</p>\n\t          <p>Abertura: {{ device.abertura }}</p>\n\t          <p>Status: {{ device.status}}</p>\n\n          </strong>\n        </sebm-google-map-info-window>\n\n\n      </sebm-google-map-marker>\n    </sebm-google-map>\n     \n  "
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService, getAdress_service_1.GetAdressService])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map