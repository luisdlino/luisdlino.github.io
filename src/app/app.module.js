"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_2 = require("angular2-google-maps/core");
var ng2_nouislider_1 = require("ng2-nouislider");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var side_component_1 = require("./side.component");
var filters_component_1 = require("./filters.component");
var map_component_1 = require("./map.component");
var device_service_1 = require("./device.service");
var findDevice_service_1 = require("./findDevice.service");
var getAdress_service_1 = require("./getAdress.service");
var sort_pipe_1 = require("./sort.pipe");
var filterCheck_pipe_1 = require("./filterCheck.pipe");
var searchFilter_pipe_1 = require("./searchFilter.pipe");
var sliderFilter_pipe_1 = require("./sliderFilter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_nouislider_1.NouisliderModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAsyWbDcxegz5_AXHukaTSIdAc2b4eWsww'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            map_component_1.MapComponent,
            side_component_1.SideComponent,
            filters_component_1.FiltersComponent,
            sort_pipe_1.Sort,
            filterCheck_pipe_1.FilterCheck,
            searchFilter_pipe_1.SearchFilter,
            sliderFilter_pipe_1.SliderFilter
        ],
        providers: [device_service_1.DeviceService, getAdress_service_1.GetAdressService, findDevice_service_1.FindDevice],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map