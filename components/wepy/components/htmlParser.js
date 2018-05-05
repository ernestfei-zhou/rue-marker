'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../plugins/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLParser = function (_wepy$component) {
  _inherits(HTMLParser, _wepy$component);

  function HTMLParser() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, HTMLParser);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLParser.__proto__ || Object.getPrototypeOf(HTMLParser)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      parserName: {
        type: String,
        default: 'htmlParserName'
      },
      parserContent: {
        type: String,
        default: '<p style=\'font-size: 32rpx; padding: 30rpx 0; text-align: center;\'>没有任何内容</p>'
      },
      parserType: {
        type: String,
        default: 'html'
      },
      parserPadding: {
        type: Number,
        default: 0
      }
    }, _this.data = {
      htmlParserTpl: {},
      bindData: {}
    }, _this.events = {
      'htmlParser-broadcast': function htmlParserBroadcast($event) {
        _this.htmlParse();
      }
    }, _this.methods = {
      htmlParserNotice: function htmlParserNotice() {
        this.htmlParse();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTMLParser, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.htmlParse();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'wxParseImgLoad',
    value: function wxParseImgLoad(image) {
      var imgInfo = image.detail;
    }
  }, {
    key: 'htmlParse',
    value: function htmlParse() {
      /**
       * WxParse.wxParse(bindName , type, data, target,imagePadding)
       * 1.bindName绑定的数据名(必填)
       * 2.type可以为html或者md(必填)
       * 3.data为传入的具体数据(必填)
       * 4.target为Page对象,一般为this(必填)
       * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
       */
      try {
        var htmlContent = _wxParse2.default.wxParse(this.parserName, this.parserType, this.parserContent || this.props.parserContent.default, this, this.parserPadding);
        //        this.htmlParserTpl = this[this.parserName];
        this.htmlParserTpl = htmlContent[this.parserName];
        this.$apply();
      } catch (e) {
        console.warn('kinerHtmlParser:', '没有任何内容需要转换', e);
      }
    }
  }, {
    key: 'wxParseImgTap',
    value: function wxParseImgTap(e) {
      _wxParse2.default.wxParseImgTap(e, this.bindData);
    }
  }]);

  return HTMLParser;
}(_wepy2.default.component);

