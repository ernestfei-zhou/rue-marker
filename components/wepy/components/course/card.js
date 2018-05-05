"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      item: {
        type: Object,
        default: {}
      },
      isTo: {
        type: Boolean,
        default: true
      }
    }, _this.methods = {
      to: function to() {
        if (!this.isTo) return;
        var q = "course_id=" + this.item.course_id + "&lesson_id=" + this.item.lesson_id;
        _wepy2.default.navigateTo({
          url: "/pages/course/details?" + q
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaXNUbyIsIkJvb2xlYW4iLCJtZXRob2RzIiwidG8iLCJxIiwiY291cnNlX2lkIiwibGVzc29uX2lkIiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMLE9BREE7QUFLTkMsWUFBTTtBQUNKSCxjQUFNSSxPQURGO0FBRUpGLGlCQUFTO0FBRkw7QUFMQSxLLFFBVVJHLE8sR0FBVTtBQUNSQyxRQURRLGdCQUNIO0FBQ0gsWUFBSSxDQUFDLEtBQUtILElBQVYsRUFBZ0I7QUFDaEIsWUFBTUksbUJBQWlCLEtBQUtSLElBQUwsQ0FBVVMsU0FBM0IsbUJBQWtELEtBQUtULElBQUwsQ0FBVVUsU0FBbEU7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLDJCQUEyQko7QUFEbEIsU0FBaEI7QUFHRDtBQVBPLEs7Ozs7RUFYc0IsZUFBS0ssUzs7a0JBQWxCZixJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgaXRlbToge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBpc1RvOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RvKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcSA9IGBjb3Vyc2VfaWQ9JHt0aGlzLml0ZW0uY291cnNlX2lkfSZsZXNzb25faWQ9JHt0aGlzLml0ZW0ubGVzc29uX2lkfWBcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9jb3Vyc2UvZGV0YWlscz9cIiArIHFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=