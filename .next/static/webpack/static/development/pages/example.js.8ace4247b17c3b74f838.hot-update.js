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
                return res;

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  images: res.data.resources
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
        css: ".responsive.jsx-2448512670{cursor:pointer;}.list.jsx-2448512670{padding:50px;text-align:center;}.photo.jsx-2448512670{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1040px;width:100%;margin:auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.photoLink.jsx-2448512670{color:#333;verticalAlign:middle;cursor:pointer;width:250px;height:250px;line-height:250px;margin:10px;border:2px solid transparent;}.photoLink.jsx-2448512670:hover{borderColor:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JwaC9EZXNrdG9wL0FMTC9EZXYvbmV4dC1nYWxsZXJ5L3BhZ2VzL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdpQixBQU9zQixBQUdJLEFBSUEsQUFRRixBQVVNLFdBVEksRUFaSCxFQUh6QixFQXlCSyxjQXJCQSxDQVlpQixlQUNILFlBQ0MsYUFDSyxFQVpQLGdCQWFDLENBWlAsV0FDQyxBQVl1QixZQVhMLGlCQVkxQixrR0FYZSw2RkFDZiIsImZpbGUiOiIvVXNlcnMvbW9ycGgvRGVza3RvcC9BTEwvRGV2L25leHQtZ2FsbGVyeS9wYWdlcy9leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHtcbiAgQ2xvdWRpbmFyeUNvbnRleHQsXG4gIFRyYW5zZm9ybWF0aW9uLFxuICBJbWFnZVxufSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqNnBwc3d2Yi9pbWFnZS9saXN0L2IuanNvbicpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc1xuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IHJlcy5kYXRhLnJlc291cmNlc1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpXG4gIH1cblxuXG4gIC8vIGhhbmRsaW5nIGVzY2FwZSBjbG9zZVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pXG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy51cmwucXVlcnkucGhvdG9JZCkgcmV0dXJuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIC8vIHRoaXMucHJvcHMudXJsLmJhY2soKVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICB9XG4gIH1cblxuICBkaXNtaXNzTW9kYWwoKSB7XG4gICAgUm91dGVyLnB1c2goJy9leGFtcGxlJyk7XG4gIH1cblxuICBzaG93UGhvdG8oZSwgaWQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gUm91dGVyLnB1c2goYC8/cGhvdG9JZD1odHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kajZwcHN3dmIvJHtpZH1gLCBgL3Bob3RvP2lkPWh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqNnBwc3d2Yi8ke2lkfWApXG4gICAgUm91dGVyLnB1c2goYC8/cGhvdG9JZD0ke2lkfWAsIGAvcGhvdG8/aWQ9JHtpZH1gKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsLCBpbWFnZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPSdFeGFtcGxlIHBhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5LmlkICYmXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgaWQ9e3VybC5xdWVyeS5pZH1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8Q2xvdWRpbmFyeUNvbnRleHQgY2xvdWROYW1lPVwiZGo2cHBzd3ZiXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltYWdlcy5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZVwiIGtleT17ZGF0YS5wdWJsaWNfaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17KGAvcGhvdG8/aWQ9aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGo2cHBzd3ZiLyR7ZGF0YS5wdWJsaWNfaWR9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIGRhdGEucHVibGljX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHB1YmxpY0lkPXtkYXRhLnB1YmxpY19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9wPVwic2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgZHByPVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICByZXNwb25zaXZlX3BsYWNlaG9sZGVyPVwiYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAgICAgLmdyaWQge1xuXG5cbiAgICAgICAgICB9XG5cdFx0XHRcdFx0LnJlc3BvbnNpdmUge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGhvdG8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTA0MHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGhvdG9MaW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGhvdG9MaW5rOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/morph/Desktop/ALL/Dev/next-gallery/pages/example.js */",
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
//# sourceMappingURL=example.js.8ace4247b17c3b74f838.hot-update.js.map