webpackHotUpdate_N_E("pages/control/controleur",{

/***/ "./components/customModalC.jsx":
/*!*************************************!*\
  !*** ./components/customModalC.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\nvar _jsxFileName = \"/home/roosvelt/front-end-attendance-check-app/Attendance-check-app-frontend/components/customModalC.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction customModalC(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  };\n\n  var handleShow = function handleShow() {\n    return setShow(true);\n  };\n\n  var handleDelete = function handleDelete(survid) {\n    if (props.titre == 'users') {\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"users/users/\".concat(survid)).then(function (res) {\n        if (res.data != null) react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].success(\"Controleur supprimmé Veuillez recharger la page pour que les modifications prennet effet\");\n      })[\"catch\"](function (err) {\n        console.log(err);\n        react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(\"Erreur lors de la suppression\");\n      });\n    }\n\n    if (props.titre == 'surveillant') {\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"surveillance/supervisor/\".concat(survid)).then(function (res) {\n        if (res.data != null) react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].success(\"surveillant supprimmé Veuillez recharger la page pour que les modifications prennet effet\");\n      })[\"catch\"](function (err) {\n        console.log(err);\n        react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(\"Erreur lors de la suppression \");\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Dropdown\"].Item, {\n      onClick: handleShow,\n      children: \"Delete\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      show: show,\n      onHide: handleClose,\n      className: \"modalSuppression\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Header, {\n        closeButton: true,\n        className: \"color-titre-ajout\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Title, {\n          className: \"colorTitre\",\n          children: \"SUPPRESSION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Body, {\n        children: \"Etes vous certains de vouloir  le supprimer ?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Footer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"secondary\",\n          onClick: handleClose,\n          children: \"No/Close\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"danger\",\n          onClick: function onClick() {\n            handleDelete(props.id);\n            setShow(false);\n          },\n          children: \"YES\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(customModalC, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customModalC);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21Nb2RhbEMuanN4P2ZlMjkiXSwibmFtZXMiOlsiY3VzdG9tTW9kYWxDIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlRGVsZXRlIiwic3VydmlkIiwidGl0cmUiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFFekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNRCxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNRixPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFFBQUlQLEtBQUssQ0FBQ1EsS0FBTixJQUFlLE9BQW5CLEVBQTRCO0FBQ3hCQyxrREFBSyxVQUFMLHVCQUE0QkYsTUFBNUIsR0FDS0csSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUztBQUNYLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLElBQWhCLEVBQ0lDLG9EQUFLLENBQUNDLE9BQU4sQ0FBYywwRkFBZDtBQUNQLE9BSkwsV0FLVyxVQUFBQyxHQUFHLEVBQUk7QUFBRUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFBa0JGLDREQUFLLENBQUNLLEtBQU4sQ0FBWSwrQkFBWjtBQUErQyxPQUxyRjtBQU1IOztBQUNELFFBQUlsQixLQUFLLENBQUNRLEtBQU4sSUFBZSxhQUFuQixFQUFrQztBQUM5QkMsa0RBQUssVUFBTCxtQ0FBd0NGLE1BQXhDLEdBQ0tHLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVM7QUFDWCxZQUFJQSxHQUFHLENBQUNDLElBQUosSUFBWSxJQUFoQixFQUNJQyxvREFBSyxDQUFDQyxPQUFOLENBQWMsMkZBQWQ7QUFDUCxPQUpMLFdBS1csVUFBQUMsR0FBRyxFQUFJO0FBQUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQWtCRiw0REFBSyxDQUFDSyxLQUFOLENBQVksZ0NBQVo7QUFBZ0QsT0FMdEY7QUFNSDtBQUNKLEdBakJEOztBQW1CQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLGFBQU8sRUFBRWIsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLHFEQUFEO0FBQU8sVUFBSSxFQUFFSCxJQUFiO0FBQW1CLFlBQU0sRUFBRUUsV0FBM0I7QUFBd0MsZUFBUyxFQUFDLGtCQUFsRDtBQUFBLDhCQUNJLHFFQUFDLHFEQUFELENBQU8sTUFBUDtBQUFjLG1CQUFXLE1BQXpCO0FBQTBCLGlCQUFTLEVBQUMsbUJBQXBDO0FBQUEsK0JBQ0kscUVBQUMscURBQUQsQ0FBTyxLQUFQO0FBQWEsbUJBQVMsRUFBQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLHFEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0kscUVBQUMscURBQUQsQ0FBTyxNQUFQO0FBQUEsZ0NBQ0kscUVBQUMsc0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGlCQUFPLEVBQUVBLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUkscUVBQUMsc0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFFBQWhCO0FBQXlCLGlCQUFPLEVBQUUsbUJBQU07QUFDcENFLHdCQUFZLENBQUNOLEtBQUssQ0FBQ21CLEVBQVAsQ0FBWjtBQUNBaEIsbUJBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxXQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUF3Qkg7O0dBL0NRSixZOztBQWlETUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1c3RvbU1vZGFsQy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuXG5mdW5jdGlvbiBjdXN0b21Nb2RhbEMocHJvcHMpIHtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoc3VydmlkKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy50aXRyZSA9PSAndXNlcnMnKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYHVzZXJzL3VzZXJzLyR7c3VydmlkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDb250cm9sZXVyIHN1cHByaW1tw6kgVmV1aWxsZXogcmVjaGFyZ2VyIGxhIHBhZ2UgcG91ciBxdWUgbGVzIG1vZGlmaWNhdGlvbnMgcHJlbm5ldCBlZmZldFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB0b2FzdC5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uXCIpOyB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy50aXRyZSA9PSAnc3VydmVpbGxhbnQnKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYHN1cnZlaWxsYW5jZS9zdXBlcnZpc29yLyR7c3VydmlkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJzdXJ2ZWlsbGFudCBzdXBwcmltbcOpIFZldWlsbGV6IHJlY2hhcmdlciBsYSBwYWdlIHBvdXIgcXVlIGxlcyBtb2RpZmljYXRpb25zIHByZW5uZXQgZWZmZXRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgdG9hc3QuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiBcIik7IH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17aGFuZGxlU2hvd30+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPVwibW9kYWxTdXBwcmVzc2lvblwiPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gY2xhc3NOYW1lPVwiY29sb3ItdGl0cmUtYWpvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGNsYXNzTmFtZT1cImNvbG9yVGl0cmVcIj5TVVBQUkVTU0lPTjwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+RXRlcyB2b3VzIGNlcnRhaW5zIGRlIHZvdWxvaXIgIGxlIHN1cHByaW1lciA/PC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vL0Nsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocHJvcHMuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlFU1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbU1vZGFsQztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/customModalC.jsx\n");

/***/ })

})