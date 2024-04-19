(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Qc1":
    /*!************************************!*\
      !*** ./src/app/katex.directive.ts ***!
      \************************************/

    /*! exports provided: KatexDirective */

    /***/
    function Qc1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KatexDirective", function () {
        return KatexDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! katex */
      "Oy/b");
      /* harmony import */


      var katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_1__);

      var KatexDirective = /*#__PURE__*/function () {
        function KatexDirective(el) {
          _classCallCheck(this, KatexDirective);

          this.el = el;
        }

        _createClass(KatexDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.el.nativeElement.innerHTML = katex__WEBPACK_IMPORTED_MODULE_1__["renderToString"](this.katex);
          }
        }]);

        return KatexDirective;
      }();

      KatexDirective.ɵfac = function KatexDirective_Factory(t) {
        return new (t || KatexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      KatexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: KatexDirective,
        selectors: [["", "katex", ""]],
        inputs: {
          katex: "katex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KatexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[katex]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          katex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['katex']
          }]
        });
      })();
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
      /*! /home/runner/work/Propagation-of-Uncertainty-Calculator/Propagation-of-Uncertainty-Calculator/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7BlJ":
    /*!************************************************!*\
      !*** ./src/app/variable/variable.component.ts ***!
      \************************************************/

    /*! exports provided: VariableComponent */

    /***/
    function BlJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariableComponent", function () {
        return VariableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../variable */
      "NvxA");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _katex_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../katex.directive */
      "+Qc1");

      var VariableComponent = function VariableComponent() {
        _classCallCheck(this, VariableComponent);

        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      VariableComponent.ɵfac = function VariableComponent_Factory(t) {
        return new (t || VariableComponent)();
      };

      VariableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VariableComponent,
        selectors: [["app-variable"]],
        inputs: {
          variable: "variable"
        },
        outputs: {
          onDelete: "onDelete"
        },
        decls: 19,
        vars: 5,
        consts: [[1, "variable", "row"], [1, "variable-name", "col-md-2"], [1, "input-group"], [1, "input-group-prepend"], ["title", "Remove Variable", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "sr-only"], ["id", "variable", "type", "text", "placeholder", "Name", "title", "Variable Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "variable-value", "col-md-5"], ["for", "value", 1, "input-group-text", 3, "katex"], ["id", "value", "type", "text", "placeholder", "Value", "title", "Variable Value", 1, "form-control", "d-block", 3, "ngModel", "ngModelChange"], [1, "variable-delta", "col-md-5"], ["for", "delta", 1, "input-group-text", 3, "katex"], ["id", "delta", "type", "text", "placeholder", "Error/Uncertainty", "title", "Variable Error/Uncertainty", 1, "form-control", "d-block", 3, "ngModel", "ngModelChange"]],
        template: function VariableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VariableComponent_Template_button_click_4_listener() {
              return ctx.onDelete.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remove Variable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VariableComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.variable.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VariableComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.variable.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VariableComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.variable.delta = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.variable.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("katex", (ctx.variable.name || "?") + " =");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.variable.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("katex", "\\Delta " + (ctx.variable.name || "?") + " =");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.variable.delta);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _katex_directive__WEBPACK_IMPORTED_MODULE_3__["KatexDirective"]],
        styles: [".variable[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.variable[_ngcontent-%COMP%]   .variable-name[_ngcontent-%COMP%], .variable[_ngcontent-%COMP%]   .variable-value[_ngcontent-%COMP%], .variable[_ngcontent-%COMP%]   .variable-delta[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.variable[_ngcontent-%COMP%]   .variable-name[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%], .variable[_ngcontent-%COMP%]   .variable-value[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%], .variable[_ngcontent-%COMP%]   .variable-delta[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZhcmlhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7QUFDSjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUNOIiwiZmlsZSI6InZhcmlhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhcmlhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcblxuICAudmFyaWFibGUtbmFtZSwgLnZhcmlhYmxlLXZhbHVlLCAudmFyaWFibGUtZGVsdGEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-variable',
            templateUrl: './variable.component.html',
            styleUrls: ['./variable.component.scss']
          }]
        }], function () {
          return [];
        }, {
          variable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "K8Gv":
    /*!*************************!*\
      !*** ./src/app/util.ts ***!
      \*************************/

    /*! exports provided: Util */

    /***/
    function K8Gv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Util", function () {
        return Util;
      });

      var Util = /*#__PURE__*/function () {
        function Util() {
          _classCallCheck(this, Util);
        }

        _createClass(Util, null, [{
          key: "getPowerOf10",

          /**
           * Get the power of 10 necessary to convert a number to scientific notation
           * @param {number} num
           * @returns {number}
           */
          value: function getPowerOf10(num) {
            // make sure we actually have a number and that it's not 0
            if (!isFinite(num) || isNaN(num) || num === 0) {
              return 0;
            } // since we want the number of times to divide/multiply by 10, we have
            // c / 10^x >= 1
            // c <= 10^x
            // log10(c) >= x
            // with c > 0 since log(x) when x <= 0 does not exist


            return Math.floor(Math.log10(Math.abs(num)));
          }
          /**
           * Round a number to a maximum of 10 decimals to avoid precision issues
           * @param {number} num
           * @returns {number}
           */

        }, {
          key: "fixPrecision",
          value: function fixPrecision(num) {
            return Math.round(num * 1e10) / 1e10;
          }
        }]);

        return Util;
      }();
      /***/

    },

    /***/
    "NvxA":
    /*!*****************************!*\
      !*** ./src/app/variable.ts ***!
      \*****************************/

    /*! exports provided: Variable */

    /***/
    function NvxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Variable", function () {
        return Variable;
      });

      var Variable = function Variable() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Variable);

        this.value = null;
        this.delta = null;
        this.name = name;
        this.value = value;
        this.delta = delta;
      };
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./variable */
      "NvxA");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util */
      "K8Gv");
      /* harmony import */


      var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! mathjs */
      "xws/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _katex_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./katex.directive */
      "+Qc1");
      /* harmony import */


      var _variable_variable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./variable/variable.component */
      "7BlJ");

      function AppComponent_app_variable_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-variable", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function AppComponent_app_variable_9_Template_app_variable_onDelete_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var variable_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.deleteVariable(variable_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variable_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variable", variable_r1);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.resultVariable = 'R';
          this.equation = 'm/V';
          this.invalidInput = false;
          this.variables = [new _variable__WEBPACK_IMPORTED_MODULE_1__["Variable"]('V', 6.95e-6, 0.03e-6), new _variable__WEBPACK_IMPORTED_MODULE_1__["Variable"]('m', 1.87e-2, 0.01e-2)];
        }

        _createClass(AppComponent, [{
          key: "addVariable",
          value: function addVariable() {
            this.variables.push(new _variable__WEBPACK_IMPORTED_MODULE_1__["Variable"]());
          }
        }, {
          key: "deleteVariable",
          value: function deleteVariable(variable) {
            var index = this.variables.indexOf(variable);
            this.variables.splice(index, 1);
          }
        }, {
          key: "isEquationValid",
          value: function isEquationValid() {
            try {
              mathjs__WEBPACK_IMPORTED_MODULE_3__["parse"](this.equation);
              return true;
            } catch (ex) {
              return false;
            }
          }
        }, {
          key: "derivative",
          value: function derivative(inRespectTo) {
            if (this.equation && inRespectTo) {
              try {
                return mathjs__WEBPACK_IMPORTED_MODULE_3__["derivative"](this.equation, inRespectTo).toString();
              } catch (ex) {
                if (!(ex instanceof SyntaxError)) {
                  console.log(ex);
                }

                return '';
              }
            }

            return '';
          }
        }, {
          key: "getResultFunction",
          value: function getResultFunction() {
            try {
              var result = this.getResult();
              return this.resultVariable + ' = ' + result.toString().replace(/e\+?(-?)(\d+)/, ' \\times 10^{$1$2}');
            } catch (ex) {
              if (!(ex instanceof SyntaxError)) {
                console.log(ex);
              }

              return '';
            }
          }
        }, {
          key: "getDeltaResultFunction",
          value: function getDeltaResultFunction() {
            try {
              var steps = [];
              var parts = [];
              var parts2 = [];
              var scope = {};

              for (var i = 0; i < this.variables.length; i++) {
                var variable = this.variables[i];
                var derivative = this.derivative(variable.name);

                if (!derivative) {
                  return '';
                }

                parts.push("\\left( \\frac{\\partial ".concat(this.resultVariable, "}{\\partial ").concat(variable.name, "} \\Delta ").concat(variable.name, " \\right)^2"));
                parts2.push('\\left( \\left( ' + derivative + ' \\right) \\cdot \\Delta ' + variable.name + ' \\right)^2');
                scope[variable.name] = variable.value;
              }

              steps.push('\\sqrt{' + parts.join(' + ') + '}');
              steps.push('\\sqrt{' + parts2.join(' + ') + '}');
              var result = this.getUncertainty();

              var exp = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].getPowerOf10(result);

              steps.push(result);
              steps.push(_util__WEBPACK_IMPORTED_MODULE_2__["Util"].fixPrecision(result / Math.pow(10, exp)) + ' \\times 10^{' + exp + '}');
              steps.push(_util__WEBPACK_IMPORTED_MODULE_2__["Util"].fixPrecision(parseFloat(result.toPrecision(1)) / Math.pow(10, exp)) + ' \\times 10^{' + exp + '}');
              return "\\begin{aligned} \\Delta ".concat(this.resultVariable, " &= ").concat(steps.join(' \\\\ &= '), " \\end{aligned}");
            } catch (ex) {
              if (!(ex instanceof SyntaxError)) {
                console.log(ex);
              }

              return '';
            }
          }
        }, {
          key: "getResult",
          value: function getResult() {
            var scope = {};

            for (var i = 0; i < this.variables.length; i++) {
              scope[this.variables[i].name] = this.variables[i].value;
            }

            return _util__WEBPACK_IMPORTED_MODULE_2__["Util"].fixPrecision(mathjs__WEBPACK_IMPORTED_MODULE_3__["evaluate"](this.equation, scope));
          }
        }, {
          key: "getUncertainty",
          value: function getUncertainty() {
            var scope = {};
            var parts = [];

            for (var i = 0; i < this.variables.length; i++) {
              var variable = this.variables[i];
              var derivative = mathjs__WEBPACK_IMPORTED_MODULE_3__["derivative"](this.equation, variable.name);
              parts.push('((' + derivative.toString() + ') * ' + variable.delta + ')^2');
              scope[variable.name] = variable.value;
            }

            var eq = 'sqrt(' + parts.join(' + ') + ')';
            return _util__WEBPACK_IMPORTED_MODULE_2__["Util"].fixPrecision(mathjs__WEBPACK_IMPORTED_MODULE_3__["evaluate"](eq, scope));
          }
        }, {
          key: "getResultWithUncertainty",
          value: function getResultWithUncertainty() {
            try {
              var result = this.getResult();
              var uncertainty = this.getUncertainty();

              var resultExp = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].getPowerOf10(result);

              var uncertaintyExp = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].getPowerOf10(uncertainty);

              var diffExp = resultExp - uncertaintyExp;
              var roundedResult = Math.round(result / Math.pow(10, uncertaintyExp)) / Math.pow(10, diffExp);
              var roundedUncertainty = Math.round(uncertainty / Math.pow(10, uncertaintyExp)) / Math.pow(10, diffExp);
              return "".concat(this.resultVariable, " = \\left( ").concat(roundedResult, " \\pm ").concat(roundedUncertainty, " \\right) \\times 10^{").concat(resultExp, "}");
            } catch (ex) {
              if (!(ex instanceof SyntaxError)) {
                console.log(ex);
              }

              return '';
            }
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            var code = "\\[".concat(this.getResultFunction(), "\\]\\[").concat(this.getDeltaResultFunction(), "\\]\\[").concat(this.getResultWithUncertainty(), "\\]");
            navigator.clipboard.writeText(code);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 33,
        vars: 8,
        consts: [[1, "lead"], ["href", "https://github.com/nicoco007/Propagation-of-Uncertainty-Calculator/issues"], [1, "variables"], [3, "variable", "onDelete", 4, "ngFor", "ngForOf"], ["title", "Add Variable", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fa", "fa-plus"], [1, "sr-only"], [1, "eq"], [1, "row"], [1, "form-group", "col-12", "d-flex", "align-items-center"], [1, "input-group"], ["id", "result-variable", "type", "text", "title", "Result Variable", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["for", "equation", "katex", " = ", 1, "input-group-text"], ["id", "equation", "type", "text", "placeholder", "Equation", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "result"], [3, "katex"], [3, "variable", "onDelete"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Propagation of Uncertainty Calculator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Uncertain about your uncertainty calculations? This tool helps you check if you're right or wrong, with steps! Found a bug? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Report it!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Variables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_variable_9_Template, 1, 1, "app-variable", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
              return ctx.addVariable();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Variable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Equation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.resultVariable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.equation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() {
              return ctx.copyToClipboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copy LaTeX code to clipboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.variables);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resultVariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isEquationValid());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.equation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("katex", ctx.getResultFunction());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("katex", ctx.getDeltaResultFunction());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("katex", ctx.getResultWithUncertainty());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _katex_directive__WEBPACK_IMPORTED_MODULE_6__["KatexDirective"], _variable_variable_component__WEBPACK_IMPORTED_MODULE_7__["VariableComponent"]],
        styles: [".result[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow-x: auto;\n  border-radius: 0;\n  background: linear-gradient(to right, white 30%, rgba(0, 0, 0, 0)), linear-gradient(to right, rgba(0, 0, 0, 0), white 70%) 100% 0, radial-gradient(farthest-side at 0 50%, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)) 100% 0;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-size: 40px 100%, 40px 100%, 12px 100%, 12px 100%;\n  background-attachment: local, local, scroll, scroll;\n}\n\n#result-variable[_ngcontent-%COMP%] {\n  flex: none !important;\n  width: 3rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.input-group-append[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLDJTQUNFO0VBTUYsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDJEQUFBO0VBQ0EsbURBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL25vaW5zcGVjdGlvbiBDc3NPcHRpbWl6ZVNpbWlsYXJQcm9wZXJ0aWVzXG4ucmVzdWx0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xuXG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpLFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSwgd2hpdGUgNzAlKSAxMDAlIDAsXG5cbiAgICByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCAwIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjI1KSwgcmdiYSgwLCAwLCAwLCAwKSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUgYXQgMTAwJSA1MCUsIHJnYmEoMCwgMCwgMCwgMC4yNSksIHJnYmEoMCwgMCwgMCwgMCkpIDEwMCUgMDtcblxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDEwMCUsIDQwcHggMTAwJSwgMTJweCAxMDAlLCAxMnB4IDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWwsIGxvY2FsLCBzY3JvbGwsIHNjcm9sbDtcbn1cblxuI3Jlc3VsdC12YXJpYWJsZSB7XG4gIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDNyZW07XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCArIGlucHV0IHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _variable_variable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./variable/variable.component */
      "7BlJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _katex_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./katex.directive */
      "+Qc1");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _variable_variable_component__WEBPACK_IMPORTED_MODULE_3__["VariableComponent"], _katex_directive__WEBPACK_IMPORTED_MODULE_5__["KatexDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _variable_variable_component__WEBPACK_IMPORTED_MODULE_3__["VariableComponent"], _katex_directive__WEBPACK_IMPORTED_MODULE_5__["KatexDirective"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map