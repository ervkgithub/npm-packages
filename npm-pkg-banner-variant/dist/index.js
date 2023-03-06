"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Banner = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Banner.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banner = props => {
  const Img_URL_Default = "https://thumbs.dreamstime.com/b/computer-cogs-technology-background-blue-banner-old-new-using-circuits-old-machine-31582628.jpg";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-promo"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-promo-bg",
    style: {
      backgroundImage: "url(" + Img_URL_Default + ")"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-content bg--".concat(props.content_bg_color, "  ").concat(props.direction)
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Banner Title Banner Title Banner"), /*#__PURE__*/_react.default.createElement("p", null, "Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc Banner desc"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://thumbs.dreamstime.com/b/computer-cogs-technology-background-blue-banner-old-new-using-circuits-old-machine-31582628.jpg"
  }, "Learn more")))));
};
exports.Banner = Banner;
var _default = Banner;
exports.default = _default;