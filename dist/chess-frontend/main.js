(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\r\n  margin: 5px;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid black;\r\n  color: #00000063;\r\n  float: left;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.inner-shadow{\r\n\tbox-shadow:  inset 0 0 10px 3px #ff00eb;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 10px solid #7b6e6e;width: 500px;height: 500px;margin-left: 25%;\">\n\t<div *ngFor=\"let row of  grid\" style=\"clear: both;\">\n\t\t<div *ngFor = \"let cell of row\">\n\t\t\t<div class=\"cell\" (click)=\"onClick(cell);\" [ngStyle]=\"{'box-shadow': ((cell.isActiveCell) ? 'inset 0 0 10px 3px #ff00eb' : 'inset 0 0 10px 3px transparent')}\">\n\t\t\t\t<small style=\"position: absolute;\">{{cell.x}}, {{cell.y}}</small>\n\t\t\t\t<div [innerHTML]=\"cell.piece?.symbol\" style=\"color: black;font-size: 38px; margin-left: 4px;\"></div>\n\t\t\t</div>\t\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chess_arrangement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chess-arrangement.service */ "./src/app/chess-arrangement.service.ts");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/app/cell.ts");
/* harmony import */ var _piece_pawn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../piece/pawn */ "./src/piece/pawn.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(chessArrangementService) {
        this.name = "Madhu";
        this.grid = [];
        this.chessArrangementService = chessArrangementService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 0; i < 8; i++) {
            var gridByY = [];
            for (var j = 0; j < 8; j++) {
                gridByY.push(new _cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](j, i));
            }
            this.grid.push(gridByY);
        }
        console.log(this.grid);
        this.grid.forEach(function (row) {
            row.forEach(function (cell) {
                if (cell.y == 6) {
                    cell.piece = new _piece_pawn__WEBPACK_IMPORTED_MODULE_3__["Pawn"]("white");
                }
                if (cell.y == 1) {
                    cell.piece = new _piece_pawn__WEBPACK_IMPORTED_MODULE_3__["Pawn"]("black");
                }
                if (cell.y == 0) {
                    cell.piece = _this.chessArrangementService.blackTeamStartingPoisition[cell.x];
                }
                if (cell.y == 7) {
                    cell.piece = _this.chessArrangementService.whiteTeamStartingPoisition[cell.x];
                }
            });
        });
        console.log(this.chessArrangementService);
    };
    AppComponent.prototype.getCell = function (x, y) {
        var fetchedCell;
        this.grid.forEach(function (row) {
            row.forEach(function (cell) {
                if (cell.x == x && cell.y == y) {
                    fetchedCell = cell;
                }
            });
        });
        return fetchedCell;
    };
    AppComponent.prototype.clearAllCellFromAtiveState = function () {
        this.grid.forEach(function (row) {
            row.forEach(function (cell) {
                cell.isActiveCell = 0;
            });
        });
    };
    AppComponent.prototype.onClick = function (cell) {
        var _this = this;
        this.clearAllCellFromAtiveState();
        if (cell.piece) {
            cell.isActiveCell = 1;
            var path = cell.piece.getArrayOfPosibleMove(cell.x, cell.y);
            path.forEach(function (cordinates) {
                var cellForPatch = _this.getCell(cordinates.x, cordinates.y);
                console.log(cellForPatch);
                cellForPatch.isActiveCell = 1;
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_chess_arrangement_service__WEBPACK_IMPORTED_MODULE_1__["ChessArrangementService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell.ts":
/*!*************************!*\
  !*** ./src/app/cell.ts ***!
  \*************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
    }
    return Cell;
}());



/***/ }),

/***/ "./src/app/chess-arrangement.service.ts":
/*!**********************************************!*\
  !*** ./src/app/chess-arrangement.service.ts ***!
  \**********************************************/
/*! exports provided: ChessArrangementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessArrangementService", function() { return ChessArrangementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _piece_bioshop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../piece/bioshop */ "./src/piece/bioshop.ts");
/* harmony import */ var _piece_king__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../piece/king */ "./src/piece/king.ts");
/* harmony import */ var _piece_queen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../piece/queen */ "./src/piece/queen.ts");
/* harmony import */ var _piece_knight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../piece/knight */ "./src/piece/knight.ts");
/* harmony import */ var _piece_rock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../piece/rock */ "./src/piece/rock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChessArrangementService = /** @class */ (function () {
    function ChessArrangementService() {
        this.blackTeamStartingPoisition = [
            new _piece_rock__WEBPACK_IMPORTED_MODULE_5__["Rock"]("black"),
            new _piece_bioshop__WEBPACK_IMPORTED_MODULE_1__["Bioshop"]("black"),
            new _piece_knight__WEBPACK_IMPORTED_MODULE_4__["Knight"]("black"),
            new _piece_queen__WEBPACK_IMPORTED_MODULE_3__["Queen"]("black"),
            new _piece_king__WEBPACK_IMPORTED_MODULE_2__["King"]("black"),
            new _piece_knight__WEBPACK_IMPORTED_MODULE_4__["Knight"]("black"),
            new _piece_bioshop__WEBPACK_IMPORTED_MODULE_1__["Bioshop"]("black"),
            new _piece_rock__WEBPACK_IMPORTED_MODULE_5__["Rock"]("black")
        ];
        this.whiteTeamStartingPoisition = [
            new _piece_rock__WEBPACK_IMPORTED_MODULE_5__["Rock"]("white"),
            new _piece_bioshop__WEBPACK_IMPORTED_MODULE_1__["Bioshop"]("white"),
            new _piece_knight__WEBPACK_IMPORTED_MODULE_4__["Knight"]("white"),
            new _piece_king__WEBPACK_IMPORTED_MODULE_2__["King"]("white"),
            new _piece_queen__WEBPACK_IMPORTED_MODULE_3__["Queen"]("white"),
            new _piece_knight__WEBPACK_IMPORTED_MODULE_4__["Knight"]("white"),
            new _piece_bioshop__WEBPACK_IMPORTED_MODULE_1__["Bioshop"]("white"),
            new _piece_rock__WEBPACK_IMPORTED_MODULE_5__["Rock"]("white")
        ];
    }
    ChessArrangementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChessArrangementService);
    return ChessArrangementService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/piece/bioshop.ts":
