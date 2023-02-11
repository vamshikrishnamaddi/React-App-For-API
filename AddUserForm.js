"use strict";

Liferay.Loader.define("my-react-app@1.0.0/AddUserForm", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/form', './request'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Liferay.Loader.define("my-react-app@1.0.0/AddUserForm", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/form', './request'], function (module, exports, require) {
      undefined;
      window;

      {
        Liferay.Loader.define("my-react-app@1.0.0/AddUserForm", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/form', './request'], function (module, exports, require) {
          undefined;
          window;

          {
            Liferay.Loader.define("my-react-app@1.0.0/AddUserForm", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/form', './request'], function (module, exports, require) {
              undefined;
              window;

              {
                function _typeof(obj) {
                  "@babel/helpers - typeof";

                  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
                    return typeof obj;
                  } : function (obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                  }, _typeof(obj);
                }
                Object.defineProperty(exports, "__esModule", {
                  value: true
                });
                exports["default"] = void 0;
                var _react = _interopRequireWildcard(require("my-react-app$react"));
                var _form = _interopRequireWildcard(require("@my-react-app$clayui/form"));
                var _request = require("./request");
                function _getRequireWildcardCache(nodeInterop) {
                  if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                  })(nodeInterop);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                  if (!nodeInterop && obj && obj.__esModule) {
                    return obj;
                  }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                    return { "default": obj };
                  }var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {
                    return cache.get(obj);
                  }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
                    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                      } else {
                        newObj[key] = obj[key];
                      }
                    }
                  }newObj["default"] = obj;if (cache) {
                    cache.set(obj, newObj);
                  }return newObj;
                }
                function _slicedToArray(arr, i) {
                  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
                }
                function _nonIterableRest() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function _unsupportedIterableToArray(o, minLen) {
                  if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                }
                function _arrayLikeToArray(arr, len) {
                  if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;
                }
                function _iterableToArrayLimit(arr, i) {
                  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];if (null != _i) {
                    var _s,
                        _e,
                        _x,
                        _r,
                        _arr = [],
                        _n = !0,
                        _d = !1;try {
                      if (_x = (_i = _i.call(arr)).next, 0 === i) {
                        if (Object(_i) !== _i) return;_n = !1;
                      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
                    } catch (err) {
                      _d = !0, _e = err;
                    } finally {
                      try {
                        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
                      } finally {
                        if (_d) throw _e;
                      }
                    }return _arr;
                  }
                }
                function _arrayWithHoles(arr) {
                  if (Array.isArray(arr)) return arr;
                }

                var _default = function AddUserForm() {
                  var _useState = (0, _react.useState)(''),
                      _useState2 = _slicedToArray(_useState, 2),
                      emailAddress = _useState2[0],
                      setEmailAddress = _useState2[1];
                  var _useState3 = (0, _react.useState)(''),
                      _useState4 = _slicedToArray(_useState3, 2),
                      familyName = _useState4[0],
                      setFamilyName = _useState4[1];
                  var _useState5 = (0, _react.useState)(''),
                      _useState6 = _slicedToArray(_useState5, 2),
                      givenName = _useState6[0],
                      setGivenName = _useState6[1];
                  var _useState7 = (0, _react.useState)(''),
                      _useState8 = _slicedToArray(_useState7, 2),
                      userName = _useState8[0],
                      setUserName = _useState8[1];
                  var onButtonSubmit = (0, _react.useCallback)(function () {
                    (0, _request.addUser)({
                      emailAddress: emailAddress,
                      familyName: familyName,
                      givenName: givenName,
                      userName: userName
                    }).then(function () {
                      setEmailAddress('');
                      setFamilyName('');
                      setGivenName('');
                      setUserName('');
                    });
                  }, [_request.addUser, emailAddress, familyName, givenName, userName]);
                  return (/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Add User Form"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
                      htmlFor: "givenName"
                    }, "Given Name"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
                      id: "givenName",
                      onChange: function onChange(event) {
                        return setGivenName(event.target.value);
                      },
                      placeholder: "Joe",
                      type: "text",
                      value: givenName
                    })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
                      htmlFor: "familyName"
                    }, "Family Name"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
                      id: "familyName",
                      onChange: function onChange(event) {
                        return setFamilyName(event.target.value);
                      },
                      placeholder: "Bloggs",
                      type: "text",
                      value: familyName
                    })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
                      htmlFor: "emailAddress"
                    }, "Email Address"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
                      id: "emailAddress",
                      onChange: function onChange(event) {
                        return setEmailAddress(event.target.value);
                      },
                      placeholder: "joe.bloggs@liferay.com",
                      type: "text",
                      value: emailAddress
                    })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
                      htmlFor: "userName"
                    }, "User Name"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
                      id: "userName",
                      onChange: function onChange(event) {
                        return setUserName(event.target.value);
                      },
                      placeholder: "jBloggs",
                      type: "text",
                      value: userName
                    })), /*#__PURE__*/_react["default"].createElement("button", {
                      className: "btn btn-primary",
                      onClick: function onClick() {
                        return onButtonSubmit();
                      }
                    }, "Add User"))
                  );
                };
                exports["default"] = _default;
                //# sourceMappingURL=AddUserForm.js.map
              }
            });
            //# sourceMappingURL=AddUserForm.js.map
          }
        });
        //# sourceMappingURL=AddUserForm.js.map
      }
    });
    //# sourceMappingURL=AddUserForm.js.map
  }
});
//# sourceMappingURL=AddUserForm.js.map