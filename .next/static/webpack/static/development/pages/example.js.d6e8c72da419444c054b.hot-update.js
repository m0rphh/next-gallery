webpackHotUpdate("static/development/pages/example.js",{

/***/ "./pages/example.js":
/*!**************************!*\
  !*** ./pages/example.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");

var _jsxFileName = "/Users/morph/Desktop/ALL/Dev/next-gallery/pages/example.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://res.cloudinary.com/dj6ppswvb/image/list/b.json');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  images: data.resources
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // handling escape close


  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (!this.props.url.query.photoId) return;

      if (e.keyCode === 27) {
        // this.props.url.back()
        window.history.back();
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/example');
    }
  }, {
    key: "showPhoto",
    value: function showPhoto(e, id) {
      e.preventDefault(); // Router.push(`/?photoId=https://res.cloudinary.com/dj6ppswvb/${id}`, `/photo?id=https://res.cloudinary.com/dj6ppswvb/${id}`)

      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/?photoId=".concat(id), "/photo?id=".concat(id));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          url = _this$props.url,
          images = _this$props.images;
      console.log(asPath());
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Example page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2448512670" + " " + 'grid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, url.query.id && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: url.query.id,
        onDismiss: function onDismiss() {
          return _this2.dismissModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["CloudinaryContext"], {
        cloudName: "dj6ppswvb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, images.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: data.public_id,
          className: "jsx-2448512670" + " " + "responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: "/photo?id=https://res.cloudinary.com/dj6ppswvb/".concat(data.public_id),
          onClick: function onClick(e) {
            return _this2.showPhoto(e, data.public_id);
          },
          className: "jsx-2448512670",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
          publicId: data.public_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["Transformation"], {
          width: "300",
          crop: "scale" //  height="200"
          //  dpr="auto"
          //    responsive_placeholder="blank"
          ,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2448512670",
        css: ".responsive.jsx-2448512670{cursor:pointer;}.list.jsx-2448512670{padding:50px;text-align:center;}.photo.jsx-2448512670{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1040px;width:100%;margin:auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.photoLink.jsx-2448512670{color:#333;verticalAlign:middle;cursor:pointer;width:250px;height:250px;line-height:250px;margin:10px;border:2px solid transparent;}.photoLink.jsx-2448512670:hover{borderColor:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JwaC9EZXNrdG9wL0FMTC9EZXYvbmV4dC1nYWxsZXJ5L3BhZ2VzL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdpQixBQU9zQixBQUdJLEFBSUEsQUFRRixBQVVNLFdBVEksRUFaSCxFQUh6QixFQXlCSyxjQXJCQSxDQVlpQixlQUNILFlBQ0MsYUFDSyxFQVpQLGdCQWFDLENBWlAsV0FDQyxBQVl1QixZQVhMLGlCQVkxQixrR0FYZSw2RkFDZiIsImZpbGUiOiIvVXNlcnMvbW9ycGgvRGVza3RvcC9BTEwvRGV2L25leHQtZ2FsbGVyeS9wYWdlcy9leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHtcbiAgQ2xvdWRpbmFyeUNvbnRleHQsXG4gIFRyYW5zZm9ybWF0aW9uLFxuICBJbWFnZVxufSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqNnBwc3d2Yi9pbWFnZS9saXN0L2IuanNvbicpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlczogZGF0YS5yZXNvdXJjZXNcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxuICB9XG5cblxuICAvLyBoYW5kbGluZyBlc2NhcGUgY2xvc2VcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXJsLnF1ZXJ5LnBob3RvSWQpIHJldHVyblxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAvLyB0aGlzLnByb3BzLnVybC5iYWNrKClcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgfVxuICB9XG5cbiAgZGlzbWlzc01vZGFsKCkge1xuICAgIFJvdXRlci5wdXNoKCcvZXhhbXBsZScpO1xuICB9XG5cbiAgc2hvd1Bob3RvKGUsIGlkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFJvdXRlci5wdXNoKGAvP3Bob3RvSWQ9aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGo2cHBzd3ZiLyR7aWR9YCwgYC9waG90bz9pZD1odHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kajZwcHN3dmIvJHtpZH1gKVxuICAgIFJvdXRlci5wdXNoKGAvP3Bob3RvSWQ9JHtpZH1gLCBgL3Bob3RvP2lkPSR7aWR9YClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgaW1hZ2VzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2coYXNQYXRoKCkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9J0V4YW1wbGUgcGFnZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmwucXVlcnkuaWQgJiZcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpZD17dXJsLnF1ZXJ5LmlkfVxuICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuZGlzbWlzc01vZGFsKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxDbG91ZGluYXJ5Q29udGV4dCBjbG91ZE5hbWU9XCJkajZwcHN3dmJcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1hZ2VzLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zaXZlXCIga2V5PXtkYXRhLnB1YmxpY19pZH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsoYC9waG90bz9pZD1odHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kajZwcHN3dmIvJHtkYXRhLnB1YmxpY19pZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zaG93UGhvdG8oZSwgZGF0YS5wdWJsaWNfaWQpfVxuICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgcHVibGljSWQ9e2RhdGEucHVibGljX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSczMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3A9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBkcHI9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHJlc3BvbnNpdmVfcGxhY2Vob2xkZXI9XCJibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0Nsb3VkaW5hcnlDb250ZXh0PlxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ3JpZCB7XG5cblxuICAgICAgICAgIH1cblx0XHRcdFx0XHQucmVzcG9uc2l2ZSB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5waG90byB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDQwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5waG90b0xpbmsge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5waG90b0xpbms6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/morph/Desktop/ALL/Dev/next-gallery/pages/example.js */",
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/example")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=example.js.d6e8c72da419444c054b.hot-update.js.map