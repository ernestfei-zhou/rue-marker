'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MView = function (_wepy$component) {
  _inherits(MView, _wepy$component);

  function MView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MView.__proto__ || Object.getPrototypeOf(MView)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      args: {
        type: Array,
        default: []
      },
      arg: {
        type: Object
      }
    }, _this.mixins = [_http2.default], _this.methods = {
      cache: function cache(e) {
        if (this.arg) {
          this.$emit("mtap", this.arg);
        } else {
          this.$emit.apply(this, ["mtap"].concat(_toConsumableArray(this.args)));
        }
        if (e.detail.formId == "the formId is a mock one") {
          console.log("现在处于微信开发者工具！");
          return;
        }
        this.POST("/user/msg_id", {
          "ids": e.detail.formId
        }, false);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MView;
}(_wepy2.default.component);

exports.default = MView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12aWV3LmpzIl0sIm5hbWVzIjpbIk1WaWV3IiwicHJvcHMiLCJhcmdzIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImFyZyIsIk9iamVjdCIsIm1peGlucyIsIm1ldGhvZHMiLCJjYWNoZSIsImUiLCIkZW1pdCIsImRldGFpbCIsImZvcm1JZCIsImNvbnNvbGUiLCJsb2ciLCJQT1NUIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsS0FERjtBQUVKQyxpQkFBUztBQUZMLE9BREE7QUFLTkMsV0FBSztBQUNISCxjQUFNSTtBQURIO0FBTEMsSyxRQVNSQyxNLEdBQVMsZ0IsUUFDVEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0ZDLENBREUsRUFDQztBQUNQLFlBQUksS0FBS0wsR0FBVCxFQUFjO0FBQ1osZUFBS00sS0FBTCxDQUFXLE1BQVgsRUFBbUIsS0FBS04sR0FBeEI7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLTSxLQUFMLGNBQVcsTUFBWCw0QkFBc0IsS0FBS1YsSUFBM0I7QUFDRDtBQUNELFlBQUlTLEVBQUVFLE1BQUYsQ0FBU0MsTUFBVCxJQUFtQiwwQkFBdkIsRUFBbUQ7QUFDakRDLGtCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBO0FBQ0Q7QUFDRCxhQUFLQyxJQUFMLENBQVUsY0FBVixFQUEwQjtBQUN4QixpQkFBT04sRUFBRUUsTUFBRixDQUFTQztBQURRLFNBQTFCLEVBRUcsS0FGSDtBQUdEO0FBZE8sSzs7OztFQVh1QixlQUFLSSxTOztrQkFBbkJsQixLIiwiZmlsZSI6Im12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBIdHRwTWl4aW4gZnJvbSAnbWl4aW5zL2h0dHAnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1WaWV3IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgYXJnczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBhcmc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfVxuICAgIH1cbiAgICBtaXhpbnMgPSBbSHR0cE1peGluXVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjYWNoZShlKSB7XG4gICAgICAgIGlmICh0aGlzLmFyZykge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJtdGFwXCIsIHRoaXMuYXJnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJtdGFwXCIsIC4uLnRoaXMuYXJncylcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5kZXRhaWwuZm9ybUlkID09IFwidGhlIGZvcm1JZCBpcyBhIG1vY2sgb25lXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIueOsOWcqOWkhOS6juW+ruS/oeW8gOWPkeiAheW3peWFt++8gVwiKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlBPU1QoXCIvdXNlci9tc2dfaWRcIiwge1xuICAgICAgICAgIFwiaWRzXCI6IGUuZGV0YWlsLmZvcm1JZFxuICAgICAgICB9LCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==