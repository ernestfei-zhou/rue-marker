"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _toast = require('./../mixins/toast.js');

var _toast2 = _interopRequireDefault(_toast);

var _empty = require('./empty.js');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$page) {
  _inherits(List, _wepy$page);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_http2.default, _toast2.default], _this.$repeat = {}, _this.$props = { "empty": { "msg": "没有数据了" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default
    }, _this.props = {
      params: {
        type: Object,
        default: {
          tag_name: ""
        }
      },
      isTag: {
        type: String,
        default: "",
        twoWay: true
      }
    }, _this.data = {
      page: 1,
      page_size: 20,
      details: [],
      height: 520,
      scrollTop: 0,
      isNone: false
    }, _this.methods = {
      updateLists: function updateLists() {
        this.page++;
        this.getDetails();
      },
      toDetail: function toDetail(id) {
        _wepy2.default.navigateTo({
          url: "details?id=" + id + "&&from=news"
        });
      },
      toTagLists: function toTagLists(tag) {
        _wepy2.default.navigateTo({
          url: "tagLists?id=" + tag.id + "&&name=" + tag.name
        });
      },
      getNewDetails: function getNewDetails(page) {
        var _this2 = this;

        this.page = page || this.page;
        this.isNone = false;
        // scrollTop 值必须要有变化，不然的话没有效果
        this.scrollTop = 1;
        setTimeout(function () {
          _this2.scrollTop = 0;
          _this2.details = [];
          _this2.getDetails();
        }, 200);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: "getDetails",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resp, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.isNone && this.page != 1)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.GET("/details", Object.assign({
                  page: this.page,
                  page_size: this.page_size
                }, this.params));

              case 5:
                resp = _context.sent;

                if (!(resp.data.data.length == 0)) {
                  _context.next = 11;
                  break;
                }

                this.isNone = true;
                this.ShowToast("没有数据了");
                this.$apply();
                return _context.abrupt("return");

              case 11:
                for (i = 0; i < resp.data.data.length; i++) {
                  resp.data.data[i].created_at = this.timeParser(resp.data.data[i].created_at);
                }
                if (this.page != 1) {
                  this.details = this.details.concat(resp.data.data);
                } else {
                  this.details = resp.data.data;
                }
                this.$apply();
                _context.next = 18;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 16]]);
      }));

      function getDetails() {
        return _ref2.apply(this, arguments);
      }

      return getDetails;
    }()
  }, {
    key: "timeParser",
    value: function timeParser(t) {
      var date = new Date(Date.parse(t));
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      var d = date.getDate();
      d = d < 10 ? '0' + d : d;
      var h = date.getHours();
      var minute = date.getMinutes();
      minute = minute < 10 ? '0' + minute : minute;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var _this3 = this;

      try {
        setTimeout(function () {
          _this3.getDetails();
        }, 100);
        this.height = wx.getSystemInfoSync().screenHeight;
      } catch (error) {
        console.log(error);
      }
    }
  }]);

  return List;
}(_wepy2.default.page);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsIm1peGlucyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVtcHR5IiwicHJvcHMiLCJwYXJhbXMiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInRhZ19uYW1lIiwiaXNUYWciLCJTdHJpbmciLCJ0d29XYXkiLCJkYXRhIiwicGFnZSIsInBhZ2Vfc2l6ZSIsImRldGFpbHMiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJpc05vbmUiLCJtZXRob2RzIiwidXBkYXRlTGlzdHMiLCJnZXREZXRhaWxzIiwidG9EZXRhaWwiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1RhZ0xpc3RzIiwidGFnIiwibmFtZSIsImdldE5ld0RldGFpbHMiLCJzZXRUaW1lb3V0IiwiR0VUIiwiYXNzaWduIiwicmVzcCIsImxlbmd0aCIsIlNob3dUb2FzdCIsIiRhcHBseSIsImkiLCJjcmVhdGVkX2F0IiwidGltZVBhcnNlciIsImNvbmNhdCIsInQiLCJkYXRlIiwiRGF0ZSIsInBhcnNlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsInNjcmVlbkhlaWdodCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxpQyxRQUNWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsT0FBTSxPQUFQLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGNBQU1DLE1BREE7QUFFTkMsaUJBQVM7QUFDUEMsb0JBQVU7QUFESDtBQUZILE9BREY7QUFPTkMsYUFBTztBQUNMSixjQUFNSyxNQUREO0FBRUxILGlCQUFTLEVBRko7QUFHTEksZ0JBQVE7QUFISDtBQVBELEssUUFhUkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FERDtBQUVMQyxpQkFBVyxFQUZOO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxjQUFRLEdBSkg7QUFLTEMsaUJBQVcsQ0FMTjtBQU1MQyxjQUFRO0FBTkgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixhQUFLUCxJQUFMO0FBQ0EsYUFBS1EsVUFBTDtBQUNELE9BSk87QUFLUkMsY0FMUSxvQkFLQ0MsRUFMRCxFQUtLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsK0JBQW1CRixFQUFuQjtBQURjLFNBQWhCO0FBR0QsT0FUTztBQVVSRyxnQkFWUSxzQkFVR0MsR0FWSCxFQVVRO0FBQ2QsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CRSxJQUFJSixFQUF4QixlQUFvQ0ksSUFBSUM7QUFEMUIsU0FBaEI7QUFHRCxPQWRPO0FBZVJDLG1CQWZRLHlCQWVNaEIsSUFmTixFQWVZO0FBQUE7O0FBQ2xCLGFBQUtBLElBQUwsR0FBWUEsUUFBUSxLQUFLQSxJQUF6QjtBQUNBLGFBQUtLLE1BQUwsR0FBYyxLQUFkO0FBQ0E7QUFDQSxhQUFLRCxTQUFMLEdBQWlCLENBQWpCO0FBQ0FhLG1CQUFXLFlBQU07QUFDZixpQkFBS2IsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGlCQUFLRixPQUFMLEdBQWUsRUFBZjtBQUNBLGlCQUFLTSxVQUFMO0FBQ0QsU0FKRCxFQUlHLEdBSkg7QUFLRDtBQXpCTyxLOzs7Ozs7Ozs7Ozs7c0JBNEJKLEtBQUtILE1BQUwsSUFBZSxLQUFLTCxJQUFMLElBQWEsQzs7Ozs7Ozs7Ozt1QkFFWCxLQUFLa0IsR0FBTCxDQUFTLFVBQVQsRUFBcUJ6QixPQUFPMEIsTUFBUCxDQUFjO0FBQ3BEbkIsd0JBQU0sS0FBS0EsSUFEeUM7QUFFcERDLDZCQUFXLEtBQUtBO0FBRm9DLGlCQUFkLEVBR3JDLEtBQUtWLE1BSGdDLENBQXJCLEM7OztBQUFiNkIsb0I7O3NCQUlGQSxLQUFLckIsSUFBTCxDQUFVQSxJQUFWLENBQWVzQixNQUFmLElBQXlCLEM7Ozs7O0FBQzNCLHFCQUFLaEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxxQkFBS2lCLFNBQUwsQ0FBZSxPQUFmO0FBQ0EscUJBQUtDLE1BQUw7Ozs7QUFHRixxQkFBU0MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlKLEtBQUtyQixJQUFMLENBQVVBLElBQVYsQ0FBZXNCLE1BQW5DLEVBQTJDRyxHQUEzQyxFQUFnRDtBQUM5Q0osdUJBQUtyQixJQUFMLENBQVVBLElBQVYsQ0FBZXlCLENBQWYsRUFBa0JDLFVBQWxCLEdBQStCLEtBQUtDLFVBQUwsQ0FBZ0JOLEtBQUtyQixJQUFMLENBQVVBLElBQVYsQ0FBZXlCLENBQWYsRUFBa0JDLFVBQWxDLENBQS9CO0FBQ0Q7QUFDRCxvQkFBSSxLQUFLekIsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2xCLHVCQUFLRSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFheUIsTUFBYixDQUFvQlAsS0FBS3JCLElBQUwsQ0FBVUEsSUFBOUIsQ0FBZjtBQUNELGlCQUZELE1BRU87QUFDTCx1QkFBS0csT0FBTCxHQUFla0IsS0FBS3JCLElBQUwsQ0FBVUEsSUFBekI7QUFDRDtBQUNELHFCQUFLd0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUdPSyxDLEVBQUc7QUFDWixVQUFJQyxPQUFPLElBQUlDLElBQUosQ0FBU0EsS0FBS0MsS0FBTCxDQUFXSCxDQUFYLENBQVQsQ0FBWDtBQUNBLFVBQUlJLElBQUlILEtBQUtJLFdBQUwsRUFBUjtBQUNBLFVBQUlDLElBQUlMLEtBQUtNLFFBQUwsS0FBa0IsQ0FBMUI7QUFDQUQsVUFBSUEsSUFBSSxFQUFKLEdBQVMsTUFBTUEsQ0FBZixHQUFtQkEsQ0FBdkI7QUFDQSxVQUFJRSxJQUFJUCxLQUFLUSxPQUFMLEVBQVI7QUFDQUQsVUFBSUEsSUFBSSxFQUFKLEdBQVUsTUFBTUEsQ0FBaEIsR0FBcUJBLENBQXpCO0FBQ0EsVUFBSUUsSUFBSVQsS0FBS1UsUUFBTCxFQUFSO0FBQ0EsVUFBSUMsU0FBU1gsS0FBS1ksVUFBTCxFQUFiO0FBQ0FELGVBQVNBLFNBQVMsRUFBVCxHQUFlLE1BQU1BLE1BQXJCLEdBQStCQSxNQUF4QztBQUNBLGFBQU9SLElBQUksR0FBSixHQUFVRSxDQUFWLEdBQWMsR0FBZCxHQUFvQkUsQ0FBcEIsR0FBd0IsR0FBeEIsR0FBOEJFLENBQTlCLEdBQWtDLEdBQWxDLEdBQXdDRSxNQUEvQztBQUNEOzs7NkJBQ1E7QUFBQTs7QUFDUCxVQUFJO0FBQ0Z2QixtQkFBVyxZQUFNO0FBQ2YsaUJBQUtULFVBQUw7QUFDRCxTQUZELEVBRUcsR0FGSDtBQUdBLGFBQUtMLE1BQUwsR0FBY3VDLEdBQUdDLGlCQUFILEdBQXVCQyxZQUFyQztBQUNELE9BTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0Y7Ozs7RUFyRytCLGVBQUs3QyxJOztrQkFBbEJqQixJIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgaW1wb3J0IEh0dHBNaXhpbiBmcm9tIFwibWl4aW5zL2h0dHBcIjtcbiAgaW1wb3J0IFRvYXN0TWl4aW4gZnJvbSBcIm1peGlucy90b2FzdFwiO1xuICBpbXBvcnQgRW1wdHkgZnJvbSBcImNvbXBvbmVudHMvZW1wdHlcIlxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbSHR0cE1peGluLCBUb2FzdE1peGluXVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJlbXB0eVwiOntcIm1zZ1wiOlwi5rKh5pyJ5pWw5o2u5LqGXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGVtcHR5OiBFbXB0eVxuICAgIH1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0YWdfbmFtZTogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNUYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBcIlwiLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwYWdlX3NpemU6IDIwLFxuICAgICAgZGV0YWlsczogW10sXG4gICAgICBoZWlnaHQ6IDUyMCxcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGlzTm9uZTogZmFsc2UsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdXBkYXRlTGlzdHMoKSB7XG4gICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICB0aGlzLmdldERldGFpbHMoKVxuICAgICAgfSxcbiAgICAgIHRvRGV0YWlsKGlkKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgZGV0YWlscz9pZD0ke2lkfSYmZnJvbT1uZXdzYFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvVGFnTGlzdHModGFnKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgdGFnTGlzdHM/aWQ9JHt0YWcuaWR9JiZuYW1lPSR7dGFnLm5hbWV9YFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdldE5ld0RldGFpbHMocGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlIHx8IHRoaXMucGFnZVxuICAgICAgICB0aGlzLmlzTm9uZSA9IGZhbHNlXG4gICAgICAgIC8vIHNjcm9sbFRvcCDlgLzlv4XpobvopoHmnInlj5jljJbvvIzkuI3nhLbnmoTor53msqHmnInmlYjmnpxcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSAxXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMFxuICAgICAgICAgIHRoaXMuZGV0YWlscyA9IFtdXG4gICAgICAgICAgdGhpcy5nZXREZXRhaWxzKClcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0RGV0YWlscygpIHtcbiAgICAgIGlmICh0aGlzLmlzTm9uZSAmJiB0aGlzLnBhZ2UgIT0gMSkgcmV0dXJuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5HRVQoXCIvZGV0YWlsc1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgcGFnZV9zaXplOiB0aGlzLnBhZ2Vfc2l6ZSxcbiAgICAgICAgfSwgdGhpcy5wYXJhbXMpKVxuICAgICAgICBpZiAocmVzcC5kYXRhLmRhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICB0aGlzLmlzTm9uZSA9IHRydWVcbiAgICAgICAgICB0aGlzLlNob3dUb2FzdChcIuayoeacieaVsOaNruS6hlwiKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3AuZGF0YS5kYXRhW2ldLmNyZWF0ZWRfYXQgPSB0aGlzLnRpbWVQYXJzZXIocmVzcC5kYXRhLmRhdGFbaV0uY3JlYXRlZF9hdClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYWdlICE9IDEpIHtcbiAgICAgICAgICB0aGlzLmRldGFpbHMgPSB0aGlzLmRldGFpbHMuY29uY2F0KHJlc3AuZGF0YS5kYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGV0YWlscyA9IHJlc3AuZGF0YS5kYXRhXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG4gICAgdGltZVBhcnNlcih0KSB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UodCkpXG4gICAgICBsZXQgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgIG0gPSBtIDwgMTAgPyAnMCcgKyBtIDogbTtcbiAgICAgIGxldCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICBkID0gZCA8IDEwID8gKCcwJyArIGQpIDogZDtcbiAgICAgIGxldCBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgbGV0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgbWludXRlID0gbWludXRlIDwgMTAgPyAoJzAnICsgbWludXRlKSA6IG1pbnV0ZTtcbiAgICAgIHJldHVybiB5ICsgJy0nICsgbSArICctJyArIGQgKyAnICcgKyBoICsgJzonICsgbWludXRlO1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmdldERldGFpbHMoKVxuICAgICAgICB9LCAxMDApXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==