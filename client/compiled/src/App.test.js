'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), div);
  _reactDom2.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAudGVzdC5qcyJdLCJuYW1lcyI6WyJpdCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsInVubW91bnRDb21wb25lbnRBdE5vZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsR0FBRywwQkFBSCxFQUErQixZQUFNO0FBQ25DLE1BQU1DLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLHFCQUFTQyxNQUFULENBQWdCLGtEQUFoQixFQUF5QkgsR0FBekI7QUFDQSxxQkFBU0ksc0JBQVQsQ0FBZ0NKLEdBQWhDO0FBQ0QsQ0FKRCIsImZpbGUiOiJBcHAudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5pdCgncmVuZGVycyB3aXRob3V0IGNyYXNoaW5nJywgKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRpdik7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbn0pO1xuIl19