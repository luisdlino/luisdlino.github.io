"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchFilter = (function () {
    function SearchFilter() {
        this.teste = [];
        this.tmp = [];
    }
    SearchFilter.prototype.transform = function (array, args) {
        //if(!array || array === undefined || array.length === 0) {
        //return this.teste;
        //}
        if (args === '')
            return array;
        this.tmp.length = 0;
        var argsUpper = args.toUpperCase();
        var arr = array.filter(function (device) { return new RegExp(argsUpper).test(device.endereco.toUpperCase()); });
        (_a = this.tmp).push.apply(_a, arr);
        this.teste = this.tmp;
        return this.tmp;
        var _a;
    };
    return SearchFilter;
}());
SearchFilter = __decorate([
    core_1.Pipe({
        name: 'seachFilter',
    })
], SearchFilter);
exports.SearchFilter = SearchFilter;
//# sourceMappingURL=searchFilter.pipe.js.map