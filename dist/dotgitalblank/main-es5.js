function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        query {\n          users {\n            id,\n            fullName,\n            username,\n            email,\n            blocked,\n            role {\n              name\n            },\n            avatar {\n              url\n            }\n          }\n        }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-admin/applications-admin.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications-admin/applications-admin.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsAdminApplicationsAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"loading-top\" color=\"warn\"></mat-progress-bar>\n<div class=\"content\">\n    <mat-card style=\"padding: 5px 10px; margin-bottom: 10px; border-radius: 0px;\" class=\"mat-elevation-z1\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"10px\">\n            <div fxFlex>\n              <mat-form-field appearance=\"outline\"  class=\"no-padding\">\n                <mat-label>Search</mat-label>\n                <input matInput class=\"form-control\" [(ngModel)]=\"search\" \n                type=\"text\" name=\"userQuestion\" id=\"userQuestions\"\n                (ngModelChange)=\"this.searchUpdate.next($event)\" (keyup)=\"keyUpLoading()\" >\n                <button mat-button *ngIf=\"search\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"this.searchUpdate.next('')\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field appearance=\"outline\" class=\"no-padding\">\n                  <mat-label>Agent</mat-label>\n                  <mat-select placeholder=\"Agent\" name=\"item\" [value]=\"agentSelected\" (selectionChange)=\"filteByAgent($event.value)\">\n                      <mat-option>Any</mat-option>\n                      <mat-option *ngFor=\"let item of agents\" [value]=\"item.id\">\n                          {{item.fullName}}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"Leasing\" class=\"full-width margin-botton\">\n                <mat-button-toggle value=\"Leasing\" aria-label=\"Text align center\" (click)=\"displayCol('Leasing')\">\n                  Leasing\n                </mat-button-toggle>\n                <mat-button-toggle value=\"Listing\" aria-label=\"Text align center\" (click)=\"displayCol('Listing')\">\n                  Listing\n                </mat-button-toggle>\n                <mat-button-toggle value=\"Buying\" aria-label=\"Text align center\" (click)=\"displayCol('Buying')\">\n                  Buying\n                </mat-button-toggle>\n              </mat-button-toggle-group>\n            </div>\n          </div>\n    </mat-card>\n\n    <div class=\"mat-elevation-z2\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n          <ng-container matColumnDef=\"address\">\n            <th mat-header-cell *matHeaderCellDef> Address </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  {{row.address}}\n              </div>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"agent\">\n            <th mat-header-cell *matHeaderCellDef> Agent </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  {{row.agent.fullName}}\n              </div>\n            </td>\n          </ng-container>\n    \n          <ng-container matColumnDef=\"createdAt\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  {{row.createdAt | date:'shortDate' }}\n              </div>\n            </td>\n          </ng-container>\n    \n          <ng-container matColumnDef=\"applicationType\">\n            <th mat-header-cell *matHeaderCellDef> Type </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                {{row.applicationType}}\n              </div>\n            </td>\n          </ng-container>\n    \n          <ng-container matColumnDef=\"price\">\n              <th mat-header-cell *matHeaderCellDef> Price </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    ${{row.price | number }}\n                </div>\n              </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"offerOut\">\n              <th mat-header-cell *matHeaderCellDef>Offer Out </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.offerOut\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'offerOut')\"></mat-checkbox>\n              </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"listingAgreement\">\n              <th mat-header-cell *matHeaderCellDef>Listing <br> Agreement </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <mat-checkbox [(ngModel)]=\"row.listingAgreement\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'listingAgreement')\"></mat-checkbox>\n              </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"offerExecuted\">\n              <th mat-header-cell *matHeaderCellDef>Offer <br> Executed </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.offerExecuted\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'offerExecuted')\"></mat-checkbox>\n              </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"closed\">\n              <th mat-header-cell *matHeaderCellDef>Closed </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <mat-checkbox [(ngModel)]=\"row.closed\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'closed')\"></mat-checkbox>\n              </td>\n            </ng-container>\n    \n          <ng-container matColumnDef=\"moneyIn\">\n            <th mat-header-cell *matHeaderCellDef>Money In </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <mat-checkbox [(ngModel)]=\"row.moneyIn\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'moneyIn')\"></mat-checkbox>\n            </td>\n          </ng-container>\n    \n          <ng-container matColumnDef=\"approved\">\n            <th mat-header-cell *matHeaderCellDef>Approved </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.approved\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'approved')\"></mat-checkbox>\n            </td>\n          </ng-container>\n    \n            <ng-container matColumnDef=\"denied\">\n                <th mat-header-cell *matHeaderCellDef>Denied </th>\n                <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.denied\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'denied')\"></mat-checkbox>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"invoiceOut\">\n                <th mat-header-cell *matHeaderCellDef>Invoice Out </th>\n                <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.invoiceOut\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'invoiceOut')\"></mat-checkbox>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"invoicePaid\">\n                <th mat-header-cell *matHeaderCellDef>Invoice Paid </th>\n                <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.invoicePaid\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'invoicePaid')\"></mat-checkbox>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"paid\">\n                <th mat-header-cell *matHeaderCellDef>Paid </th>\n                <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                  <mat-checkbox [(ngModel)]=\"row.paid\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'paid')\"></mat-checkbox>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef> </th>\n                <td mat-cell *matCellDef=\"let row\" style=\"width: 5%;\">\n                  <button mat-icon-button *ngIf=\"!editing.includes(row.id)\" (click)=\"edit(row.id)\" ><mat-icon>edit</mat-icon></button>\n                  <button mat-icon-button *ngIf=\"editing.includes(row.id)\" (click)=\"save(row.id)\"><mat-icon>save</mat-icon></button>\n                  <!-- <button mat-icon-button *ngIf=\"editing.includes(row.id)\" (click)=\"edit(row.id)\"><mat-icon>delete</mat-icon></button> -->\n                </td>\n              </ng-container>\n    \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </tr>\n        </table>\n    \n        <mat-paginator [length]=\"totalPages\"\n                  [pageSize]=\"10\"\n                  [pageSizeOptions]=\"[5, 10, 25, 100]\"\n                  (page)=\"paginator($event)\">\n        </mat-paginator>\n      </div>\n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/applications-dashboard.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/applications-dashboard.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsDashboardApplicationsDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"full-screen\">\n  <content id=\"full-screen\">\n  <button mat-mini-fab (click)=\"openFullScreen()\"><mat-icon>{{ !fullScreen ? 'fullscreen' : 'fullscreen_exit'}}</mat-icon></button>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly stretch\" class=\"wrapper\">\n    <ng-container *ngFor=\"let item of apps\">\n      <mat-card \n      fxFlex=\"0 1 calc(25% - 10px)\"\n      fxFlex.lt-lg=\"0 1 calc(33.3% - 10px)\"\n      fxFlex.lt-md=\"0 1 calc(50% - 10px)\"\n      fxFlex.lt-sm=\"0 1 calc(100% - 10px)\">\n        <div\n        gdAreas=\"avatar content\"\n        gdGap=\"5px\"\n        gdRows=\"auto\"\n        gdColumns=\"55px auto\">\n        <div gdArea=\"avatar\" class=\"avatar-container\">\n          <img class=\"avatar_smm\" src=\"https://backend.apartmentsource.com/{{item.agent.avatar['0'].url}}\" *ngIf=\"item.agent.avatar['0'] && item.agent.avatar['0'].url\" />\n          <img class=\"avatar_smm\" src=\"'../../../../assets/avatar.svg\" *ngIf=\"!item.agent.avatar['0']\" />\n          <mat-icon *ngIf=\"item.agent.id == topAgent\" class=\"top-agent-star\">grade</mat-icon>\n        </div>\n        <div gdArea=\"content\">\n          <h4 class=\"address\">{{ item.address }}</h4><span class=\"create-by\"> {{ item.agent.fullName }} - {{ item.createdAt | date:\"MM/dd/yyyy\" }}</span> <br />\n\n          <div class=\"status-container\">\n            <span class=\"status-{{ item.offerOut }} apps-status\">Offer Out <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.listingAgreement }} apps-status\">List Agr <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.offerExecuted }} apps-status\">Offer Exec <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.closed }} apps-status\">Closed <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.moneyIn }} apps-status\">Money In <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.approved }} apps-status\">Approved <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.denied }} apps-status\">Denied <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.invoiceOut }} apps-status\">Invoice Out <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n            <span class=\"status-{{ item.invoicePaid }} apps-status\">Invoice Paid <mat-icon class=\"material-icons md-24\">done</mat-icon></span>\n          </div>\n        </div>\n      </div>\n      </mat-card>\n    </ng-container>\n  </div>\n  <div class=\"message-space\"></div>\n  <mat-toolbar class=\"whiteboard-message apps-item mat-elevation-z3\">\n    <!-- <div class=\"field-container\" *ngIf=\"loggedUser && loggedUser.isAdmin\" >\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Message</mat-label>\n          <input matInput [(ngModel)]=\"message\">\n        </mat-form-field>\n        <button mat-icon-button color=\"primary\" (click)=\"saveMessage(message)\" >\n          <mat-icon>save</mat-icon>\n        </button>\n    </div> -->\n    <span class=\"whiteboard-message-text\">{{message}}\n      <button mat-icon-button (click)=\"editMessage()\" *ngIf=\"user.user.role.name == 'Administrator'\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </span>\n  </mat-toolbar>\n</content>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/message/message.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/message/message.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsDashboardMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"modal-loading\" color=\"warn\"></mat-progress-bar>\n<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Message</mat-label>\n        <input matInput [(ngModel)]=\"message\" name=\"message\">\n      </mat-form-field>\n    <button mat-flat-button color=\"primary\">Save</button>\n    <a mat-stroked-button (click)=\"onNoClick()\" color=\"primary\" style=\"margin-left: 10px;\">Cancel</a>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-stats/applications-stats.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications-stats/applications-stats.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsStatsApplicationsStatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly stretch\">\n    <ng-container *ngFor=\"let item of stats\">\n        <mat-card class=\"mat-elevation-z4 margin-bottom\"\n        fxFlex.lg=\"0 1 calc(33.3% - 10px)\"\n        fxFlex.md=\"0 1 calc(50% - 10px)\"\n        fxFlex.sm=\"0 1 calc(100% - 10px)\">\n            <div>\n                <img class=\"avatar_lg\" src=\"https://backend.apartmentsource.com{{item.avatar}}\" *ngIf=\"item.avatar\" />\n                <img class=\"avatar_lg\" src=\"'../../../../assets/avatar.svg\" *ngIf=\"!item.avatar\" />\n            </div>\n            <div class=\"statistics\">\n            <h3>{{item.createBy}}</h3>\n            <span> Applications: {{item.applications}} </span> <br/>\n            <span>Money In: {{item.moneyIn}}</span><br/>\n            <span>Approved: {{item.approved}}</span><br/>\n            <span>Invoice Out: {{item.invoiceOut}}</span> <br/>\n            <span>Incoice Paid: {{item.invoicePaid}}</span><br/>\n            <!-- <span>Denied: {{item.denied}}</span><br> -->\n            <!-- <span>Price: {{item.price}}</span> -->\n            </div>\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-medal\"></mat-icon>\n\n        </mat-card>\n    </ng-container>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsApplicationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"loading-top\" color=\"warn\"></mat-progress-bar>\n<div class=\"content\">\n  <mat-card style=\"padding: 5px 10px; margin-bottom: 10px; border-radius: 0px;\" class=\"mat-elevation-z1\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"10px\">\n    <div fxFlex>\n      <mat-form-field appearance=\"outline\" class=\"no-padding\">\n        <mat-label>Search</mat-label>\n        <input matInput class=\"form-control\" [(ngModel)]=\"search\" \n        type=\"text\" name=\"userQuestion\" id=\"userQuestions\"\n        (ngModelChange)=\"this.searchUpdate.next($event)\" (keyup)=\"keyUpLoading()\" >\n        <button mat-button *ngIf=\"search\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"this.searchUpdate.next('')\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"Leasing\" class=\"full-width margin-botton\">\n        <mat-button-toggle value=\"Leasing\" aria-label=\"Text align center\" (click)=\"displayCol('Leasing')\">\n          Leasing\n        </mat-button-toggle>\n        <mat-button-toggle value=\"Listing\" aria-label=\"Text align center\" (click)=\"displayCol('Listing')\">\n          Listing\n        </mat-button-toggle>\n        <mat-button-toggle value=\"Buying\" aria-label=\"Text align center\" (click)=\"displayCol('Buying')\">\n          Buying\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n    <div>\n      <button mat-flat-button class=\"fat-btn bk-gradient\" (click)=\"createApp()\">New Application</button>\n    </div>\n  </div>\n </mat-card>\n  <div class=\"mat-elevation-z2\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              {{row.address}}\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdAt\">\n        <th mat-header-cell *matHeaderCellDef> Date </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              {{row.createdAt | date:'shortDate' }}\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"applicationType\">\n        <th mat-header-cell *matHeaderCellDef> Type </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            {{row.applicationType}}\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price\">\n          <th mat-header-cell *matHeaderCellDef> Price </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                ${{row.price | number }}\n            </div>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"offerOut\">\n          <th mat-header-cell *matHeaderCellDef>Offer Out </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.offerOut\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'offerOut')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"listingAgreement\">\n          <th mat-header-cell *matHeaderCellDef>Listing <br> Agreement </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n            <mat-checkbox [(ngModel)]=\"row.listingAgreement\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'listingAgreement')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"offerExecuted\">\n          <th mat-header-cell *matHeaderCellDef>Offer <br> Executed </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.offerExecuted\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'offerExecuted')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"closed\">\n          <th mat-header-cell *matHeaderCellDef>Closed </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n            <mat-checkbox [(ngModel)]=\"row.closed\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'closed')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n      <ng-container matColumnDef=\"moneyIn\">\n        <th mat-header-cell *matHeaderCellDef>Money In </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n            <mat-checkbox [(ngModel)]=\"row.moneyIn\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'moneyIn')\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"approved\">\n        <th mat-header-cell *matHeaderCellDef>Approved </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n          <mat-checkbox [(ngModel)]=\"row.approved\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'approved')\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n        <ng-container matColumnDef=\"denied\">\n            <th mat-header-cell *matHeaderCellDef>Denied </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.denied\" color=\"primary\" [disabled]=\"!editing.includes(row.id)\" (click)=\"updateApp(row, 'denied')\"></mat-checkbox>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 5%;\">\n              <button mat-icon-button *ngIf=\"!editing.includes(row.id)\" (click)=\"edit(row.id)\" ><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button *ngIf=\"editing.includes(row.id)\" (click)=\"save(row.id)\"><mat-icon>save</mat-icon></button>\n              <!-- <button mat-icon-button *ngIf=\"editing.includes(row.id)\" (click)=\"edit(row.id)\"><mat-icon>delete</mat-icon></button> -->\n            </td>\n          </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [length]=\"totalPages\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              (page)=\"paginator($event)\">\n    </mat-paginator>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/create-application/create-application.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/create-application/create-application.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsCreateApplicationCreateApplicationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"modal-loading\"></mat-progress-bar>\n<form [formGroup]=\"createApplicationForm\" (ngSubmit)=\"createApplication()\">\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <h1 mat-dialog-title>Submit a new application</h1>\n  </div>\n\n<div mat-dialog-content>\n\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"appType\" class=\"full-width margin-botton\">\n    <mat-button-toggle value=\"Leasing\" aria-label=\"Text align center\" (click)=\"appType = 'Leasing'\">\n      Leasing\n    </mat-button-toggle>\n    <mat-button-toggle value=\"Listing\" aria-label=\"Text align center\" (click)=\"appType = 'Listing'\">\n      Listing \n    </mat-button-toggle>\n    <mat-button-toggle value=\"Buying\" aria-label=\"Text align center\" (click)=\"appType = 'Buying'\">\n      Buying\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  <!-- <div class=\"example-selected-value\">Selected value: {{group.value}}</div> -->\n  <!-- <div *ngIf=\"group.value == 'Sales'\">\n    <mat-radio-group class=\"full-width\" value=\"Listing\">\n      <mat-radio-button value=\"Listing\" class=\"margin\" (click)=\"saleType = 'Listing'\">Listing</mat-radio-button>\n      <mat-radio-button value=\"Buying\" class=\"margin\" (click)=\"saleType = 'Buying'\">Buying</mat-radio-button>\n    </mat-radio-group>\n  </div> -->\n\n    <mat-form-field class=\"full-width\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"address\">\n        <mat-icon matSuffix>name</mat-icon>\n        <mat-error *ngIf=\"createApplicationForm.controls['address'].errors && createApplicationForm.controls['address'].errors.required\">Required</mat-error>\n      </mat-form-field>\n      <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n          <mat-form-field>\n              <mat-label>Price</mat-label>\n              <span matPrefix>$ &nbsp;</span>\n              <input type=\"number\" matInput formControlName=\"price\">\n            </mat-form-field>\n        <div *ngIf=\"appType == 'Leasing'\">\n          <mat-checkbox color=\"primary\" formControlName=\"moneyIn\">Money In</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"approved\">Approved</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"denied\">Denied</mat-checkbox>\n        </div>\n        <div *ngIf=\"appType == 'Listing'\">\n          <mat-checkbox color=\"primary\" formControlName=\"listingAgreement\">Listing Agreement</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"offerExecuted\">Offer Executed</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"closed\">Closed</mat-checkbox>\n        </div>\n        <div *ngIf=\"appType == 'Buying'\">\n          <mat-checkbox color=\"primary\" formControlName=\"offerOut\">Offer out</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"offerExecuted\">Offer Executed</mat-checkbox><br>\n          <mat-checkbox color=\"primary\" formControlName=\"closed\">Closed</mat-checkbox>\n        </div>\n          <!-- <mat-checkbox color=\"primary\" formControlName=\"invoiceOut\">Invoice Out</mat-checkbox>\n          <mat-checkbox color=\"primary\" formControlName=\"invoicePaid\">Invoice Paid</mat-checkbox> -->\n      </div>\n</div>\n\n  <div mat-dialog-actions fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\" class=\"margin-botton\">\n      <button mat-flat-button color=\"primary\" [disabled]=\"!createApplicationForm.valid\" fxFlex>Create\n\n      </button>\n      <a mat-stroked-button (click)=\"onNoClick()\" color=\"primary\" fxFlex>Cancel</a>\n      <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button> -->\n  </div>\n</form>\n<!-- <div class=\"loading-spinner\">\n    <mat-progress-spinner\n    class=\"example-margin\"\n    color=\"white\"\n    mode=\"indeterminate\"\n    value=\"50\">\n    </mat-progress-spinner>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/manage-applications/manage-applications.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/manage-applications/manage-applications.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsManageApplicationsManageApplicationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"loading-top\"></mat-progress-bar>\n<div class=\"content\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n    <mat-form-field appearance=\"outline\" fxFlex=\"80%\" fxFlexFill>\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\">\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" fxFlex=\"10%\" fxFlexFill>\n        <mat-label>Month</mat-label>\n        <mat-select [(ngModel)]=\"selectedMonth\" name=\"item\" (selectionChange)=\"changeMonth($event)\">\n          <mat-option *ngFor=\"let item of months\" [value]=\"item.value\">\n            {{item.value}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    <mat-form-field appearance=\"outline\" fxFlex=\"10%\" fxFlexFill>\n        <mat-label>Year</mat-label>\n        <mat-select [(ngModel)]=\"selectedYear\" name=\"item\" (selectionChange)=\"changeYear($event)\">\n          <mat-option *ngFor=\"let item of years\" [value]=\"item.value\">\n            {{item.value}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    <!-- <button mat-flat-button color=\"primary\" class=\"fat-btn\" (click)=\"addUser()\">New Application</button> -->\n  </div>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              {{row.address}}\n          </div>\n        </td>\n      </ng-container>\n\n        <ng-container matColumnDef=\"createDate\">\n          <th mat-header-cell *matHeaderCellDef> Date </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                {{row.createDate}}\n            </div>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"createBy\">\n          <th mat-header-cell *matHeaderCellDef> Agent </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                {{row.createBy}}\n            </div>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"saleType\">\n          <th mat-header-cell *matHeaderCellDef> Type </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <span *ngIf=\"row.appType != 'Sale'\">Lease</span>\n              <span *ngIf=\"row.appType == 'Sale'\">{{row.saleType}}</span>\n            </div>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"price\">\n            <th mat-header-cell *matHeaderCellDef> Price </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  ${{row.price}}\n              </div>\n            </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"offerOut\">\n            <th mat-header-cell *matHeaderCellDef>Offer Out </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <mat-checkbox [(ngModel)]=\"row.offerOut\" color=\"primary\" (click)=\"updateApp(row, 'offerOut')\"  *ngIf=\"row.appType == 'Sale' && row.saleType != 'Listing'\"></mat-checkbox>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"listingAgreement\">\n            <th mat-header-cell *matHeaderCellDef>Listing <br> Agreement </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.listingAgreement\" color=\"primary\" (click)=\"updateApp(row, 'listingAgreement')\"  *ngIf=\"row.appType == 'Sale' && row.saleType == 'Listing'\"></mat-checkbox>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"offerExecuted\">\n            <th mat-header-cell *matHeaderCellDef>Offer <br> Executed </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n                <mat-checkbox [(ngModel)]=\"row.offerExecuted\" color=\"primary\" (click)=\"updateApp(row, 'offerExecuted')\" *ngIf=\"row.appType == 'Sale'\"></mat-checkbox>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"closed\">\n            <th mat-header-cell *matHeaderCellDef>Closed </th>\n            <td mat-cell *matCellDef=\"let row\" style=\"width: 8%;\">\n              <mat-checkbox [(ngModel)]=\"row.closed\" color=\"primary\" (click)=\"updateApp(row, 'closed')\" *ngIf=\"row.appType == 'Sale'\"></mat-checkbox>\n            </td>\n          </ng-container>\n\n      <ng-container matColumnDef=\"moneyIn\">\n        <th mat-header-cell *matHeaderCellDef>Money In </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n            <mat-checkbox [(ngModel)]=\"row.moneyIn\" color=\"primary\" (click)=\"updateApp(row, 'moneyIn')\"  *ngIf=\"row.appType != 'Sale'\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"approved\">\n        <th mat-header-cell *matHeaderCellDef>Approved </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [(ngModel)]=\"row.approved\" color=\"primary\" (click)=\"updateApp(row, 'approved')\"  *ngIf=\"row.appType != 'Sale'\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"denied\">\n        <th mat-header-cell *matHeaderCellDef>Denied </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [(ngModel)]=\"row.denied\" color=\"primary\" (click)=\"updateApp(row, 'denied')\" *ngIf=\"row.appType != 'Sale'\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"invoiceOut\">\n          <th mat-header-cell *matHeaderCellDef>Invoice Out </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n            <mat-checkbox [(ngModel)]=\"row.invoiceOut\" color=\"primary\" (click)=\"updateApp(row, 'invoiceOut')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"invoicePaid\">\n          <th mat-header-cell *matHeaderCellDef>Invoice <br> Paid </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox [(ngModel)]=\"row.invoicePaid\" color=\"primary\" (click)=\"updateApp(row, 'invoicePaid')\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n          <ng-container matColumnDef=\"completed\">\n              <th mat-header-cell *matHeaderCellDef>Paid </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox [(ngModel)]=\"row.completed\" color=\"primary\" (click)=\"updateApp(row, 'completed')\"></mat-checkbox>\n              </td>\n            </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <mat-card class=\"mat-elevation-z8\">\n        <form [formGroup]=\"forgotForm\" (ngSubmit)=\"forgot()\">\n              <mat-card-content class=\"ion-padding\">\n                <mat-card-title class=\"ion-text-center full-width\">Forgot Password</mat-card-title>\n                <mat-card-subtitle class=\"ion-text-center full-width\">Recover your password using your email address</mat-card-subtitle>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                  <mat-label>Email</mat-label>\n                  <input matInput formControlName=\"email\">\n                  <mat-icon matSuffix>email</mat-icon>\n                  <!-- <mat-hint>Hint</mat-hint> -->\n                  <mat-error *ngIf=\"forgotForm.controls['email'].errors && forgotForm.controls['email'].errors.required\">Required</mat-error>\n                  <mat-error *ngIf=\"forgotForm.controls['email'].errors && !forgotForm.controls['email'].errors.required\">Please type a valid email address</mat-error>\n                </mat-form-field>\n              </mat-card-content>\n              <mat-card-actions  class=\"padding\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\">\n                      <button mat-flat-button color=\"primary\" [disabled]=\"!forgotForm.valid\" fxFlex>Reset</button>\n                      <a mat-stroked-button routerLink=\"/login\" color=\"primary\" fxFlex>Back to Login</a>\n                  </div>\n              </mat-card-actions>\n          </form>\n        </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-list/form-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-list/form-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormListFormListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\">\n      </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n            <button mat-button routerLink=\"/dashboard/form/{{row.file}}\">{{row.name}}</button>\n          </td>\n        </ng-container>\n\n      <!-- Details Column -->\n      <ng-container matColumnDef=\"details\">\n        <th mat-header-cell *matHeaderCellDef> Details </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.details}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form/form.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form/form.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"loading-top\"></mat-progress-bar>\n<div class=\"form-actions\">\n  <button mat-icon-button (click)=\"downloadForm()\" ><mat-icon class=\"md-24\">cloud_download</mat-icon></button><br/>\n  <button mat-icon-button (click)=\"printForm()\" ><mat-icon class=\"md-24\">print</mat-icon></button><br/>\n  <button mat-icon-button (click)=\"zoomIn()\" [disabled]=\"zoom >= 1.5\"><mat-icon class=\"md-24\">zoom_in</mat-icon></button><br/>\n  <button mat-icon-button (click)=\"zoomOut()\"  [disabled]=\"zoom < 1\"><mat-icon class=\"md-24\">zoom_out</mat-icon></button><br/>\n</div>\n<div class=\"container\">\n\n  <!-- <pre class=\"form-value\">{{myForm.value | json}}</pre> -->\n\n<!-- Little trick to center the inputs to the viewer -->\n  <div class=\"form-container\">\n      <form id=\"input-form\" [formGroup]=\"myForm\" novalidate>\n      <!-- Cycle through all the inputs -->\n      <div *ngFor=\"let input of inputList; let i=index\" [ngSwitch]=\"input.type\">\n\n          <input *ngSwitchCase=\"'checkbox'\" color=\"primary\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              type=\"checkbox\"\n              [style.transform]=\"checkBoxSize\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngStyle]=\"getInputPosition(input)\">\n\n\n          <input *ngSwitchCase=\"'radio'\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              type=\"radio\"\n              (click)=\"radioClicked(input)\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngStyle]=\"getInputPosition(input)\">\n\n          <textarea *ngSwitchCase=\"'textarea'\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngStyle]=\"getInputPosition(input)\"></textarea>\n\n          <select *ngSwitchCase=\"'select'\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngStyle]=\"getInputPosition(input)\">\n              <option *ngFor=\"let option of input.options\"  value=\"{{option.displayValue}}\">{{ option.displayValue }}</option>\n            </select>\n\n          <input *ngSwitchCase=\"'comb'\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              [style.letter-spacing]=\"input.spacing + 'px'\"\n              type=\"text\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngClass]=\"input.class\"\n              [ngStyle]=\"getInputPosition(input)\">\n\n          <input *ngSwitchCase=\"'date'\"\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              type=\"text\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngClass]=\"input.class\"\n              [ngStyle]=\"getInputPosition(input)\">\n\n            <!-- <mat-form-field *ngSwitchCase=\"'date'\"\n            [ngStyle]=\"getInputPosition(input)\"\n            [style.display]=\"input.pageNumber !== page?'none':'inherit'\">\n                  <input matInput [matDatepicker]=\"dp3\"\n                  [name]=\"input.name\"\n                  [formControlName]=\"input.name\"\n                  [value]=\"input.value\"\n                  disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n            </mat-form-field> -->\n\n          <!-- Insert an input accordingly and get the style/position from the component -->\n          <input *ngSwitchDefault\n              [name]=\"input.name\"\n              [style.display]=\"input.pageNumber !== page?'none':'inherit'\"\n              type=\"text\"\n              [formControlName]=\"input.name\"\n              [value]=\"input.value\"\n              [ngClass]=\"input.class\"\n              [ngStyle]=\"getInputPosition(input)\">\n\n      </div>\n    <!-- </div> -->\n      </form>\n  </div>\n\n  <!-- Bind the zoom variable to the viewer component -->\n    <!-- <pdf-viewer id=\"viewer\" [src]=\"pdfSrc\" [zoom]=\"zoom\" (after-load-complete)=\"loadComplete($event)\"></pdf-viewer> -->\n  <pdf-viewer id=\"viewer\" [page]=\"page\" [src]=\"pdfSrc\" [zoom]=\"zoom\" (after-load-complete)=\"loadComplete($event)\" [show-all]=\"false\"></pdf-viewer>\n</div>\n<!-- Add some button -->\n<div class=\"paginator\">\n  <button mat-button (click)=\"prevPage()\" [disabled]=\"page === 1\">Prev</button>\n  <span>{{ page }} / {{ totalPages }}</span>\n  <button mat-button (click)=\"nextPage()\" [disabled]=\"page === totalPages\">Next</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <mat-card class=\"mat-elevation-z8\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <mat-card-content class=\"ion-padding\">\n                <mat-card-title class=\"ion-text-center full-width\">Login</mat-card-title>\n                <mat-card-subtitle class=\"ion-text-center full-width\">Using your email address</mat-card-subtitle>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                  <mat-label>Email</mat-label>\n                  <input matInput formControlName=\"email\">\n                  <mat-icon matSuffix>email</mat-icon>\n                  <mat-error *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].errors.required\">Required</mat-error>\n                  <mat-error *ngIf=\"loginForm.controls['email'].errors && !loginForm.controls['email'].errors.required\">Please type a valid email address</mat-error>\n                  <!-- <mat-hint>Hint</mat-hint> -->\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" color=\"primary\" class=\"full-width\">\n                  <mat-label>Password</mat-label>\n                  <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\n                  <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                    [attr.aria-pressed]=\"hide\">\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                  </a>\n                  <mat-hint>Password should be at least 6 characters</mat-hint>\n                  <mat-error *ngIf=\"loginForm.controls['password'].errors && loginForm.controls['password'].errors.required\">Required</mat-error>\n                  <mat-error *ngIf=\"loginForm.controls['password'].errors && !loginForm.controls['password'].errors.required\">Password should be at least 6 characters\n                    </mat-error>\n                </mat-form-field>\n\n                <!-- <a mat-flat-button routerLink=\"/forgot-password\">Forgot Password?</a> -->\n              </mat-card-content>\n              <mat-card-actions class=\"padding\">\n                <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\">\n                    <button mat-flat-button color=\"primary\" [disabled]=\"!loginForm.valid\" fxFlex>Login</button>\n                    <a mat-stroked-button routerLink=\"/forgot-password\" color=\"primary\" fxFlex>Reset Password</a>\n                </div>\n              </mat-card-actions>\n              </form>\n    </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <div *ngIf=\"user\">\n          <!-- <a mat-list-item routerLink=\"/dashboard/form/ar-11\">Clients</a> -->\n          <a mat-list-item routerLink=\"/dashboard/applications-dashboard\" (click)=\"drawer.close()\">Whiteboard</a>\n          <a mat-list-item routerLink=\"/dashboard/whiteboard\" (click)=\"drawer.close()\">Agent Stats (old)</a>\n          <a mat-list-item routerLink=\"/dashboard/applications-stats\" (click)=\"drawer.close()\">Agent Stats</a>\n          <a mat-list-item routerLink=\"/dashboard/applications\" (click)=\"drawer.close()\">Applications</a>\n          <!-- <a mat-list-item routerLink=\"/dashboard/manage-applications\" (click)=\"drawer.close()\">Applications <span class=\"sub-menu\">(admin)</span></a>\n          <a mat-list-item routerLink=\"/dashboard/users\" (click)=\"drawer.close()\">Users</a> -->\n          <!-- <a mat-list-item routerLink=\"/dashboard/manage-applications\" (click)=\"drawer.close()\" *ngIf=\"user.user.role.name == 'Administrator'\">Applications old <span class=\"sub-menu\">(admin)</span></a> -->\n          <a mat-list-item routerLink=\"/dashboard/applications-admin\" (click)=\"drawer.close()\" *ngIf=\"user.user.role.name == 'Administrator'\">Applications <span class=\"sub-menu\">(admin)</span></a>\n          <a mat-list-item routerLink=\"/dashboard/users\" (click)=\"drawer.close()\" *ngIf=\"user.user.role.name == 'Administrator'\">Users</a>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>\n        <!-- Dashboard -->\n      </span>\n      <span class=\"spacer\"></span>\n      <button mat-icon-button (click)=\"logout()\" ><mat-icon>exit_to_app</mat-icon></button>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet>\n    </router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <mat-toolbar color=\"primary\">\n  <span>footer</span>\n</mat-toolbar> -->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <mat-card class=\"mat-elevation-z2\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n            <mat-card-content class=\"ion-padding\">\n              <mat-card-title class=\"ion-text-center full-width\">Register</mat-card-title>\n              <mat-card-subtitle class=\"ion-text-center full-width\">Using your email address</mat-card-subtitle>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                  <mat-label>Name</mat-label>\n                  <input matInput formControlName=\"name\">\n                  <mat-icon matSuffix>name</mat-icon>\n                  <mat-error *ngIf=\"registerForm.controls['email'].errors && registerForm.controls['email'].errors.required\">Required</mat-error>\n                </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Email</mat-label>\n                <input matInput formControlName=\"email\">\n                <mat-icon matSuffix>email</mat-icon>\n\n                <mat-error *ngIf=\"registerForm.controls['email'].errors && registerForm.controls['email'].errors.required\">Required</mat-error>\n                <mat-error *ngIf=\"registerForm.controls['email'].errors && !registerForm.controls['email'].errors.required\">Please type a valid email address</mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"primary\" class=\"full-width\">\n                <mat-label>Password</mat-label>\n                <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\n                <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                  [attr.aria-pressed]=\"hide\">\n                  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </a>\n                <mat-hint>Password should be at least 6 characters</mat-hint>\n                <mat-error *ngIf=\"registerForm.controls['password'].errors && registerForm.controls['password'].errors.required\">Required</mat-error>\n                <mat-error *ngIf=\"registerForm.controls['password'].errors && !registerForm.controls['password'].errors.required\">Password should be at least 6 characters\n                  </mat-error>\n              </mat-form-field>\n            </mat-card-content>\n            <mat-card-actions  class=\"padding\">\n                <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\">\n                    <button mat-flat-button color=\"primary\" [disabled]=\"!registerForm.valid\" fxFlex>Register</button>\n                    <!-- <a mat-stroked-button routerLink=\"/login\" color=\"primary\" fxFlex>Back to Login</a> -->\n                </div>\n            </mat-card-actions>\n          </form>\n          </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersCreateUserCreateUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"modal-loading\"></mat-progress-bar>\n  <form #avatarUpload (ngSubmit)=\"uploadAvatar()\" >\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div class=\"image-upload\">\n          <label for=\"file-input\">\n              <img class=\"avatar_md\" [src]=\"imageSrc || '../../../assets/avatar.svg'\" alt=\"your image\" />\n          </label>\n          <input id=\"file-input\" #avatarInput type='file' (change)=\"preview($event.target.files);\"/>\n          <!-- <input hidden id=\"file-input\" type='file' (change)=\"preview($event);\" formControlName=\"avatar\" value=''/> -->\n      </div>\n  </div>\n  <!-- <input type=\"submit\" value=\"upload\"> -->\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <h1 mat-dialog-title>{{ update ? 'Update this User' : 'Create a new User'}}</h1>\n  </div>\n</form>\n<form [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n<div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"fullName\">\n        <mat-icon matSuffix>name</mat-icon>\n        <mat-error *ngIf=\"createUserForm.controls['email'].errors && createUserForm.controls['email'].errors.required\">Required</mat-error>\n      </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\">\n      <mat-icon matSuffix>email</mat-icon>\n\n      <mat-error *ngIf=\"createUserForm.controls['email'].errors && createUserForm.controls['email'].errors.required\">Required</mat-error>\n      <mat-error *ngIf=\"createUserForm.controls['email'].errors && !createUserForm.controls['email'].errors.required\">Please type a valid email address</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" color=\"primary\" class=\"full-width\">\n      <mat-label>Password</mat-label>\n      <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\n      <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n        [attr.aria-pressed]=\"hide\">\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </a>\n      <mat-hint>Password should be at least 6 characters</mat-hint>\n      <mat-error *ngIf=\"createUserForm.controls['password'].errors && createUserForm.controls['password'].errors.required\">Required</mat-error>\n      <mat-error *ngIf=\"createUserForm.controls['password'].errors && !createUserForm.controls['password'].errors.required\">Password should be at least 6 characters\n        </mat-error>\n    </mat-form-field>\n    <div class=\"full-width\">\n      <section class=\"slide-toggle\">\n        <mat-slide-toggle formControlName=\"isAdmin\" (change)=\"adminChanged = !adminChanged\">\n            Administrator\n        </mat-slide-toggle>\n      </section>\n    </div>\n    <div class=\"full-width\">\n      <section class=\"slide-togglen\">\n        <mat-slide-toggle formControlName=\"isBloked\" (change)=\"blokedChanged = !blokedChanged\" >\n            Blocked\n        </mat-slide-toggle>\n      </section>\n    </div>\n\n</div>\n  <div mat-dialog-actions fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\" class=\"margin-botton\">\n      <button mat-flat-button color=\"primary\" [disabled]=\"!createUserForm.valid\" fxFlex *ngIf=\"!update\" >Create</button>\n      <button mat-flat-button color=\"primary\" [disabled]=\"!createUserForm.valid\" fxFlex *ngIf=\"update\" >Update</button>\n      <a mat-stroked-button (click)=\"onNoClick()\" color=\"primary\" fxFlex>Cancel</a>\n      <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button> -->\n  </div>\n</form>\n<!-- <div class=\"loading-spinner\">\n    <mat-progress-spinner\n    class=\"example-margin\"\n    color=\"white\"\n    mode=\"indeterminate\"\n    value=\"50\">\n    </mat-progress-spinner>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"loading-top\"></mat-progress-bar>\n<div class=\"content\">\n  <mat-card style=\"padding: 5px 10px; margin-bottom: 10px; border-radius: 0px;\" class=\"mat-elevation-z1\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n    <mat-form-field appearance=\"outline\" class=\"no-padding\">\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\">\n    </mat-form-field>\n    <button mat-flat-button class=\"fat-btn bk-gradient\" (click)=\"addUser()\">Add User</button>\n  </div>\n</mat-card>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"fullName\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n              <img class=\"avatar_sm\" src=\"https://backend.apartmentsource.com{{row.avatar['0'].url}}\" *ngIf=\"row.avatar.length > 0 || !row.avatar == undefined\" />\n              <img class=\"avatar_sm\" src=\"'../../../../assets/avatar.svg\" *ngIf=\"row.avatar.length == 0\" />\n              {{row.fullName}}\n          </div>\n        </td>\n      </ng-container>\n\n      <!--Email Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Email </th>\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 15%;\">\n          {{row.email}}\n        </td>\n      </ng-container>\n\n      <!-- isAdmin Column -->\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef>Admin </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox [ngModel]=\"row.role.name == 'Administrator' ? true : false\" color=\"primary\" disabled></mat-checkbox>\n        </td>\n      </ng-container>\n\n            <!-- isAdmin Column -->\n            <ng-container matColumnDef=\"blocked\">\n              <th mat-header-cell *matHeaderCellDef>Blocked </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox [ngModel]=\"row.blocked\" color=\"primary\" disabled></mat-checkbox>\n              </td>\n            </ng-container>\n\n      <!-- isAdmin Column -->\n      <ng-container matColumnDef=\"edit\" class=\"edit-table\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"updateUser(row)\"><mat-icon>edit</mat-icon></button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/whiteboard/whiteboard.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/whiteboard/whiteboard.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWhiteboardWhiteboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"20px\">\n  <div *ngFor=\"let item of stats\" fxFlex=\"23\" class=\"card-33\" fxFill>\n    <mat-card class=\"mat-elevation-z4 margin-bottom\">\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <div>\n            <img class=\"avatar_lg\" src=\"{{item.statsData.avatar}}\" *ngIf=\"item.statsData.avatar\" />\n            <img class=\"avatar_lg\" src=\"'../../../../assets/avatar.svg\" *ngIf=\"!item.statsData.avatar\" />\n        </div>\n        <div class=\"statistics\">\n          <h3>{{item.createBy}}</h3>\n          <span> Applications: {{item.statsData.app}} </span> <br/>\n          <span>Money In: {{item.statsData.moneyIn}}</span><br/>\n          <span>Approved: {{item.statsData.approved}}</span><br/>\n          <span>Invoice Out: {{item.statsData.invoiceOut}}</span> <br/>\n          <span>Incoice Paid: {{item.statsData.invoicePaid}}</span><br/>\n          <span>Denied: {{item.statsData.denied}}</span><br>\n          <span>Price: {{item.statsData.price}}</span>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts"); // import { AuthenticationService } from '@app/_services';


    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          // console.log(request);
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.jwt && request.url.startsWith('https://backend.apartmentsource.com')) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.jwt)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _applications_stats_applications_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./applications-stats/applications-stats.component */
    "./src/app/applications-stats/applications-stats.component.ts");
    /* harmony import */


    var _applications_admin_applications_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./applications-admin/applications-admin.component */
    "./src/app/applications-admin/applications-admin.component.ts");
    /* harmony import */


    var _applications_manage_applications_manage_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./applications/manage-applications/manage-applications.component */
    "./src/app/applications/manage-applications/manage-applications.component.ts");
    /* harmony import */


    var _applications_dashboard_applications_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./applications-dashboard/applications-dashboard.component */
    "./src/app/applications-dashboard/applications-dashboard.component.ts");
    /* harmony import */


    var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./whiteboard/whiteboard.component */
    "./src/app/whiteboard/whiteboard.component.ts");
    /* harmony import */


    var _applications_applications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./applications/applications.component */
    "./src/app/applications/applications.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./form-list/form-list.component */
    "./src/app/form-list/form-list.component.ts");
    /* harmony import */


    var _form_form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./form/form/form.component */
    "./src/app/form/form/form.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard/applications-dashboard',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
    }, {
      path: 'forgot-password',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      children: [{
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
      }, {
        path: 'forms',
        component: _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_11__["FormListComponent"]
      }, {
        path: 'form/:form',
        component: _form_form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]
      }, {
        path: 'form/:form/:id',
        component: _form_form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]
      }, {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"]
      }, {
        path: 'applications',
        component: _applications_applications_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationsComponent"]
      }, {
        path: 'whiteboard',
        component: _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_5__["WhiteboardComponent"]
      }, {
        path: 'applications-stats',
        component: _applications_stats_applications_stats_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationsStatsComponent"]
      }, {
        path: 'applications-dashboard',
        component: _applications_dashboard_applications_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsDashboardComponent"]
      }, {
        path: 'manage-applications',
        component: _applications_manage_applications_manage_applications_component__WEBPACK_IMPORTED_MODULE_3__["ManageApplicationsComponent"]
      }, {
        path: 'applications-admin',
        component: _applications_admin_applications_admin_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationsAdminComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dotgitalblank';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _applications_dashboard_applications_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./applications-dashboard/applications-dashboard.component */
    "./src/app/applications-dashboard/applications-dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _form_form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./form/form/form.component */
    "./src/app/form/form/form.component.ts");
    /* harmony import */


    var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-pdf-viewer */
    "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./form-list/form-list.component */
    "./src/app/form-list/form-list.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./users/create-user/create-user.component */
    "./src/app/users/create-user/create-user.component.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _applications_applications_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./applications/applications.component */
    "./src/app/applications/applications.component.ts");
    /* harmony import */


    var _applications_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./applications/create-application/create-application.component */
    "./src/app/applications/create-application/create-application.component.ts");
    /* harmony import */


    var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./whiteboard/whiteboard.component */
    "./src/app/whiteboard/whiteboard.component.ts");
    /* harmony import */


    var _applications_manage_applications_manage_applications_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./applications/manage-applications/manage-applications.component */
    "./src/app/applications/manage-applications/manage-applications.component.ts");
    /* harmony import */


    var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./_helpers/error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./_helpers/jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _applications_admin_applications_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./applications-admin/applications-admin.component */
    "./src/app/applications-admin/applications-admin.component.ts");
    /* harmony import */


    var _applications_dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./applications-dashboard/message/message.component */
    "./src/app/applications-dashboard/message/message.component.ts");
    /* harmony import */


    var _applications_stats_applications_stats_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./applications-stats/applications-stats.component */
    "./src/app/applications-stats/applications-stats.component.ts");

    var config = {
      url: 'https://backend.apartmentsource.com',
      options: {
        query: {
          userId: null
        }
      }
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _form_form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"], _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_13__["FormListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"], _users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_26__["CreateUserComponent"], _applications_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_29__["CreateApplicationComponent"], _applications_applications_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationsComponent"], _applications_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_29__["CreateApplicationComponent"], _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_30__["WhiteboardComponent"], _applications_dashboard_applications_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationsDashboardComponent"], _applications_manage_applications_manage_applications_component__WEBPACK_IMPORTED_MODULE_31__["ManageApplicationsComponent"], _applications_admin_applications_admin_component__WEBPACK_IMPORTED_MODULE_36__["ApplicationsAdminComponent"], _applications_dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_37__["MessageComponent"], _applications_stats_applications_stats_component__WEBPACK_IMPORTED_MODULE_38__["ApplicationsStatsComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_34__["GraphQLModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_35__["SocketIoModule"].forRoot(config)],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_33__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_32__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_26__["CreateUserComponent"], _applications_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_29__["CreateApplicationComponent"], _applications_dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_37__["MessageComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/applications-admin/applications-admin.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/applications-admin/applications-admin.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsAdminApplicationsAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth {\n  font-weight: 900;\n  color: #000;\n}\n\ntd, th {\n  width: 8% !important;\n}\n\n.mat-column-address {\n  width: 20% !important;\n}\n\n.fat-btn {\n  margin: 4px 0px 0px;\n  height: 50px;\n}\n\n.mat-button-toggle-group {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMtYWRtaW4vYXBwbGljYXRpb25zLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBsaWNhdGlvbnMtYWRtaW4vYXBwbGljYXRpb25zLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRENFO0VBQ0Usb0JBQUE7QUNFSjs7QURDRTtFQUNFLHFCQUFBO0FDRUo7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy1hZG1pbi9hcHBsaWNhdGlvbnMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGh7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLWFkZHJlc3N7XG4gICAgd2lkdGg6IDIwJSAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZhdC1idG57XG4gICAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFkZHJlc3Mge1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi5mYXQtYnRuIHtcbiAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/applications-admin/applications-admin.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/applications-admin/applications-admin.component.ts ***!
    \********************************************************************/

  /*! exports provided: ApplicationsAdminComponent */

  /***/
  function srcAppApplicationsAdminApplicationsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsAdminComponent", function () {
      return ApplicationsAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var ApplicationsAdminComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsAdminComponent(dataService, socketService) {
        _classCallCheck(this, ApplicationsAdminComponent);

        this.dataService = dataService;
        this.socketService = socketService;
        this.loading = true;
        this.search = '';
        this.applicationType = 'Leasing';
        this.startPage = 0;
        this.limitPage = 10;
        this.searchUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.editing = [];
        this.agents = [];
        this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved', 'denied', 'invoiceOut', 'invoicePaid', 'paid', 'edit'];
      }

      _createClass(ApplicationsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getUsers();
          this.getApplications();
          this.searchUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (value) {
            _this2.search = value;

            _this2.getApplications();
          });
          this.socketService.get().subscribe(function (method) {
            // console.log(method);
            if (typeof _this2[method] === 'function') {
              _this2[method]();
            }
          });
        }
      }, {
        key: "keyUpLoading",
        value: function keyUpLoading() {
          this.loading = true;
        }
      }, {
        key: "filteByAgent",
        value: function filteByAgent(agent) {
          console.log(agent);
          this.agentSelected = agent;
          this.getApplications();
        }
      }, {
        key: "displayCol",
        value: function displayCol(applicationType) {
          this.loading = true;
          this.applicationType = applicationType;

          switch (applicationType) {
            case 'Leasing':
              this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved', 'denied', 'invoiceOut', 'invoicePaid', 'paid', 'edit'];
              break;

            case 'Listing':
              this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType', 'price', 'listingAgreement', 'offerExecuted', 'closed', 'invoiceOut', 'invoicePaid', 'paid', 'edit'];
              break;

            case 'Buying':
              this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType', 'price', 'offerOut', 'offerExecuted', 'closed', 'invoiceOut', 'invoicePaid', 'paid', 'edit'];
              break;

            default:
              break;
          }

          this.getApplications();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this3 = this;

          var query = "query{\n      users(sort: \"fullName:asc\"){\n        id,\n        fullName\n      }\n    }";
          this.dataService.getData(query).subscribe(function (_ref) {
            var data = _ref.data,
                loading = _ref.loading;
            _this3.agents = data.users;
          });
        }
      }, {
        key: "getApplications",
        value: function getApplications() {
          var _this4 = this;

          var where;

          if (this.agentSelected) {
            where = "{\n        agent: \"".concat(this.agentSelected, "\",\n        address_contains: \"").concat(this.search, "\",\n        applicationType: \"").concat(this.applicationType, "\"\n      }");
          } else {
            where = "{\n        address_contains: \"".concat(this.search, "\",\n        applicationType: \"").concat(this.applicationType, "\"\n      }");
          }

          var query = "\n    query{\n        applications(sort: \"createdAt:desc\", start: ".concat(this.startPage, ", limit: ").concat(this.limitPage, ", where: ").concat(where, ") {\n            id,\n            applicationType,\n            address,\n            approved,\n            createdAt,\n            denied,\n            listingAgreement,\n            offerOut,\n            offerExecuted,\n            closed,\n            invoiceOut,\n            invoicePaid,\n            paid,\n            moneyIn,\n            price,\n            agent {\n                id\n                fullName\n            }\n        }\n        applicationsConnection (where: ").concat(where, ") {\n            aggregate {\n                count\n            }\n        }\n    }");
          this.dataService.getData(query).subscribe(function (_ref2) {
            var data = _ref2.data,
                loading = _ref2.loading;
            _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data.applications);
            _this4.totalPages = data.applicationsConnection.aggregate.count;
            _this4.loading = false;
          });
        }
      }, {
        key: "edit",
        value: function edit(appId) {
          if (!this.editing.includes(appId)) {
            this.editing.push(appId);
          }
        }
      }, {
        key: "save",
        value: function save(appId) {
          if (this.editing.includes(appId)) {
            this.editing.splice(this.editing.indexOf(appId), 1);
          }
        }
      }, {
        key: "updateApp",
        value: function updateApp(app, field) {
          var _this5 = this;

          if (this.editing.includes(app.id)) {
            this.loading = true;
            app[field] = !app[field];
            var appData = "mutation {\n          updateApplication(input: {\n            where: {\n              id: \"".concat(app.id, "\"\n            },\n            data: {\n              ").concat(field, ": ").concat(app[field], "\n            }\n          }) {\n            application {\n              id\n            }\n          }\n        }");
            this.dataService.updateData(appData).subscribe(function () {
              _this5.getApplications();

              _this5.socketService.send('public', 'getApplications');
            });
          }
        }
      }, {
        key: "paginator",
        value: function paginator(e) {
          this.loading = true;
          this.startPage = e.pageIndex !== 0 ? e.pageIndex * e.pageSize : 0;
          this.limitPage = e.pageSize;
          this.getApplications();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.closeConnection();
        }
      }]);

      return ApplicationsAdminComponent;
    }();

    ApplicationsAdminComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    ApplicationsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-applications-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./applications-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-admin/applications-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./applications-admin.component.scss */
      "./src/app/applications-admin/applications-admin.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])], ApplicationsAdminComponent);
    /***/
  },

  /***/
  "./src/app/applications-dashboard/applications-dashboard.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/applications-dashboard/applications-dashboard.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsDashboardApplicationsDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card {\n  margin: 5px 0px;\n  padding: 5px;\n}\n\nh4.address {\n  margin: 0px 5px 0px 0px;\n  color: #4c4c4c;\n}\n\nspan.create-by {\n  font-size: 0.8em;\n  color: #4c4c4c;\n}\n\ndiv.avatar-container {\n  padding-top: 5px;\n}\n\n.apps-item .create-by.top {\n  font-size: 0.8em;\n  color: #4c4c4c;\n  background: red;\n}\n\n.status-container {\n  margin: 5px 0px;\n}\n\n.status-container .apps-status {\n  font-size: 0.5em;\n  padding: 2px 5px 0px 8px;\n  margin-right: 5px;\n  float: left;\n  text-transform: uppercase;\n  color: #ffffff;\n  background: linear-gradient(60deg, #2d2d2d, #4a4a4a);\n}\n\n.status-container .status-,\n.status-container .status-false {\n  display: none;\n}\n\n.status-container .mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  /* line-height: 16px; */\n  height: 18px;\n  width: 16px;\n}\n\n.top-agent-star {\n  background: red;\n  color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  text-align: center;\n  height: 25px;\n  width: 25px;\n  top: 40px;\n  left: 35px;\n}\n\n.whiteboard-message {\n  position: fixed;\n  bottom: 0px;\n  background: #000;\n}\n\n.message-space {\n  height: 65px;\n}\n\n.whiteboard-message mat-icon {\n  color: #636363;\n}\n\n.whiteboard-message-text {\n  text-align: center;\n  width: 100%;\n  color: #fff;\n}\n\n#full-screen,\n.full-screen {\n  background: #e2e2e2;\n}\n\n.mat-sidenav-content {\n  background: #e2e2e2;\n}\n\n.mat-mini-fab {\n  z-index: 1;\n  bottom: 2.9rem;\n  background: linear-gradient(60deg, #288c6c, #4ea752);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMtZGFzaGJvYXJkL2FwcGxpY2F0aW9ucy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9ucy1kYXNoYm9hcmQvYXBwbGljYXRpb25zLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFFRSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvREFBQTtBQ0lGOztBRERBOztFQUVFLGFBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJRjs7QURTQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05GOztBRHFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7O0FEMENBO0VBQ0UsWUFBQTtBQ3ZDRjs7QUQyQ0E7RUFLRSxjQUFBO0FDNUNGOztBRCtDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUM1Q0Y7O0FEd0RBOztFQUVFLG1CQUFBO0FDckRGOztBRHdEQTtFQUNFLG1CQUFBO0FDckRGOztBRHdEQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7QUNyREYiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbnMtZGFzaGJvYXJkL2FwcGxpY2F0aW9ucy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuaDQuYWRkcmVzc3tcbiAgLy8gZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xuICBjb2xvcjogIzRjNGM0Yztcbn1cbnNwYW4uY3JlYXRlLWJ5e1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzRjNGM0Yztcbn1cblxuZGl2LmF2YXRhci1jb250YWluZXJ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5hcHBzLWl0ZW0gLmNyZWF0ZS1ieS50b3B7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4uc3RhdHVzLWNvbnRhaW5lcntcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLnN0YXR1cy1jb250YWluZXIgLmFwcHMtc3RhdHVze1xuICBmb250LXNpemU6IDAuNWVtO1xuICBwYWRkaW5nOiAycHggNXB4IDBweCA4cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzJkMmQyZCwgIzRhNGE0YSk7XG59XG5cbi5zdGF0dXMtY29udGFpbmVyIC5zdGF0dXMtLFxuLnN0YXR1cy1jb250YWluZXIgLnN0YXR1cy1mYWxzZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN0YXR1cy1jb250YWluZXIgLm1hdC1pY29ue1xuICBmb250LXNpemU6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxNnB4OyAqL1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4vLyAudG9wLWFnZW50e1xuLy8gICBiYWNrZ3JvdW5kOiByZWQ7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGZvbnQtc2l6ZTogMC42ZW07XG4vLyAgIHBhZGRpbmc6IDNweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBtYXJnaW46IDNweCAxNXB4IDBweCAwcHg7XG4vLyB9XG5cbi50b3AtYWdlbnQtc3RhcntcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAzNXB4O1xufVxuXG4vLyAuYXBwcy1wYWdlcntcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB6LWluZGV4OiAxMDAwO1xuLy8gICB0b3A6IDBweDtcbi8vICAgaGVpZ2h0OiA2NXB4O1xuLy8gICB3aWR0aDogNyU7XG4vLyAgIG1hcmdpbi1sZWZ0OiA0NiU7XG4vLyAgIG1hcmdpbi1yaWdodDogNDUlO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gLmFwcHMtcGFnZXIgbWF0LXNlbGVjdCAqe1xuLy8gICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuY2xvc2UtYXBwc3tcbi8vICAgbGluZS1oZWlnaHQ6IDE7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDNweDtcbi8vICAgdG9wOiAwcHg7XG4vLyB9XG4vLyAuY2xvc2UtYXBwcyBtYXQtaWNvbntcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiAjNDQ0NDQ0O1xuLy8gfVxuXG4ud2hpdGVib2FyZC1tZXNzYWdle1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAvLyB3aWR0aDogY2FsYyggMTAwJSAtIDIwcHggKTtcbiAgLy8gbWFyZ2luOiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kOiAjMDAwMDAwNDI7XG4gIC8vIGNvbG9yOiAjZmZmZmZmO1xuICAvLyBmb250LXNpemU6IDIycHg7XG59XG5cbi5tZXNzYWdlLXNwYWNle1xuICBoZWlnaHQ6IDY1cHg7XG4gIC8vIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi53aGl0ZWJvYXJkLW1lc3NhZ2UgbWF0LWljb257XG4gIC8vIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIHRvcDogLTVweDtcbiAgLy8gbGVmdDogLTVweDtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG5cbi53aGl0ZWJvYXJkLW1lc3NhZ2UtdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIC5maWVsZC1jb250YWluZXJ7XG4vLyAgIHdpZHRoOiA5NyU7XG4vLyB9XG5cbi8vIC5tYXQtZm9ybS1maWVsZCB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbiNmdWxsLXNjcmVlbixcbi5mdWxsLXNjcmVlbntcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG59XG5cbi5tYXQtbWluaS1mYWJ7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMi45cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsIzI4OGM2YywjNGVhNzUyKTtcbn1cbiIsIi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5oNC5hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG4gIGNvbG9yOiAjNGM0YzRjO1xufVxuXG5zcGFuLmNyZWF0ZS1ieSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjNGM0YzRjO1xufVxuXG5kaXYuYXZhdGFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5hcHBzLWl0ZW0gLmNyZWF0ZS1ieS50b3Age1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzRjNGM0YztcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uc3RhdHVzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnN0YXR1cy1jb250YWluZXIgLmFwcHMtc3RhdHVzIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgcGFkZGluZzogMnB4IDVweCAwcHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyZDJkMmQsICM0YTRhNGEpO1xufVxuXG4uc3RhdHVzLWNvbnRhaW5lciAuc3RhdHVzLSxcbi5zdGF0dXMtY29udGFpbmVyIC5zdGF0dXMtZmFsc2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3RhdHVzLWNvbnRhaW5lciAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxNnB4OyAqL1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4udG9wLWFnZW50LXN0YXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0b3A6IDQwcHg7XG4gIGxlZnQ6IDM1cHg7XG59XG5cbi53aGl0ZWJvYXJkLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ubWVzc2FnZS1zcGFjZSB7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLndoaXRlYm9hcmQtbWVzc2FnZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjNjM2MzYzO1xufVxuXG4ud2hpdGVib2FyZC1tZXNzYWdlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Z1bGwtc2NyZWVuLFxuLmZ1bGwtc2NyZWVuIHtcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xufVxuXG4ubWF0LW1pbmktZmFiIHtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAyLjlyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI4OGM2YywgIzRlYTc1Mik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/applications-dashboard/applications-dashboard.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/applications-dashboard/applications-dashboard.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ApplicationsDashboardComponent */

  /***/
  function srcAppApplicationsDashboardApplicationsDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsDashboardComponent", function () {
      return ApplicationsDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/applications-dashboard/message/message.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ApplicationsDashboardComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsDashboardComponent(dialog, dataService, authService, socketService) {
        _classCallCheck(this, ApplicationsDashboardComponent);

        this.dialog = dialog;
        this.dataService = dataService;
        this.authService = authService;
        this.socketService = socketService;
        this.months = [{
          display: 'January',
          value: '201901'
        }, {
          display: 'Febraury',
          value: '201902'
        }];
        this.applicatiosOld = [];
        this.fullScreen = false;
      }

      _createClass(ApplicationsDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.authService.currentUser.subscribe(function (data) {
            _this6.user = data;
          });
          this.getMessage();
          this.getApplications();
          this.socketService.get().subscribe(function (method) {
            // console.log(method);
            if (typeof _this6[method] === 'function') {
              _this6[method]();
            }
          });
        }
      }, {
        key: "getApplications",
        value: function getApplications() {
          var _this7 = this;

          var where = "{\n      paid_ne: true,\n    }";
          var query = "\n    query{\n        applications(sort: \"createdAt:desc\", where: ".concat(where, ") {\n            id,\n            applicationType,\n            address,\n            approved,\n            createdAt,\n            denied,\n            listingAgreement,\n            offerOut,\n            offerExecuted,\n            closed,\n            moneyIn,\n            price,\n            invoicePaid,\n            invoiceOut,\n            agent {\n                id\n                fullName\n                avatar {\n                  url\n                }\n            }\n        }\n        applicationsConnection {\n          groupBy {\n            agent {\n              key\n              connection {\n                  aggregate {\n                      count\n                  }\n              }\n            }\n          }\n        }\n    }");
          this.dataService.getData(query).subscribe(function (res) {
            _this7.apps = res.data.applications;
            var agentStats = res.data.applicationsConnection.groupBy.agent;
            var stats = [];
            agentStats.forEach(function (el) {
              var key = el.key;
              var count = el.connection.aggregate.count;
              stats.push({
                key: key,
                count: count
              });
            });
            stats.sort(function (a, b) {
              return a.count > b.count ? -1 : 1;
            });
            _this7.topAgent = stats['0'].key;
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          var _this8 = this;

          var query = "query{\n      static(id: \"5e5702eda23dfc62fc1bcf4d\"){\n        whiteBoardMessage\n      }\n    }";
          this.dataService.getData(query).subscribe(function (res) {
            _this8.message = res.data.static.whiteBoardMessage;
          });
        }
      }, {
        key: "editMessage",
        value: function editMessage() {
          var _this9 = this;

          var dialogRef = this.dialog.open(_message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], {
            width: '550px',
            data: {
              message: this.message
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            _this9.socketService.send('public', 'getMessage');

            _this9.message = res;
          });
        }
      }, {
        key: "openFullScreen",
        value: function openFullScreen() {
          var element = document.getElementById('full-screen');
          this.fullScreen = !this.fullScreen;

          var screenfull = __webpack_require__(
          /*! screenfull */
          "./node_modules/screenfull/dist/screenfull.js");

          if (screenfull.isEnabled) {
            screenfull.toggle(element);
          }
        }
      }, {
        key: "migrateApps",
        value: function migrateApps() {
          var _this10 = this;

          this.applicatiosOld.forEach(function (appOld) {
            console.log(appOld.address);

            _this10.authService.migrateApp(appOld).subscribe(function (res) {
              console.log(res);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.closeConnection();
        }
      }]);

      return ApplicationsDashboardComponent;
    }();

    ApplicationsDashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    ApplicationsDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-applications-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./applications-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/applications-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./applications-dashboard.component.scss */
      "./src/app/applications-dashboard/applications-dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])], ApplicationsDashboardComponent);
    /***/
  },

  /***/
  "./src/app/applications-dashboard/message/message.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/applications-dashboard/message/message.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsDashboardMessageMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n  width: 100%;\n}\n\n.modal-loading {\n  top: -25px;\n  height: 5px;\n  left: -20px;\n  width: calc(100% + 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMtZGFzaGJvYXJkL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwbGljYXRpb25zLWRhc2hib2FyZC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb25zLWRhc2hib2FyZC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tb2RhbC1sb2FkaW5ne1xuICAgIHRvcDogLTI1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICB9IiwiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWxvYWRpbmcge1xuICB0b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogLTIwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0MHB4KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/applications-dashboard/message/message.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/applications-dashboard/message/message.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppApplicationsDashboardMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessageComponent =
    /*#__PURE__*/
    function () {
      function MessageComponent(dialogRef, dataService, data) {
        _classCallCheck(this, MessageComponent);

        this.dialogRef = dialogRef;
        this.dataService = dataService;
        this.data = data;
        this.message = '';
      }

      _createClass(MessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data) {
            this.message = this.data.message;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.loading = true;
          var appData = "mutation {\n      updateStatic(input: {\n        where: {\n          id: \"5e5702eda23dfc62fc1bcf4d\"\n        },\n        data: {\n          whiteBoardMessage: \"".concat(this.message, "\"\n        }\n      }) {\n        static {\n          whiteBoardMessage\n        }\n      }\n    }");
          this.dataService.updateData(appData).subscribe(function (res) {
            _this11.loading = false;

            _this11.dialogRef.close(_this11.message);
          });
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-dashboard/message/message.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.component.scss */
      "./src/app/applications-dashboard/message/message.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], Object])], MessageComponent);
    /***/
  },

  /***/
  "./src/app/applications-stats/applications-stats.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/applications-stats/applications-stats.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsStatsApplicationsStatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy1zdGF0cy9hcHBsaWNhdGlvbnMtc3RhdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications-stats/applications-stats.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/applications-stats/applications-stats.component.ts ***!
    \********************************************************************/

  /*! exports provided: ApplicationsStatsComponent */

  /***/
  function srcAppApplicationsStatsApplicationsStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsStatsComponent", function () {
      return ApplicationsStatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApplicationsStatsComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsStatsComponent(dataService) {
        _classCallCheck(this, ApplicationsStatsComponent);

        this.dataService = dataService;
        this.stats = [];
      }

      _createClass(ApplicationsStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStats();
        }
      }, {
        key: "getStats",
        value: function getStats() {
          var _this12 = this;

          var date = new Date();
          var thisMonth = "".concat(date.getFullYear(), "-").concat(('0' + date.getMonth()).slice(-2), "-01");
          console.log(thisMonth);
          var query = "query{\n        users(where: { applications: {createdAt_gte: \"".concat(thisMonth, "\"} }){\n            id\n            fullName\n            avatar{\n              url\n            }\n            applications(sort: \"createdAt:desc\"){\n                id\n                moneyIn\n                approved\n                invoiceOut\n                invoicePaid\n                createdAt\n            }\n        }\n    }");
          this.dataService.getData(query).subscribe(function (res) {
            if (res.data.users.length > 0) {
              var statsData = res.data.users;
              statsData.forEach(function (element) {
                // console.log(element);
                var stats = {
                  id: element.id,
                  name: element.fullName,
                  avatar: element.avatar.length > 0 ? element.avatar['0'].url : '',
                  applications: element.applications.length,
                  moneyI: element.applications.reduce(function (total, apps) {
                    return apps.moneyIn === true ? total + 1 : total;
                  }, 0),
                  approved: element.applications.reduce(function (total, apps) {
                    return apps.approved === true ? total + 1 : total;
                  }, 0),
                  invoiceOut: element.applications.reduce(function (total, apps) {
                    return apps.invoiceOut === true ? total + 1 : total;
                  }, 0),
                  invoicePaid: element.applications.reduce(function (total, apps) {
                    return apps.invoicePaid === true ? total + 1 : total;
                  }, 0)
                };

                _this12.stats.push(stats);
              });

              _this12.stats.sort(function (a, b) {
                return a.applications > b.applications ? -1 : b.applications > a.applications ? 1 : 0;
              });

              console.log(_this12.stats);
            }
          });
        }
      }]);

      return ApplicationsStatsComponent;
    }();

    ApplicationsStatsComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    ApplicationsStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-applications-stats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./applications-stats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications-stats/applications-stats.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./applications-stats.component.scss */
      "./src/app/applications-stats/applications-stats.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], ApplicationsStatsComponent);
    /***/
  },

  /***/
  "./src/app/applications/applications.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/applications/applications.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsApplicationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth {\n  font-weight: 900;\n  color: #000;\n}\n\ntd, th {\n  width: 8% !important;\n}\n\n.mat-column-address {\n  width: 20% !important;\n}\n\n.fat-btn {\n  margin: 4px 0px 0px;\n  height: 50px;\n}\n\n.mat-button-toggle-group {\n  margin-top: 5px;\n}\n\n.mat-column-edit button {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgcGFkZGluZzogMjBweDtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50aHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDA7XG4gIC8vIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFkZHJlc3N7XG4gIHdpZHRoOiAyMCUgICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5tYXQtY29sdW1uLWNyZWF0ZURhdGV7XG4vLyAgIHdpZHRoOiAyMCUgICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5mYXQtYnRue1xuICBtYXJnaW46IDRweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWF0LWNvbHVtbi1lZGl0IGJ1dHRvbntcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFkZHJlc3Mge1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi5mYXQtYnRuIHtcbiAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXQtY29sdW1uLWVkaXQgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/applications/applications.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/applications/applications.component.ts ***!
    \********************************************************/

  /*! exports provided: ApplicationsComponent */

  /***/
  function srcAppApplicationsApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
      return ApplicationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-application/create-application.component */
    "./src/app/applications/create-application/create-application.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApplicationsComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsComponent(dialog, dataService, authService, socketService) {
        _classCallCheck(this, ApplicationsComponent);

        this.dialog = dialog;
        this.dataService = dataService;
        this.authService = authService;
        this.socketService = socketService;
        this.displayedColumns = [];
        this.applications = [];
        this.loading = true;
        this.startPage = 0;
        this.limitPage = 10;
        this.search = '';
        this.applicationType = 'Leasing';
        this.editing = [];
        this.applicationData = {
          id: '',
          date: '',
          createById: '',
          createdAt: '',
          address: '',
          price: null,
          moneyIn: null,
          approved: null,
          invoiceOut: null,
          invoicePaid: null,
          completed: null,
          offerOut: null,
          listingAgreement: null,
          offerExecuted: null,
          closed: null,
          appType: '',
          denied: null
        };
        this.searchUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.applications);
      }

      _createClass(ApplicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved', 'denied', 'edit'];
          this.loading = true;
          this.dataSource.sort = this.sort;
          var user = this.authService.currentUserValue;
          this.userId = user.user.id;
          this.getApplications();
          this.searchUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])()).subscribe(function (value) {
            _this13.search = value;

            _this13.getApplications();
          });
          this.socketService.get().subscribe(function (method) {
            // console.log(method);
            if (typeof _this13[method] === 'function') {
              _this13[method]();
            }
          });
        }
      }, {
        key: "keyUpLoading",
        value: function keyUpLoading() {
          this.loading = true;
        }
      }, {
        key: "displayCol",
        value: function displayCol(applicationType) {
          this.loading = true;
          this.applicationType = applicationType;

          switch (applicationType) {
            case 'Leasing':
              this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved', 'denied', 'edit'];
              break;

            case 'Listing':
              this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'listingAgreement', 'offerExecuted', 'closed', 'edit'];
              break;

            case 'Buying':
              this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'offerOut', 'offerExecuted', 'closed', 'edit'];
              break;

            default:
              break;
          }

          this.getApplications();
        }
      }, {
        key: "getApplications",
        value: function getApplications() {
          var _this14 = this;

          var where = "{\n      agent: \"".concat(this.userId, "\",\n      address_contains: \"").concat(this.search, "\",\n      applicationType: \"").concat(this.applicationType, "\"\n    }");
          var query = "\n    query{\n        applications(sort: \"createdAt:desc\", start: ".concat(this.startPage, ", limit: ").concat(this.limitPage, ", where: ").concat(where, ") {\n            id,\n            applicationType,\n            address,\n            approved,\n            createdAt,\n            denied,\n            listingAgreement,\n            offerOut,\n            offerExecuted,\n            closed,\n            moneyIn,\n            price,\n            agent {\n                id\n                fullName\n            }\n        }\n        applicationsConnection (where: ").concat(where, ") {\n            aggregate {\n                count\n            }\n        }\n    }");
          this.dataService.getData(query).subscribe(function (_ref3) {
            var data = _ref3.data,
                loading = _ref3.loading;
            _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](data.applications);
            _this14.totalPages = data.applicationsConnection.aggregate.count;
            _this14.loading = false;
          });
        }
      }, {
        key: "createApp",
        value: function createApp() {
          var _this15 = this;

          var dialogRef = this.dialog.open(_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_3__["CreateApplicationComponent"], {
            width: '550px',
            data: {
              data: this.applicationData,
              applicationType: this.applicationType
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            _this15.socketService.send('public', 'getApplications');

            _this15.getApplications();
          });
        }
      }, {
        key: "edit",
        value: function edit(appId) {
          if (!this.editing.includes(appId)) {
            this.editing.push(appId);
          }
        }
      }, {
        key: "save",
        value: function save(appId) {
          if (this.editing.includes(appId)) {
            this.editing.splice(this.editing.indexOf(appId), 1);
          }
        }
      }, {
        key: "updateApp",
        value: function updateApp(app, field) {
          var _this16 = this;

          if (this.editing.includes(app.id)) {
            this.loading = true;
            app[field] = !app[field];
            var appData = "mutation {\n          updateApplication(input: {\n            where: {\n              id: \"".concat(app.id, "\"\n            },\n            data: {\n              ").concat(field, ": ").concat(app[field], "\n            }\n          }) {\n            application {\n              id\n            }\n          }\n        }");
            this.dataService.updateData(appData).subscribe(function () {
              _this16.socketService.send('public', 'getApplications');

              _this16.getApplications();
            });
          }
        }
      }, {
        key: "paginator",
        value: function paginator(e) {
          this.loading = true;
          this.startPage = e.pageIndex !== 0 ? e.pageIndex * e.pageSize : 0;
          this.limitPage = e.pageSize;
          this.getApplications();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.closeConnection();
        }
      }]);

      return ApplicationsComponent;
    }();

    ApplicationsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])], ApplicationsComponent.prototype, "sort", void 0);
    ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-applications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./applications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./applications.component.scss */
      "./src/app/applications/applications.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])], ApplicationsComponent);
    /***/
  },

  /***/
  "./src/app/applications/create-application/create-application.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/applications/create-application/create-application.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsCreateApplicationCreateApplicationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n  width: 100%;\n}\n\n.full-width mat-button-toggle {\n  width: 50%;\n}\n\n.margin-botton {\n  margin: 10px 0px 5px;\n}\n\n.mat-dialog-content {\n  overflow: hidden;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.margin {\n  margin: 10px;\n}\n\n.modal-loading {\n  top: -25px;\n  height: 5px;\n  left: -20px;\n  width: calc(100% + 40px);\n}\n\n.mat-button-toggle-group {\n  margin: 5px 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMvY3JlYXRlLWFwcGxpY2F0aW9uL2NyZWF0ZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwbGljYXRpb25zL2NyZWF0ZS1hcHBsaWNhdGlvbi9jcmVhdGUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb25zL2NyZWF0ZS1hcHBsaWNhdGlvbi9jcmVhdGUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIG1hdC1idXR0b24tdG9nZ2xle1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWFyZ2luLWJvdHRvbntcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHg7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50e1xuICBvdmVyZmxvdzogIGhpZGRlbjtcbn1cblxuLmltYWdlLXVwbG9hZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hcmdpbntcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1vZGFsLWxvYWRpbmd7XG4gIHRvcDogLTI1cHg7XG4gIGhlaWdodDogNXB4O1xuICBsZWZ0OiAtMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7XG4gIG1hcmdpbjogNXB4IDBweCAxNXB4O1xufSIsIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIG1hdC1idXR0b24tdG9nZ2xlIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1hcmdpbi1ib3R0b24ge1xuICBtYXJnaW46IDEwcHggMHB4IDVweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWFnZS11cGxvYWQgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tb2RhbC1sb2FkaW5nIHtcbiAgdG9wOiAtMjVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGxlZnQ6IC0yMHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgNDBweCk7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gIG1hcmdpbjogNXB4IDBweCAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/applications/create-application/create-application.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/applications/create-application/create-application.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CreateApplicationComponent */

  /***/
  function srcAppApplicationsCreateApplicationCreateApplicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateApplicationComponent", function () {
      return CreateApplicationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var CreateApplicationComponent =
    /*#__PURE__*/
    function () {
      function CreateApplicationComponent(dialogRef, authService, dataService, data) {
        _classCallCheck(this, CreateApplicationComponent);

        this.dialogRef = dialogRef;
        this.authService = authService;
        this.dataService = dataService;
        this.data = data;
        this.loading = false;
        this.hide = true;
        this.createApplicationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          moneyIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          approved: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          denied: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          offerOut: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          listingAgreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          offerExecuted: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          closed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
      }

      _createClass(CreateApplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.authService.currentUserValue;
          this.userId = user.user.id;
          this.appType = this.data.applicationType;
          console.log(this.data.applicationType);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "createApplication",
        value: function createApplication() {
          var _this17 = this;

          var appData = "mutation{\n        createApplication(input: {\n        data: {\n          address: \"".concat(this.createApplicationForm.value.address, "\",\n          price: ").concat(this.createApplicationForm.value.price, ",\n          moneyIn: ").concat(this.createApplicationForm.value.moneyIn, ",\n          approved: ").concat(this.createApplicationForm.value.approved, ",\n          denied: ").concat(this.createApplicationForm.value.denied, ",\n          offerOut: ").concat(this.createApplicationForm.value.offerOut, ",\n          listingAgreement: ").concat(this.createApplicationForm.value.listingAgreement, ",\n          offerExecuted: ").concat(this.createApplicationForm.value.offerExecuted, ",\n          closed: ").concat(this.createApplicationForm.value.closed, ",\n          applicationType: ").concat(this.appType, ",\n          agent: \"").concat(this.userId, "\"\n        }\n      }) {\n        application {\n          address\n          id\n          agent {\n            id\n          }\n        }\n      }\n    }");
          this.dataService.createData(appData).subscribe(function (res) {
            _this17.dialogRef.close();
          });
        }
      }]);

      return CreateApplicationComponent;
    }();

    CreateApplicationComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CreateApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-application',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-application.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/create-application/create-application.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-application.component.scss */
      "./src/app/applications/create-application/create-application.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], Object])], CreateApplicationComponent);
    /***/
  },

  /***/
  "./src/app/applications/manage-applications/manage-applications.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/applications/manage-applications/manage-applications.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsManageApplicationsManageApplicationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 5% !important;\n}\n\n.mat-column-createBy {\n  width: 9% !important;\n}\n\n.mat-column-address {\n  width: 14% !important;\n}\n\n.fat-btn {\n  margin: 4px 0px 0px;\n  height: 50px;\n}\n\nth {\n  font-weight: 900;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9hcHBsaWNhdGlvbnMvbWFuYWdlLWFwcGxpY2F0aW9ucy9tYW5hZ2UtYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBsaWNhdGlvbnMvbWFuYWdlLWFwcGxpY2F0aW9ucy9tYW5hZ2UtYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbnMvbWFuYWdlLWFwcGxpY2F0aW9ucy9tYW5hZ2UtYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogNSUgIWltcG9ydGFudDtcbn1cbi5tYXQtY29sdW1uLWNyZWF0ZUJ5e1xuICB3aWR0aDogOSUgICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNvbHVtbi1hZGRyZXNze1xuICB3aWR0aDogMTQlICAhaW1wb3J0YW50O1xufVxuLy8gLm1hdC1jb2x1bW4tY3JlYXRlRGF0ZXtcbi8vICAgd2lkdGg6IDglICAhaW1wb3J0YW50O1xuLy8gfVxuXG4uZmF0LWJ0bntcbiAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG50aHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDA7XG4gIC8vIGZvbnQtc2l6ZTogMTZweDtcbn1cbiIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWNyZWF0ZUJ5IHtcbiAgd2lkdGg6IDklICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWFkZHJlc3Mge1xuICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG59XG5cbi5mYXQtYnRuIHtcbiAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/applications/manage-applications/manage-applications.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/applications/manage-applications/manage-applications.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ManageApplicationsComponent */

  /***/
  function srcAppApplicationsManageApplicationsManageApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageApplicationsComponent", function () {
      return ManageApplicationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _create_application_create_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../create-application/create-application.component */
    "./src/app/applications/create-application/create-application.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ManageApplicationsComponent =
    /*#__PURE__*/
    function () {
      function ManageApplicationsComponent(dialog, dataService, afAuth) {
        _classCallCheck(this, ManageApplicationsComponent);

        this.dialog = dialog;
        this.dataService = dataService;
        this.afAuth = afAuth;
        this.displayedColumns = ['address', 'createDate', 'createBy', 'saleType', 'price', 'offerOut', 'listingAgreement', 'offerExecuted', 'closed', 'moneyIn', 'approved', 'denied', 'invoiceOut', 'invoicePaid', 'completed']; // public users: Users[] = [
        //   {id: 'ewweewqe', name: 'Marcel Cruz', email: 'marclcruz85@gmail.com', isAdmin: true, isActive: false, teamId: null},
        // ];

        this.applications = [];
        this.loading = false;
        this.years = [{
          display: '2019',
          value: '2019'
        }, {
          display: '2020',
          value: '2020'
        }, {
          display: '2021',
          value: '2021'
        }];
        this.months = [{
          display: 'January',
          value: '01'
        }, {
          display: 'January',
          value: '02'
        }, {
          display: 'January',
          value: '03'
        }, {
          display: 'January',
          value: '04'
        }, {
          display: 'January',
          value: '05'
        }, {
          display: 'January',
          value: '06'
        }, {
          display: 'January',
          value: '07'
        }, {
          display: 'January',
          value: '08'
        }, {
          display: 'January',
          value: '09'
        }, {
          display: 'January',
          value: '10'
        }, {
          display: 'January',
          value: '11'
        }, {
          display: 'January',
          value: '12'
        }];
        this.applicationData = {
          id: '',
          date: '',
          createById: '',
          createdAt: '',
          address: '',
          price: null,
          moneyIn: null,
          approved: null,
          invoiceOut: null,
          invoicePaid: null,
          completed: null,
          offerOut: null,
          listingAgreement: null,
          offerExecuted: null,
          closed: null,
          appType: '',
          denied: null
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.applications);
      }

      _createClass(ManageApplicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.loading = true;
          var today = new Date();
          var monthCurr = String(today.getMonth() + 1).padStart(2, '0');
          var yearCurr = today.getFullYear();
          console.log(yearCurr);
          this.selectedMonth = monthCurr.toString();
          this.selectedYear = yearCurr.toString();
          this.dataSource.sort = this.sort;
          this.afAuth.user.subscribe(function (res) {
            if (res) {
              _this18.userId = res.uid;

              _this18.getApplications();
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var dialogRef = this.dialog.open(_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_2__["CreateApplicationComponent"], {
            width: '550px',
            data: this.applicationData
          });
          dialogRef.afterClosed().subscribe();
        } // getApplications() {
        //     this.dataService.getUserApplications(this.userId).subscribe(res => {
        //       console.log(res);
        //       this.dataSource = new MatTableDataSource<Application>(res);
        //       this.loading = false;
        //     });
        // }

      }, {
        key: "getApplications",
        value: function getApplications() {
          var _this19 = this;

          var start = "".concat(this.selectedYear).concat(this.selectedMonth, "01");
          var end = "".concat(this.selectedYear).concat(this.selectedMonth, "31");
          this.dataService.getAdminApplications(start, end).subscribe(function (res) {
            console.log(res); // this.topAgent = res['topAgents']['0'];
            // const appsData: Application[] = res;
            // this.applications = appsData;

            _this19.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res);
            _this19.loading = false;
          });
        }
      }, {
        key: "updateApp",
        value: function updateApp(app, field) {
          // this.loading = true;
          app[field] = !app[field];
          this.dataService.updateApp(app).then(function (res) {
            console.log('record Updated ', res);
          }).catch(function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "changeMonth",
        value: function changeMonth(event) {
          this.selectedMonth = event.value;
          console.log(this.selectedMonth);
          this.getApplications();
        }
      }, {
        key: "changeYear",
        value: function changeYear(event) {
          this.selectedYear = event.value;
          console.log(this.selectedMonth);
          this.getApplications();
        }
      }]);

      return ManageApplicationsComponent;
    }();

    ManageApplicationsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])], ManageApplicationsComponent.prototype, "sort", void 0);
    ManageApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-manage-applications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-applications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/manage-applications/manage-applications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-applications.component.scss */
      "./src/app/applications/manage-applications/manage-applications.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])], ManageApplicationsComponent);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(fireAuth) {
        var _this20 = this;

        _classCallCheck(this, AuthService);

        this.fireAuth = fireAuth;
        this.fireAuth.authState.subscribe(function (res) {
          if (res) {
            _this20.userDetails = res;
          }
        });
      }

      _createClass(AuthService, [{
        key: "getUser",
        value: function getUser() {
          if (this.userDetails) {
            return this.userDetails;
          }
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "register",
        value: function register(user, password) {
          return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, password); // .then(res => {
          //   user.id = res.user.uid;
          //   return this.dataService.createUser(user);
          // }).catch(err => {
          //   console.log(err);
          // });
        }
      }, {
        key: "forgot",
        value: function forgot(email) {
          return this.fireAuth.auth.sendPasswordResetEmail(email);
        }
      }, {
        key: "sendVerificationEmail",
        value: function sendVerificationEmail() {
          return this.fireAuth.auth.currentUser.sendEmailVerification();
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return this.fireAuth.auth.signOut();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/core/input.ts":
  /*!*******************************!*\
    !*** ./src/app/core/input.ts ***!
    \*******************************/

  /*! exports provided: Input */

  /***/
  function srcAppCoreInputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Input", function () {
      return Input;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Input = function Input() {
      _classCallCheck(this, Input);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(router, zone) {
        _classCallCheck(this, DashboardComponent);

        this.router = router;
        this.zone = zone;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.zone.run(function () {
            return _this21.router.navigateByUrl('/dashboard/applications-dashboard');
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(afStore, apollo) {
        _classCallCheck(this, DataService);

        this.afStore = afStore;
        this.apollo = apollo;
      }

      _createClass(DataService, [{
        key: "getData",
        value: function getData(query) {
          return this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject(), query),
            fetchPolicy: 'network-only',
            errorPolicy: 'all'
          });
        }
      }, {
        key: "createData",
        value: function createData(data) {
          return this.apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject2(), data)
          });
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          return this.apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject3(), data)
          });
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.afStore.collection('users').doc(user.id).set(user);
        }
      }, {
        key: "createUserAndTeam",
        value: function createUserAndTeam(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.createTeam().then(function (res) {
                      user.teamId = res.id;

                      _this22.afStore.collection('users').doc(user.id).set(user);
                    }).catch(function (err) {
                      return console.log(err);
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "createTeam",
        value: function createTeam() {
          return this.afStore.collection('teams').add({});
        }
      }, {
        key: "getUser",
        value: function getUser(userId) {
          return this.afStore.collection('users').doc(userId);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.afStore.collection('users').valueChanges();
        } // createApp(appData: Application) {
        //   return this.afStore.collection('applications').doc(appData.id).set(appData);
        // }

      }, {
        key: "getApplications",
        value: function getApplications(docName) {
          return this.afStore.collection('references').doc(docName).valueChanges();
        }
      }, {
        key: "getAllApps",
        value: function getAllApps() {
          return this.afStore.collection('applications').valueChanges();
        }
      }, {
        key: "getAdminApplications",
        value: function getAdminApplications(start, end) {
          return this.afStore.collection('applications', function (ref) {
            return ref.orderBy('date').startAt(start).endAt(end);
          }).valueChanges();
        }
      }, {
        key: "getUserApplications",
        value: function getUserApplications(userId) {
          return this.afStore.collection('applications', function (ref) {
            return ref.where('createById', '==', userId).where('completed', '==', false);
          }).valueChanges();
        }
      }, {
        key: "getStats",
        value: function getStats(thisMonth) {
          return this.afStore.collection('statistics', function (ref) {
            return ref.orderBy('statsData.app', 'desc').where('range', '==', 'monthly').where('statsData.date', '==', thisMonth);
          }).valueChanges();
        }
      }, {
        key: "updateApp",
        value: function updateApp(app) {
          console.log(app);
          return this.afStore.collection('applications').doc(app.id).set(app, {
            merge: true
          });
        }
      }, {
        key: "saveMessage",
        value: function saveMessage(message) {
          return this.afStore.collection('message').doc('dashboard-message').set({
            message: message
          }, {
            merge: true
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.afStore.collection('message').doc('dashboard-message').valueChanges();
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]])], DataService);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  background: #fafafa;\n  height: 100%;\n}\n\nmat-card {\n  max-width: 30%;\n  min-width: 30%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.padding {\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFHQSxZQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgLy8gYmFja2dyb3VuZDogcmdiKDU3LDQ4LDIxOSk7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzOTMwZGIgMCUsICMwMDk1ZmYgMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1jYXJke1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG5cbi5mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZGRpbmd7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuIiwiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIG1pbi13aWR0aDogMzAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(authService, snackBard, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
        this.snackBard = snackBard;
        this.router = router;
        this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])
        });
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgot",
        value: function forgot() {
          var _this23 = this;

          var email = this.forgotForm.value.email;
          this.authService.forgotPassword(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            // this.presentToast('Please check your emails for a password reset directions');
            _this23.snackBard.open('Please check your email for instructions', null, {
              duration: 3000
            });

            _this23.router.navigate(['/login']);
          }, function (error) {
            console.log(error);
            var errorMessage = error['0'].messages['0'].message;

            _this23.snackBard.open(errorMessage, null, {
              duration: 3000
            }); // this.presentToast(errorMessage);
            // this.loading = false;

          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/forgot-password/forgot-password.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/form-list/form-list.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/form-list/form-list.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormListFormListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgcGFkZGluZzogMjBweDtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAxNSU7XG59XG4iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAxNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/form-list/form-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/form-list/form-list.component.ts ***!
    \**************************************************/

  /*! exports provided: FormListComponent */

  /***/
  function srcAppFormListFormListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormListComponent", function () {
      return FormListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var forms = [{
      file: 'ar-11',
      name: 'AR-11',
      details: 'Alien’s Change of Address Card'
    }, {
      file: 'n-400',
      name: 'N-400',
      details: 'Application for Naturalization'
    }, {
      file: 'g-28',
      name: 'G-28',
      details: 'Notice of Entry of Appearance as Attorney or Accredited Representative'
    }, {
      file: 'i-131',
      name: 'I-131',
      details: 'Application for Travel Document'
    }, {
      file: 'i-90',
      name: 'I-90',
      details: 'Alien’s Change of Address Card'
    }];

    var FormListComponent =
    /*#__PURE__*/
    function () {
      function FormListComponent() {
        _classCallCheck(this, FormListComponent);

        this.displayedColumns = ['name', 'details']; // Assign the data to the data source for the table to render

        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](forms);
      }

      _createClass(FormListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return FormListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], FormListComponent.prototype, "sort", void 0);
    FormListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-list/form-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-list.component.scss */
      "./src/app/form-list/form-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormListComponent);
    /***/
  },

  /***/
  "./src/app/form/form/form.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/form/form/form.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin: 2rem 0 3rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.form-value {\n  position: absolute;\n  left: 1rem;\n  font-size: 1.5rem;\n}\n\n#input-form {\n  position: absolute;\n  z-index: 1;\n}\n\n#input-form input {\n  font-size: 1.1rem;\n  position: absolute;\n  background: transparent;\n  border: none;\n}\n\n#input-form textarea {\n  font-size: 1.1rem;\n  position: absolute;\n  background: transparent;\n  border: none;\n}\n\n#input-form .mat-form-field {\n  font-size: 1.1rem;\n  position: absolute;\n  background: transparent;\n  border: none;\n}\n\n#input-form select {\n  font-size: 0.9em;\n  position: absolute;\n  background: transparent;\n  border: none;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\ninput[type=radio] {\n  margin-left: 0px !important;\n  margin-top: 1px !important;\n}\n\n.form-actions {\n  position: fixed;\n  right: 0px;\n  margin: 10px 15px;\n  z-index: 150;\n}\n\n.form-actions .md-24 {\n  font-size: 28px;\n}\n\n.loading-top {\n  position: absolute;\n}\n\n.page {\n  position: relative;\n}\n\n.paginator {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  text-align: center;\n  background: #000;\n  color: #fff;\n  opacity: 0.6 !important;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURBSTtFQUNJLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDUjs7QURFSTtFQUNJLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNEUjs7QURJSTtFQUNFLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNITjs7QURRSTtFQUNFLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtBQ1BOOztBRGFBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGOztBRGNBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNYRCIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnJlbSAwIDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS12YWx1ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI2lucHV0LWZvcm0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgICYgaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgICYgdGV4dGFyZWEge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgICYgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIH1cblxuICAgICYgc2VsZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgICAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB9XG59XG5cbmlucHV0W3R5cGU9cmFkaW9de1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1hY3Rpb25ze1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICB6LWluZGV4OiAxNTA7XG59XG5cbi5mb3JtLWFjdGlvbnMgLm1kLTI0e1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5sb2FkaW5nLXRvcHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGFnZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5wYWdpbmF0b3J7XG5wb3NpdGlvbjogZml4ZWQ7XG53aWR0aDogMTAwJTtcbmJvdHRvbTogMHB4O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBiYWNrZ3JvdW5kOiAjMDAwO1xuIGNvbG9yOiAjZmZmO1xuIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xuIHotaW5kZXg6IDk5OTtcbn1cblxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnJlbSAwIDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS12YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbiNpbnB1dC1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuI2lucHV0LWZvcm0gaW5wdXQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuI2lucHV0LWZvcm0gdGV4dGFyZWEge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuI2lucHV0LWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNpbnB1dC1mb3JtIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICB6LWluZGV4OiAxNTA7XG59XG5cbi5mb3JtLWFjdGlvbnMgLm1kLTI0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubG9hZGluZy10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnaW5hdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/form/form/form.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/form/form/form.component.ts ***!
    \*********************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFormFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../core/input */
    "./src/app/core/input.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! print-js */
    "./node_modules/print-js/dist/print.js");
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_7__);

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent(_fb, activateRoute, http) {
        _classCallCheck(this, FormComponent);

        this._fb = _fb;
        this.activateRoute = activateRoute;
        this.http = http;
        this.dpiRatio = 96 / 72;
        this.inputList = [];
        this.zoom = 1;
        this.isChecked = false; // public pageNumber: number;

        this.page = 1;
        this.isLoaded = false;
        this.fomrValues = [{
          name: 'Family Name Last Name',
          value: 'Marcel'
        }, {
          name: 'LastName',
          value: 'Cruz'
        }, {
          name: 'Group1',
          value: 'Choice4'
        }];
        this.myForm = this._fb.group({});
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.activateRoute.paramMap.subscribe(function (params) {
            _this24.formName = params.get('form');
            _this24.contactId = params.get('id');
            _this24.loading = false;
            _this24.pdfSrc = "../../assets/".concat(_this24.formName, ".pdf");
          });
        }
      }, {
        key: "createInput",
        value: function createInput(annotation) {
          var rect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var pageNumber = arguments.length > 2 ? arguments[2] : undefined;
          var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](annotation.buttonValue || ''); // console.log(annotation);
          // annotation.filedValue = 'Marcel';

          var input = new _core_input__WEBPACK_IMPORTED_MODULE_1__["Input"]();
          input.name = annotation.fieldName;
          input.pageNumber = pageNumber;

          if (annotation.fieldType === 'Tx' && !annotation.multiLine && !annotation.comb && annotation.alternativeText !== 'date') {
            input.type = 'text';
            input.value = annotation.buttonValue || '';
          }

          if (annotation.comb) {
            input.type = 'comb';
            input.value = annotation.buttonValue || '';
            input.class = annotation.comb ? 'comb' : '';
            input.spacing = (rect[2] - rect[0]) / annotation.maxLen - 10.5;
            input.maxLen = annotation.maxLen;
          }

          if (annotation.alternativeText === 'date') {
            input.type = 'date';
            input.value = annotation.buttonValue || '';
          }

          if (annotation.multiLine) {
            input.type = 'textarea';
            input.value = annotation.buttonValue || '';
          }

          if (annotation.fieldType === 'Btn' && !annotation.checkBox) {
            // console.log(annotation);
            input.type = 'radio';
            input.value = annotation.buttonValue || false;
            formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](annotation.fieldName || false);
          }

          if (annotation.checkBox) {
            input.type = 'checkbox';
            input.value = true;
            formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](annotation.buttonValue || false);
          }

          if (annotation.fieldType === 'Ch') {
            // console.log(annotation);
            input.type = 'select';
            input.value = annotation.fieldValue || '';
            input.options = annotation.options;
          } // Calculate all the positions and sizes


          if (rect) {
            input.top = rect[1] - (rect[1] - rect[3]);
            input.left = rect[0];
            input.height = (rect[1] - rect[3]) * .9;
            input.width = rect[2] - rect[0];
          }

          this.inputList.push(input);
          return formControl;
        }
      }, {
        key: "addInput",
        value: function addInput(annotation) {
          var rect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var pageNumber = arguments.length > 2 ? arguments[2] : undefined;
          // add input to page
          this.myForm.addControl(annotation.fieldName, this.createInput(annotation, rect, pageNumber));
        }
      }, {
        key: "getInputPosition",
        value: function getInputPosition(input) {
          return {
            top: "".concat(input.top, "px"),
            left: "".concat(input.left, "px"),
            height: "".concat(input.height, "px"),
            width: "".concat(input.width, "px")
          };
        }
      }, {
        key: "getInputPositionCheckBox",
        value: function getInputPositionCheckBox(input) {
          return {
            top: "".concat(input.top + 1, "px"),
            left: "".concat(input.left + 1, "px"),
            height: "".concat(input.height, "px"),
            width: "".concat(input.width, "px")
          };
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          var _this25 = this;

          var prevZoom = "zoom_".concat(this.zoom);
          var actualZoom = 'zoom_' + (this.zoom + .25);
          document.getElementById('input-form').classList.remove(prevZoom);
          document.getElementById('input-form').classList.add(actualZoom);
          var scale = this.zoom + .4;
          this.checkBoxSize = "scale(".concat(scale, ")");
          this.inputList = this.inputList.map(function (i) {
            i.left *= .25 / _this25.zoom + 1;
            i.top *= .25 / _this25.zoom + 1;
            i.width *= .25 / _this25.zoom + 1;
            i.height *= .25 / _this25.zoom + 1;
            i.spacing = i.width / i.maxLen - 10.5;
            return i;
          });
          this.zoom += .25;
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          var _this26 = this;

          var prevZoom = "zoom_".concat(this.zoom);
          var actualZoom = 'zoom_' + (this.zoom - .25);
          document.getElementById('input-form').classList.remove(prevZoom);
          document.getElementById('input-form').classList.add(actualZoom);
          var scale = this.zoom - .4;
          this.checkBoxSize = "scale(".concat(scale, ")");
          this.inputList = this.inputList.map(function (i) {
            i.left *= 1 - .25 / _this26.zoom;
            i.top *= 1 - .25 / _this26.zoom;
            i.width *= 1 - .25 / _this26.zoom;
            i.height *= 1 - .25 / _this26.zoom;
            i.spacing = i.width / i.maxLen - 10.5;
            return i;
          });
          this.zoom -= .25;
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          this.page--;
        }
      }, {
        key: "loadComplete",
        value: function loadComplete(pdf) {
          var _this27 = this;

          this.loading = true;
          this.totalPages = pdf.numPages;

          var _loop = function _loop(i) {
            // track the current page
            var currentPage = null;
            pdf.getPage(i).then(function (p) {
              currentPage = p; // get the annotations of the current page

              return p.getAnnotations();
            }).then(function (ann) {
              // ugly cast due to missing typescript definitions
              // please contribute to complete @types/pdfjs-dist
              var annotations = ann;
              annotations.filter(function (a) {
                return a.subtype === 'Widget';
              }) // get the form field annotation only
              .forEach(function (a) {
                // console.log(currentPage);
                // get the rectangle that represent the single field
                // and resize it according to the current DPI
                var pageNumber = currentPage.pageIndex + 1;
                var fieldRect = currentPage.getViewport(_this27.dpiRatio).convertToViewportRectangle(a.rect); // const fieldTop = ((i - 1) * currentPage.getViewport(this.dpiRatio).height) + ((i - 1) * 9);
                // add the corresponding input

                _this27.addInput(a, fieldRect, pageNumber);
              });
            });
          };

          for (var i = 1; i <= pdf.numPages; i++) {
            _loop(i);
          }

          setTimeout(function () {
            console.log('loaded');
            _this27.loading = false;
            _this27.isLoaded = true; // this.fomrValues.map(res => {
            //   this.myForm.get(res.name).setValue(res.value);
            // });
          }, 1000); // console.log('finih')
        }
      }, {
        key: "downloadForm",
        value: function downloadForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this28 = this;

            var headers, formData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.loading = true;
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                    _context2.next = 4;
                    return this.checkValue();

                  case 4:
                    formData = _context2.sent;
                    headers = headers.set('Accept', ['application/pdf', 'application/json']);
                    this.http.post("http://localhost:3000/api/".concat(this.formName), formData, {
                      headers: headers,
                      responseType: 'blob'
                    }).subscribe(function (resp) {
                      console.log('Response: ', resp);
                      var file = new Blob([resp], {
                        type: 'application/pdf'
                      });
                      Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(file, 'testData.pdf');
                      _this28.loading = false;
                    }); // console.log({formType: 'ar-11', formData: this.myForm.value});

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "printForm",
        value: function printForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this29 = this;

            var formData, headers;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.loading = true;
                    _context3.next = 3;
                    return this.checkValue();

                  case 3:
                    formData = _context3.sent;
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                    headers = headers.set('Accept', ['application/pdf', 'application/json']);
                    this.http.post("http://localhost:3000/api/".concat(this.formName), formData, {
                      headers: headers,
                      responseType: 'blob'
                    }).subscribe(function (resp) {
                      // console.log('Response: ', resp);
                      var file = new Blob([resp], {
                        type: 'application/pdf'
                      });
                      _this29.blobUrl = URL.createObjectURL(file);
                      print_js__WEBPACK_IMPORTED_MODULE_7__({
                        printable: _this29.blobUrl,
                        type: 'pdf'
                      });
                      _this29.loading = false;
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkValue",
        value: function checkValue() {
          var formData = this.myForm.value;

          for (var key in formData) {
            if (formData[key] === true) {
              formData[key] = 'On';
            } else if (formData[key] === false) {
              formData[key] = 'Off';
            }
          }

          return formData;
        }
      }, {
        key: "radioClicked",
        value: function radioClicked(input) {
          console.log(input);
          var radioName = input.name;
          var formValue = this.myForm.value[radioName];
          var radioValue = input.value;

          if (formValue === radioValue) {
            this.myForm.get(radioName).setValue(radioName);
          }
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form/form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/form/form/form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], FormComponent);
    /***/
  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");

    var uri = 'https://backend.apartmentsource.com/graphql'; // <-- add the URL of the GraphQL server here

    function createApollo(httpLink) {
      return {
        link: httpLink.create({
          uri: uri
        }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
      }]
    })], GraphQLModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  background: #fafafa;\n  height: 100%;\n}\n\nmat-card {\n  max-width: 30%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.padding {\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUdBLFlBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAvLyBiYWNrZ3JvdW5kOiByZ2IoNTcsNDgsMjE5KTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzM5MzBkYiAwJSwgIzAwOTVmZiAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWNhcmR7XG4gIG1heC13aWR0aDogMzAlO1xufVxuXG4uZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWRkaW5ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbiIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authenticationService, router, fireAuth, snackBard, zone) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.fireAuth = fireAuth;
        this.snackBard = snackBard;
        this.zone = zone;
        this.hide = true;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            this.router.navigate(['/dashboard']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this30 = this;

          var email = this.loginForm.value.email;
          var password = this.loginForm.value.password;
          this.authenticationService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            // this.router.navigateByUrl(this.returnUrl);
            _this30.router.navigate(['/dashboard']).then(function () {// this.loading.dismiss();
            });
          }, function (error) {
            console.log(error);
            var errorMessage = error['0'].messages['0'].message;

            _this30.snackBard.open(errorMessage, null, {
              duration: 3000
            }); // this.loading.dismiss();

          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/navigation/navigation.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.sub-menu {\n  font-size: 0.7em;\n  margin: 5px;\n  color: #a9a9a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zdWItbWVudXtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjYTlhOWE5O1xufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zdWItbWVudSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogI2E5YTlhOTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent(breakpointObserver, authService, router, socketService) {
        var _this31 = this;

        _classCallCheck(this, NavigationComponent);

        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.socketService = socketService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
          return result.matches;
        }));
        this.authService.currentUser.subscribe(function (data) {
          _this31.user = data;

          if (data && data.user && data.user.avatar) {// this.userAvatar = `https://backend.apartmentsource.com//${data.user.avatar.url}`;
          }
        });
        this.socketService.get().subscribe(function (method) {
          // console.log(method);
          if (typeof _this31[method] === 'function') {
            _this31[method]();
          }
        }); // this.socketService.listenPrivate().subscribe(data => this.realTimeOps(data));
        // this.socketService.listenPublic().subscribe(data => this.realTimeOps(data));
      } // realTimeOps(msg){
      //   console.log(msg);
      //   switch (msg) {
      //     case 'refreshUi':
      //       this.authService.logout();
      //       this.router.navigate(['/login']);
      //       break;
      //     default:
      //       break;
      //   }
      // }


      _createClass(NavigationComponent, [{
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/navigation/navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  background: #fafafa;\n  height: 90%;\n}\n\nmat-card {\n  max-width: 30%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.padding {\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUdBLFdBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAvLyBiYWNrZ3JvdW5kOiByZ2IoNTcsNDgsMjE5KTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg1Nyw0OCwyMTksMSkgMCUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xuICBoZWlnaHQ6IDkwJTtcbn1cbm1hdC1jYXJke1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cblxuLmZ1bGwtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZ3tcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4iLCIuY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGhlaWdodDogOTAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authService, snackBard, router, dataService) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.snackBard = snackBard;
        this.router = router;
        this.dataService = dataService;
        this.hide = true;
        this.userData = {
          avatar: '',
          id: '',
          name: '',
          email: '',
          isAdmin: null,
          isActive: null,
          teamId: null
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this32 = this;

          this.userData.email = this.registerForm.value.email;
          var password = this.registerForm.value.password;
          this.userData.name = this.registerForm.value.name;
          this.authService.register(this.userData, password).then(function (res) {
            console.log(res);
            _this32.userData.id = res.user.uid;
            _this32.userData.name = _this32.registerForm.value.name;
            _this32.userData.email = res.user.email; // this.userData.isAdmin = true;

            _this32.dataService.createUser(_this32.userData).then(function () {
              _this32.snackBard.open('New Account have been created, please login using your credentials', null, {
                duration: 3000
              });

              _this32.router.navigate(['/dashboard/users']);
            }).catch(function (err) {
              _this32.snackBard.open(err, null, {
                duration: 3000
              });
            });
          }).catch(function (err) {
            console.log(err);
            var message;

            switch (err.code) {
              case 'auth/invalid-email':
                message = 'Invalid email address';
                break;

              case 'auth/user-not-found':
                message = 'Incorrect email address or password';
                break;

              default:
                message = err.message;
            }

            _this32.snackBard.open(message, null, {
              duration: 3000
            });
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(username, pw) {
          var _this33 = this;

          return this.http.post('https://backend.apartmentsource.com/auth/local', {
            identifier: username,
            password: pw
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this33.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(emailAddress) {
          return this.http.post('https://backend.apartmentsource.com/auth/forgot-password', {
            email: emailAddress,
            url: 'https://backend.apartmentsource.com/admin/plugins/users-permissions/auth/reset-password'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return user;
          }));
        }
      }, {
        key: "reset",
        value: function reset(code, pw, pwcnf) {
          var _this34 = this;

          return this.http.post('https://backend.apartmentsource.com/auth/reset-password', {
            code: code,
            password: pw,
            passwordConfirmation: pwcnf
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this34.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(user, password) {
          return this.http.post('https://backend.apartmentsource.com/users', {
            fullName: user.user.fullName,
            username: user.user.username,
            email: user.user.email,
            blocked: user.user.blocked,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newUser) {
            return newUser;
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user, password) {
          var roleId = user.user.role.name === 'Administrator' ? '5dc49d9292e8e019a58a5f74' : '5dc49d9292e8e019a58a5f75';
          return this.http.put("https://backend.apartmentsource.com/users/".concat(user.user.id), Object.assign({
            fullName: user.user.fullName,
            username: user.user.username,
            email: user.user.email,
            blocked: user.user.blocked
          }, password && password, {
            role: {
              _id: roleId
            }
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newUser) {
            return newUser;
          }));
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(avatar) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Content-Type', 'multipart/form-data');
          return this.http.post('https://backend.apartmentsource.com/upload', avatar);
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "migrateApp",
        value: function migrateApp(app) {
          return this.http.post('https://backend.apartmentsource.com/applications', app).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newUser) {
            return newUser;
          }));
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SocketService =
    /*#__PURE__*/
    function () {
      function SocketService(socket, authService) {
        _classCallCheck(this, SocketService);

        this.socket = socket;
        this.authService = authService; // this.connect();
        // super({ url: 'https://backend.apartmentsource.com', options: {query: {userId: '231231232313'}} });
      } // listenPublic() {
      //   return this.socket.fromEvent('serverToClient').pipe(map( data => data ));
      // }
      // listenPrivate() {
      //   const currentUser = this.authService.currentUserValue;
      //   if (currentUser) {
      //     return this.socket.fromEvent(`${currentUser.user.id}`).pipe(map( data => data ));
      //   }
      // }


      _createClass(SocketService, [{
        key: "send",
        value: function send(to, method) {
          var msg = {
            to: to,
            method: method
          };
          this.socket.emit('emit', msg);
        }
      }, {
        key: "get",
        value: function get() {
          var _this35 = this;

          return this.socket.fromEvent('public').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var currentUser = _this35.authService.currentUserValue.user.id; // console.log(data);

            if (data.to === 'public' || data.to === currentUser) {
              return data.method;
            }
          }));
        } // getPrivate() {
        //   const currentUser = this.authService.currentUserValue;
        //   if (currentUser) {
        //     return this.socket.fromEvent(`${currentUser.user.id}`).pipe(map( data => console.log(data) ));
        //   }
        // }
        // emit(msg) {
        //   this.socket.emit('clientToServer', msg);
        // }

      }, {
        key: "closeConnection",
        value: function closeConnection() {
          return this.socket.removeListener('public');
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], SocketService);
    /***/
  },

  /***/
  "./src/app/users/create-user/create-user.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/users/create-user/create-user.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersCreateUserCreateUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n  width: 100%;\n}\n\n.margin-botton {\n  margin: 10px 0px 5px;\n}\n\n.mat-dialog-content {\n  overflow: hidden;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.modal-loading {\n  top: -25px;\n  height: 5px;\n  left: -20px;\n  width: calc(100% + 40px);\n}\n\n.slide-toggle {\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC91c2Vycy9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXJnaW4tYm90dG9ue1xuICBtYXJnaW46IDEwcHggMHB4IDVweDtcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnR7XG4gIG92ZXJmbG93OiAgaGlkZGVuO1xufVxuXG4uaW1hZ2UtdXBsb2FkID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9kYWwtbG9hZGluZ3tcbiAgdG9wOiAtMjVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGxlZnQ6IC0yMHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgNDBweCk7XG59XG5cbi5zbGlkZS10b2dnbGV7XG4gIG1hcmdpbjogNXB4IDBweDtcbn0iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFyZ2luLWJvdHRvbiB7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlLXVwbG9hZCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vZGFsLWxvYWRpbmcge1xuICB0b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogLTIwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0MHB4KTtcbn1cblxuLnNsaWRlLXRvZ2dsZSB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/users/create-user/create-user.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/users/create-user/create-user.component.ts ***!
    \************************************************************/

  /*! exports provided: CreateUserComponent */

  /***/
  function srcAppUsersCreateUserCreateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function () {
      return CreateUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var CreateUserComponent =
    /*#__PURE__*/
    function () {
      function CreateUserComponent(dialogRef, snackBard, router, dataService, afStorage, authService, socketService, data) {
        _classCallCheck(this, CreateUserComponent);

        this.dialogRef = dialogRef;
        this.snackBard = snackBard;
        this.router = router;
        this.dataService = dataService;
        this.afStorage = afStorage;
        this.authService = authService;
        this.socketService = socketService;
        this.data = data;
        this.files = new Set();
        this.loading = false;
        this.update = false;
        this.hide = true;
        this.userData = {
          avatar: '',
          id: '',
          name: '',
          email: '',
          isAdmin: null,
          isActive: true,
          teamId: null
        };
        this.user = {
          jwt: null,
          user: {
            id: null,
            fullName: '',
            username: '',
            email: '',
            blocked: null,
            role: {
              name: ''
            },
            avatar: [{
              url: ''
            }]
          }
        };
      }

      _createClass(CreateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.data.user);
          if (this.data && this.data.user) {
            if (this.data.user.avatar.length > 0 || !this.data.user.avatar === undefined) {
              this.imageSrc = "https://backend.apartmentsource.com".concat(this.data.user.avatar['0'].url);
            }

            this.update = this.data ? true : false;
            this.user.user.id = this.data ? this.data.user.id : null;
            this.user.user.fullName = this.data ? this.data.user.fullName : '';
            this.user.user.email = this.data ? this.data.user.email : '';
            this.user.user.role.name = this.data.user.role.name;
            this.user.user.blocked = this.data.user.blocked;
          }

          var passwordValidators = !this.update ? [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)] : [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)];
          this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.user.user.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
              value: this.user.user.email,
              disabled: this.update
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, passwordValidators),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.user.user.role.name === 'Administrator' ? true : false),
            isBloked: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.user.user.blocked ? true : false)
          });
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var _this36 = this;

          this.loading = true;

          if (this.update) {
            this.updateUser();
            return;
          } // user.user = {} as null;


          this.user.user.fullName = this.createUserForm.value.fullName;
          this.user.user.email = this.createUserForm.value.email;
          this.user.user.username = this.createUserForm.value.email;
          this.user.user.blocked = this.createUserForm.value.isBloked ? true : false;
          var password = this.createUserForm.value.password;
          this.authService.createUser(this.user, password).subscribe(function (data) {
            _this36.user.user.id = data['id'];

            _this36.updateUser(); // console.log(data);

          }, function (err) {
            console.log(err);
            var erroMsg = err['0'].messages['0'].message;

            _this36.snackBard.open(erroMsg, null, {
              duration: 3000
            });
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this37 = this;

          this.user.user.role = {
            name: this.createUserForm.value.isAdmin === true ? 'Administrator' : ''
          };
          this.user.user.email = this.createUserForm.value.email;
          this.user.user.username = this.createUserForm.value.email;
          this.user.user.fullName = this.createUserForm.value.fullName;
          var password = this.createUserForm.value.password;
          this.user.user.blocked = this.createUserForm.value.isBloked ? true : false;
          this.authService.updateUser(this.user, password).subscribe(function (data) {
            if (_this37.avatar) {
              _this37.uploadAvatar(data);
            } else {
              _this37.closeRefresh();
            }
          }, function (err) {
            console.log(err);
            var erroMsg = err['0'].messages['0'].message;

            _this37.snackBard.open(erroMsg, null, {
              duration: 3000
            });
          });
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(userData) {
          var _this38 = this;

          var formData = new FormData();
          formData.append('files', this.avatar, this.avatar.name);
          formData.append('refId', userData.id);
          formData.append('ref', 'user');
          formData.append('source', 'users-permissions');
          formData.append('field', 'avatar');
          this.authService.uploadAvatar(formData).subscribe(function (data) {
            // console.log(data);
            _this38.closeRefresh();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "preview",
        value: function preview(files) {
          var _this39 = this;

          if (files) {
            this.avatar = files.item(0);
            var reader = new FileReader();

            reader.onload = function (e) {
              _this39.imageSrc = reader.result;
            };

            reader.readAsDataURL(this.avatar);
          }
        }
      }, {
        key: "closeRefresh",
        value: function closeRefresh() {
          // const msgs = [];
          // if (this.adminChanged || this.blokedChanged) {
          //   msgs.push({ to: this.user.user.id, body: 'refreshUi'});
          // }
          // msgs.push({ to: '', body: 'getUsers'});
          // msgs.forEach( msg => {
          //     this.socketService.emit(msg);
          //   }
          // );
          this.socketService.send('public', 'getUsers');

          if (this.adminChanged || this.blokedChanged) {
            this.socketService.send(this.user.user.id, 'logout');
          }

          this.loading = false;
          this.dialogRef.close();
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return CreateUserComponent;
    }();

    CreateUserComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }, {
        type: _models_user__WEBPACK_IMPORTED_MODULE_2__["User"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('avatarInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CreateUserComponent.prototype, "avatarInput", void 0);
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-create-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-user.component.scss */
      "./src/app/users/create-user/create-user.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]])], CreateUserComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.scss":
  /*!********************************************!*\
    !*** ./src/app/users/users.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\n.mat-column-edit {\n  width: 5%;\n}\n\n.mat-column-edit button {\n  float: right;\n}\n\n.fat-btn {\n  margin: 4px 0px 0px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBRENBO0VBQ0UsU0FBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBwYWRkaW5nOiAyMHB4O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm1hdC1jb2x1bW4tZWRpdHtcbiAgd2lkdGg6IDUlO1xufVxuXG4ubWF0LWNvbHVtbi1lZGl0IGJ1dHRvbntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmF0LWJ0bntcbiAgbWFyZ2luOiA0cHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cblxuIiwiLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubWF0LWNvbHVtbi1lZGl0IHtcbiAgd2lkdGg6IDUlO1xufVxuXG4ubWF0LWNvbHVtbi1lZGl0IGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZhdC1idG4ge1xuICBtYXJnaW46IDRweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-user/create-user.component */
    "./src/app/users/create-user/create-user.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(dialog, dataService, apollo, // private socket: Socket,
      socketService) {
        _classCallCheck(this, UsersComponent);

        this.dialog = dialog;
        this.dataService = dataService;
        this.apollo = apollo;
        this.socketService = socketService;
        this.displayedColumns = ['fullName', 'email', 'role', 'blocked', 'edit']; // public users: Users[] = [
        //   {id: 'ewweewqe', name: 'Marcel Cruz', email: 'marclcruz85@gmail.com', isAdmin: true, isActive: false, teamId: null},
        // ];

        this.users = [];
        this.loading = false;
        this.userData = {
          avatar: '',
          id: '',
          name: '',
          email: '',
          isAdmin: null,
          isActive: null,
          teamId: null
        }; // Assign the data to the data source for the table to render

        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.users);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.dataSource.sort = this.sort;
          this.getUsers();
          this.socketService.get().subscribe(function (method) {
            if (typeof _this40[method] === 'function') {
              _this40[method]();
            }
          }); // this.socketService.listenPrivate().subscribe(data => this.realTimeOps(data));
          // this.socketService.listenPublic().subscribe(data => this.realTimeOps(data));
        } // realTimeOps(msg) {
        //   console.log(msg);
        //   switch (msg) {
        //     case 'getUsers':
        //       this.getUsers();
        //       break;
        //     default:
        //       break;
        //   }
        // }

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var dialogRef = this.dialog.open(_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"], {
            width: '550px',
            data: null
          });
          dialogRef.afterClosed().subscribe();
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var dialogRef = this.dialog.open(_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"], {
            width: '550px',
            data: {
              user: user
            }
          });
          dialogRef.afterClosed().subscribe();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this41 = this;

          this.queryUsers = this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_10___default.a(_templateObject4()),
            fetchPolicy: 'network-only',
            errorPolicy: 'all'
          }).subscribe(function (_ref4) {
            var data = _ref4.data,
                loading = _ref4.loading;
            // console.log(data);
            _this41.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](data.users);
            _this41.dataSource.paginator = _this41.paginator; // console.log(this.dataSource);

            _this41.queryUsers.unsubscribe();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.queryUsers.unsubscribe();
          this.socketService.closeConnection();
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])], UsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/users/users.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"], _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/whiteboard/whiteboard.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/whiteboard/whiteboard.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWhiteboardWhiteboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 20px;\n}\n\n.card-33 {\n  float: left;\n  margin-bottom: 20px;\n}\n\n.statistics h3 {\n  margin: 3px 0px;\n  opacity: 0.7;\n}\n\n.statistics span {\n  opacity: 0.7;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWwvUHJvamVjdHMvd2hpdGVib2FyZDIvc3JjL2FwcC93aGl0ZWJvYXJkL3doaXRlYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3doaXRlYm9hcmQvd2hpdGVib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGFBQUE7QUNERjs7QURHQTtFQUdFLFdBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvd2hpdGVib2FyZC93aGl0ZWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gIC8vIGJhY2tncm91bmQ6ICNiN2I3Yjc7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jYXJkLTMze1xuICAvLyB3aWR0aDogMjIlO1xuICAvLyBtYXJnaW46IDIwcHggMHB4IDIwcHggMiU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3RhdGlzdGljcyBoM3tcbiAgbWFyZ2luOiAzcHggMHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zdGF0aXN0aWNzIHNwYW57XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbiIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtMzMge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnN0YXRpc3RpY3MgaDMge1xuICBtYXJnaW46IDNweCAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnN0YXRpc3RpY3Mgc3BhbiB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/whiteboard/whiteboard.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/whiteboard/whiteboard.component.ts ***!
    \****************************************************/

  /*! exports provided: WhiteboardComponent */

  /***/
  function srcAppWhiteboardWhiteboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhiteboardComponent", function () {
      return WhiteboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhiteboardComponent =
    /*#__PURE__*/
    function () {
      function WhiteboardComponent(dataService) {
        _classCallCheck(this, WhiteboardComponent);

        this.dataService = dataService;
        this.stats = [];
      }

      _createClass(WhiteboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStats();
        }
      }, {
        key: "getStats",
        value: function getStats() {
          var _this42 = this;

          var today = new Date();
          var year = today.getFullYear();
          var month = ('0' + (today.getMonth() + 1)).slice(-2);
          var thisMonth = "".concat(year).concat(month); // const thisMonth = '201908';

          this.dataService.getStats(thisMonth).subscribe(function (res) {
            _this42.stats = res;
            console.log(res);
          });
        }
      }]);

      return WhiteboardComponent;
    }();

    WhiteboardComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    WhiteboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-whiteboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./whiteboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/whiteboard/whiteboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./whiteboard.component.scss */
      "./src/app/whiteboard/whiteboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], WhiteboardComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAdEDQSLRncPA2T58YrN1oZ_PMc_VD86VI",
        authDomain: "dashboard-6f7ca.firebaseapp.com",
        databaseURL: "https://dashboard-6f7ca.firebaseio.com",
        projectId: "dashboard-6f7ca",
        storageBucket: "dashboard-6f7ca.appspot.com",
        messagingSenderId: "934901644754",
        appId: "1:934901644754:web:f887d2e4e416a63fa81c0b" // apiKey: "AIzaSyDREnvrNIk2IXT_5H1Y_NV0GL_Ttd5hPwk",
        // authDomain: "dashboard-29df7.firebaseapp.com",
        // databaseURL: "https://dashboard-29df7.firebaseio.com",
        // projectId: "dashboard-29df7",
        // storageBucket: "dashboard-29df7.appspot.com",
        // messagingSenderId: "458597392670",
        // appId: "1:458597392670:web:108baed77f125e2f"

      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/marcel/Projects/whiteboard2/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** zlib (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!**********************!*\
    !*** http (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!***********************!*\
    !*** https (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map