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
var SideComponent = (function () {
    function SideComponent(deviceService, getAdressService) {
        this.deviceService = deviceService;
        this.getAdressService = getAdressService;
        this.valueStatus = '';
        this.checkedStatus = true;
        this.searchValue = '';
        this.sliderMinValue = '';
        this.sliderMaxValue = '';
        this.sliderMoved = '';
        this.options = [{ desc: 'Temperatura', value: 'temperatura' }, { desc: 'Consumo', value: 'consumo' }, { desc: 'Status', value: 'status' }];
    }
    SideComponent.prototype.getAllDevices = function () {
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
    SideComponent.prototype.ngOnInit = function () {
        this.getAllDevices();
    };
    SideComponent.prototype.checkFilter = function (val) {
        this.valueStatus = val;
        this.checkedStatus = true;
    };
    SideComponent.prototype.Clean = function () {
        this.valueStatus = '';
        this.sliderMinValue = '';
        var sliders = document.getElementsByClassName('subHeaderModal');
        sliders[0].style.display = 'none';
        sliders[1].style.display = 'none';
        var ele = document.getElementsByName('inlineRadioOptions');
        for (var i = 0; i < ele.length; i++)
            ele[i].checked = false;
    };
    SideComponent.prototype.seachKey = function (event) {
        this.searchValue = event;
    };
    SideComponent.prototype.sliderInput = function (val) {
        this.sliderMoved = val[0];
        this.sliderMinValue = val[1];
        this.sliderMaxValue = val[2];
    };
    return SideComponent;
}());
SideComponent = __decorate([
    core_1.Component({
        selector: 'side-app',
        templateUrl: './side.component.html',
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService, getAdress_service_1.GetAdressService])
], SideComponent);
exports.SideComponent = SideComponent;
//# sourceMappingURL=side.component.js.map