/*!******************************!*\
  !*** ./src/piece/bioshop.ts ***!
  \******************************/
/*! exports provided: Bioshop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bioshop", function() { return Bioshop; });
var Bioshop = /** @class */ (function () {
    function Bioshop(type) {
        this.symbol = (type == "white") ? "&#9815;" : "&#9821;";
    }
    Bioshop.prototype.getArrayOfPosibleMove = function (x, y) {
        var possiblePaths = [];
        for (var i = 0; i < 8; i++) {
            possiblePaths.push({ x: x + i, y: y + i });
        }
        return possiblePaths;
    };
    return Bioshop;
}());



/***/ }),

/***/ "./src/piece/king.ts":
/*!***************************!*\
  !*** ./src/piece/king.ts ***!
  \***************************/
/*! exports provided: King */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "King", function() { return King; });
var King = /** @class */ (function () {
    function King(type) {
        this.type = type;
        this.symbol = (type == "white") ? "&#9812;" : "&#9818;";
    }
    King.prototype.getArrayOfPosibleMove = function (x, y) {
        var possiblePaths = [];
        if (this.type == "white") {
            possiblePaths.push({ x: x - 1, y: y });
            possiblePaths.push({ x: x - 1, y: y - 1 });
            possiblePaths.push({ x: x, y: y - 1 });
            possiblePaths.push({ x: x + 1, y: y - 1 });
            possiblePaths.push({ x: x + 1, y: y });
        }
        else {
            possiblePaths.push({ x: x - 1, y: y });
            possiblePaths.push({ x: x - 1, y: y + 1 });
            possiblePaths.push({ x: x, y: y - 1 });
            possiblePaths.push({ x: x + 1, y: y + 1 });
            possiblePaths.push({ x: x + 1, y: y });
        }
        return possiblePaths;
    };
    return King;
}());



/***/ }),

/***/ "./src/piece/knight.ts":
/*!*****************************!*\
  !*** ./src/piece/knight.ts ***!
  \*****************************/
/*! exports provided: Knight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knight", function() { return Knight; });
var Knight = /** @class */ (function () {
    function Knight(type) {
        this.symbol = (type == "white") ? "&#9816;" : "&#9822;";
        this.type = type;
    }
    Knight.prototype.getArrayOfPosibleMove = function (x, y) {
        var possiblePaths = [];
        if (this.type == "white") {
            possiblePaths.push({ x: x + 1, y: y - 2 });
            possiblePaths.push({ x: x - 1, y: y - 2 });
        }
        else {
            possiblePaths.push({ x: x + 1, y: y + 2 });
            possiblePaths.push({ x: x - 1, y: y + 2 });
        }
        return possiblePaths;
    };
    return Knight;
}());



/***/ }),

/***/ "./src/piece/pawn.ts":
/*!***************************!*\
  !*** ./src/piece/pawn.ts ***!
  \***************************/
/*! exports provided: Pawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pawn", function() { return Pawn; });
var Pawn = /** @class */ (function () {
    function Pawn(type) {
        this.type = type;
        this.symbol = (type == "white") ? "&#9817;" : "&#9823;";
    }
    Pawn.prototype.getArrayOfPosibleMove = function (x, y) {
        var posiblepaths = [];
        if (this.type == "white") {
            posiblepaths.push({ x: x, y: y - 1 });
            posiblepaths.push({ x: x, y: y - 2 });
            return posiblepaths;
        }
        else {
            posiblepaths.push({ x: x, y: y + 1 });
            posiblepaths.push({ x: x, y: y + 2 });
            return posiblepaths;
        }
    };
    return Pawn;
}());



/***/ }),

/***/ "./src/piece/queen.ts":
/*!****************************!*\
  !*** ./src/piece/queen.ts ***!
  \****************************/
/*! exports provided: Queen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queen", function() { return Queen; });
var Queen = /** @class */ (function () {
    function Queen(type) {
        this.symbol = (type == "white") ? "&#9813;" : "&#9819;";
    }
    Queen.prototype.getArrayOfPosibleMove = function () {
    };
    return Queen;
}());



/***/ }),

/***/ "./src/piece/rock.ts":
/*!***************************!*\
  !*** ./src/piece/rock.ts ***!
  \***************************/
/*! exports provided: Rock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rock", function() { return Rock; });
var Rock = /** @class */ (function () {
    function Rock(type) {
        this.symbol = (type == "white") ? "&#9814;" : "&#9820;";
    }
    Rock.prototype.getArrayOfPosibleMove = function (x, y) {
        var possiblePaths = [];
        for (var i = 0; i < 8; i++) {
            possiblePaths.push({ x: x, y: i });
            possiblePaths.push({ x: i, y: y });
        }
        return possiblePaths;
    };
    return Rock;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Madhu Sudan\Desktop\chess-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map