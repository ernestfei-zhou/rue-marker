"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$component) {
  _inherits(Card, _wepy$component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      icon: String,
      title: String,
      isShow: Array,
      url: String,
      iconBg: {
        type: String,
        default: "#99ccee"
      },
      noneText: {
        type: String,
        default: "暂无数据"
      },
      footText: {
        type: String,
        default: "点击查看"
      },
      bg: {
        type: String,
        default: "card-kb.png"
      }
    }, _this.methods = {
      to: function to() {
        _wepy2.default.navigateTo({
          url: this.url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInRpdGxlIiwiaXNTaG93IiwiQXJyYXkiLCJ1cmwiLCJpY29uQmciLCJ0eXBlIiwiZGVmYXVsdCIsIm5vbmVUZXh0IiwiZm9vdFRleHQiLCJiZyIsIm1ldGhvZHMiLCJ0byIsIm5hdmlnYXRlVG8iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU9ELE1BRkQ7QUFHTkUsY0FBUUMsS0FIRjtBQUlOQyxXQUFLSixNQUpDO0FBS05LLGNBQVE7QUFDTkMsY0FBTU4sTUFEQTtBQUVOTyxpQkFBUztBQUZILE9BTEY7QUFTTkMsZ0JBQVU7QUFDUkYsY0FBTU4sTUFERTtBQUVSTyxpQkFBUztBQUZELE9BVEo7QUFhTkUsZ0JBQVU7QUFDUkgsY0FBTU4sTUFERTtBQUVSTyxpQkFBUztBQUZELE9BYko7QUFpQk5HLFVBQUk7QUFDRkosY0FBTU4sTUFESjtBQUVGTyxpQkFBUztBQUZQO0FBakJFLEssUUFzQlJJLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZFQsZUFBSyxLQUFLQTtBQURJLFNBQWhCO0FBR0Q7QUFMTyxLOzs7O0VBdkJzQixlQUFLVSxTOztrQkFBbEJqQixJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGljb246IFN0cmluZyxcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICBpc1Nob3c6IEFycmF5LFxuICAgICAgdXJsOiBTdHJpbmcsXG4gICAgICBpY29uQmc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBcIiM5OWNjZWVcIlxuICAgICAgfSxcbiAgICAgIG5vbmVUZXh0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogXCLmmoLml6DmlbDmja5cIlxuICAgICAgfSxcbiAgICAgIGZvb3RUZXh0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogXCLngrnlh7vmn6XnnItcIlxuICAgICAgfSxcbiAgICAgIGJnOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogXCJjYXJkLWtiLnBuZ1wiXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0bygpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHRoaXMudXJsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=