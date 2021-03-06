"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pdfSrc = './pdf-test.pdf';
        this.page = 1;
        this.rotation = 0;
        this.zoom = 1.0;
        this.originalSize = false;
        this.showAll = true;
        this.renderText = true;
    }
    AppComponent.prototype.incrementPage = function (amount) {
        this.page += amount;
    };
    AppComponent.prototype.incrementZoom = function (amount) {
        this.zoom += amount;
    };
    AppComponent.prototype.rotate = function (angle) {
        this.rotation += angle;
    };
    AppComponent.prototype.onFileSelected = function () {
        var _this = this;
        var $img = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.pdfSrc = e.target.result;
            };
            reader.readAsArrayBuffer($img.files[0]);
        }
    };
    AppComponent.prototype.afterLoadComplete = function (pdf) {
        this.error = null;
        this.pdf = pdf;
    };
    AppComponent.prototype.onError = function (error) {
        this.error = error;
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'pdf-viewer-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            },] },
];
AppComponent.ctorParameters = function () { return []; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map