exports.default = HTMLParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxQYXJzZXIuanMiXSwibmFtZXMiOlsiSFRNTFBhcnNlciIsInByb3BzIiwicGFyc2VyTmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGFyc2VyQ29udGVudCIsInBhcnNlclR5cGUiLCJwYXJzZXJQYWRkaW5nIiwiTnVtYmVyIiwiZGF0YSIsImh0bWxQYXJzZXJUcGwiLCJiaW5kRGF0YSIsImV2ZW50cyIsIiRldmVudCIsImh0bWxQYXJzZSIsIm1ldGhvZHMiLCJodG1sUGFyc2VyTm90aWNlIiwiaW1hZ2UiLCJpbWdJbmZvIiwiZGV0YWlsIiwiaHRtbENvbnRlbnQiLCJ3eFBhcnNlIiwiJGFwcGx5IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwid3hQYXJzZUltZ1RhcCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQUROO0FBS05DLHFCQUFlO0FBQ2JILGNBQU1DLE1BRE87QUFFYkMsaUJBQVM7QUFGSSxPQUxUO0FBU05FLGtCQUFZO0FBQ1ZKLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQVROO0FBYU5HLHFCQUFlO0FBQ2JMLGNBQU1NLE1BRE87QUFFYkosaUJBQVM7QUFGSTtBQWJULEssUUFrQlJLLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlQQyxNLEdBQVM7QUFDUCw4QkFBd0IsNkJBQUNDLE1BQUQsRUFBcUI7QUFDM0MsY0FBS0MsU0FBTDtBQUNEO0FBSE0sSyxRQUtUQyxPLEdBQVU7QUFDUkMsc0JBRFEsOEJBQ1c7QUFDakIsYUFBS0YsU0FBTDtBQUNEO0FBSE8sSzs7Ozs7Ozs7Ozs7QUFNUixxQkFBS0EsU0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUVhRyxLLEVBQU87QUFDcEIsVUFBSUMsVUFBVUQsTUFBTUUsTUFBcEI7QUFDRDs7O2dDQUNXO0FBQ1Y7Ozs7Ozs7O0FBUUEsVUFBSTtBQUNGLFlBQUlDLGNBQWMsa0JBQVFDLE9BQVIsQ0FBZ0IsS0FBS3BCLFVBQXJCLEVBQWlDLEtBQUtLLFVBQXRDLEVBQWtELEtBQUtELGFBQUwsSUFBc0IsS0FBS0wsS0FBTCxDQUFXSyxhQUFYLENBQXlCRCxPQUFqRyxFQUEwRyxJQUExRyxFQUFnSCxLQUFLRyxhQUFySCxDQUFsQjtBQUNBO0FBQ0EsYUFBS0csYUFBTCxHQUFxQlUsWUFBWSxLQUFLbkIsVUFBakIsQ0FBckI7QUFDQSxhQUFLcUIsTUFBTDtBQUNELE9BTEQsQ0FLRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkMsZ0JBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxZQUFqQyxFQUErQ0YsQ0FBL0M7QUFDRDtBQUNGOzs7a0NBQ2FBLEMsRUFBRztBQUNmLHdCQUFRRyxhQUFSLENBQXNCSCxDQUF0QixFQUF5QixLQUFLWixRQUE5QjtBQUNEOzs7O0VBM0RxQyxlQUFLZ0IsUzs7a0JBQXhCNUIsVSIsImZpbGUiOiJodG1sUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uL3BsdWdpbnMvd3hQYXJzZS93eFBhcnNlJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MUGFyc2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgcGFyc2VyTmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodG1sUGFyc2VyTmFtZSdcbiAgICAgIH0sXG4gICAgICBwYXJzZXJDb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJzxwIHN0eWxlPVxcJ2ZvbnQtc2l6ZTogMzJycHg7IHBhZGRpbmc6IDMwcnB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjtcXCc+5rKh5pyJ5Lu75L2V5YaF5a65PC9wPidcbiAgICAgIH0sXG4gICAgICBwYXJzZXJUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0bWwnXG4gICAgICB9LFxuICAgICAgcGFyc2VyUGFkZGluZzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGh0bWxQYXJzZXJUcGw6IHt9LFxuICAgICAgYmluZERhdGE6IHt9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdodG1sUGFyc2VyLWJyb2FkY2FzdCc6ICgkZXZlbnQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5odG1sUGFyc2UoKVxuICAgICAgfSxcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGh0bWxQYXJzZXJOb3RpY2UoKSB7XG4gICAgICAgIHRoaXMuaHRtbFBhcnNlKClcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdGhpcy5odG1sUGFyc2UoKVxuICAgIH07XG4gICAgd3hQYXJzZUltZ0xvYWQoaW1hZ2UpIHtcbiAgICAgIGxldCBpbWdJbmZvID0gaW1hZ2UuZGV0YWlsXG4gICAgfTtcbiAgICBodG1sUGFyc2UoKSB7XG4gICAgICAvKipcbiAgICAgICAqIFd4UGFyc2Uud3hQYXJzZShiaW5kTmFtZSAsIHR5cGUsIGRhdGEsIHRhcmdldCxpbWFnZVBhZGRpbmcpXG4gICAgICAgKiAxLmJpbmROYW1l57uR5a6a55qE5pWw5o2u5ZCNKOW/heWhqylcbiAgICAgICAqIDIudHlwZeWPr+S7peS4umh0bWzmiJbogIVtZCjlv4XloaspXG4gICAgICAgKiAzLmRhdGHkuLrkvKDlhaXnmoTlhbfkvZPmlbDmja4o5b+F5aGrKVxuICAgICAgICogNC50YXJnZXTkuLpQYWdl5a+56LGhLOS4gOiIrOS4unRoaXMo5b+F5aGrKVxuICAgICAgICogNS5pbWFnZVBhZGRpbmfkuLrlvZPlm77niYfoh6rpgILlupTmmK/lt6blj7PnmoTljZXkuIBwYWRkaW5nKOm7mOiupOS4ujAs5Y+v6YCJKVxuICAgICAgICovXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgaHRtbENvbnRlbnQgPSBXeFBhcnNlLnd4UGFyc2UodGhpcy5wYXJzZXJOYW1lLCB0aGlzLnBhcnNlclR5cGUsIHRoaXMucGFyc2VyQ29udGVudCB8fCB0aGlzLnByb3BzLnBhcnNlckNvbnRlbnQuZGVmYXVsdCwgdGhpcywgdGhpcy5wYXJzZXJQYWRkaW5nKVxuICAgICAgICAvLyAgICAgICAgdGhpcy5odG1sUGFyc2VyVHBsID0gdGhpc1t0aGlzLnBhcnNlck5hbWVdO1xuICAgICAgICB0aGlzLmh0bWxQYXJzZXJUcGwgPSBodG1sQ29udGVudFt0aGlzLnBhcnNlck5hbWVdXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdraW5lckh0bWxQYXJzZXI6JywgJ+ayoeacieS7u+S9leWGheWuuemcgOimgei9rOaNoicsIGUpXG4gICAgICB9XG4gICAgfVxuICAgIHd4UGFyc2VJbWdUYXAoZSkge1xuICAgICAgV3hQYXJzZS53eFBhcnNlSW1nVGFwKGUsIHRoaXMuYmluZERhdGEpXG4gICAgfVxuICB9XG4iXX0=