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
var FiltersComponent = (function () {
    function FiltersComponent() {
        this.someRangeTmp = [-20, 20];
        this.someRangeAbt = [100, 300];
        this.textSearch = '';
        this.checkRadio = new core_1.EventEmitter();
        this.clean = new core_1.EventEmitter();
        this.keyu = new core_1.EventEmitter();
        this.sliderVal = new core_1.EventEmitter();
    }
    FiltersComponent.prototype.emittChecked = function (val) {
        this.checkRadio.emit(val);
    };
    FiltersComponent.prototype.Clean = function () {
        this.clean.emit();
    };
    FiltersComponent.prototype.onKey = function () {
        this.keyu.emit(this.textSearch);
    };
    FiltersComponent.prototype.sliderFunc = function (val) {
        var t = [];
        t[0] = val;
        if (val === 'temperatura') {
            t[1] = this.someRangeTmp[0];
            t[2] = this.someRangeTmp[1];
            this.sliderVal.emit(t);
        }
        else if (val === 'abertura') {
            t[1] = this.someRangeAbt[0];
            t[2] = this.someRangeAbt[1];
            this.sliderVal.emit(t);
        }
    };
    return FiltersComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FiltersComponent.prototype, "checkRadio", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FiltersComponent.prototype, "clean", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FiltersComponent.prototype, "keyu", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FiltersComponent.prototype, "sliderVal", void 0);
FiltersComponent = __decorate([
    core_1.Component({
        selector: 'filters-app',
        templateUrl: './filters.component.html',
    })
], FiltersComponent);
exports.FiltersComponent = FiltersComponent;
//# sourceMappingURL=filters.component.js.map