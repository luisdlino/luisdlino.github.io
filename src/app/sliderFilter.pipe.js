"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SliderFilter = (function () {
    function SliderFilter() {
    }
    SliderFilter.prototype.transform = function (array, arg1, arg2, type) {
        if (arg1 === '') {
            return array;
        }
        if (type === 'temperatura') {
            return array.filter(function (array) {
                if (array.temperatura < arg1 || array.temperatura > arg2) {
                    return false;
                }
                return array;
            });
        }
        else if (type === 'abertura') {
            return array.filter(function (array) {
                if (array.abertura < arg1 || array.abertura > arg2) {
                    return false;
                }
                return array;
            });
        }
    };
    return SliderFilter;
}());
SliderFilter = __decorate([
    core_1.Pipe({
        name: 'sliderFilter',
    })
], SliderFilter);
exports.SliderFilter = SliderFilter;
//# sourceMappingURL=sliderFilter.pipe.js.map