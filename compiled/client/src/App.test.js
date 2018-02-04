'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Data
 */

var contacts = [{ key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn", companyName: "MocuSign", address: "944 Market Street, San Francisco, CA. 94115" }, { key: 2, name: "Jim", email: "jim@example.com", companyName: "MocuSign", address: "944 Market Street, San Francisco, CA. 94115" }, { key: 3, name: "Joe" }];

var newContact = { name: "", email: "", description: ""

  /*
   * Entry point
   */
};it('renders without crashing', function () {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), _react2.default.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }));
  _reactDom2.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQXBwLnRlc3QuanMiXSwibmFtZXMiOlsiY29udGFjdHMiLCJrZXkiLCJuYW1lIiwiZW1haWwiLCJkZXNjcmlwdGlvbiIsImNvbXBhbnlOYW1lIiwiYWRkcmVzcyIsIm5ld0NvbnRhY3QiLCJpdCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJDb250YWN0VmlldyIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJkaXYiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTs7OztBQUlBLElBQUlBLFdBQVcsQ0FDYixFQUFDQyxLQUFLLENBQU4sRUFBU0MsTUFBTSxnQkFBZixFQUFpQ0MsT0FBTyx3QkFBeEMsRUFBa0VDLGFBQWEsbUJBQS9FLEVBQW9HQyxhQUFhLFVBQWpILEVBQTZIQyxTQUFTLDZDQUF0SSxFQURhLEVBRWIsRUFBQ0wsS0FBSyxDQUFOLEVBQVNDLE1BQU0sS0FBZixFQUFzQkMsT0FBTyxpQkFBN0IsRUFBZ0RFLGFBQWEsVUFBN0QsRUFBeUVDLFNBQVMsNkNBQWxGLEVBRmEsRUFHYixFQUFDTCxLQUFLLENBQU4sRUFBU0MsTUFBTSxLQUFmLEVBSGEsQ0FBZjs7QUFNQSxJQUFJSyxhQUFhLEVBQUNMLE1BQU0sRUFBUCxFQUFXQyxPQUFPLEVBQWxCLEVBQXNCQyxhQUFhOztBQUdwRDs7O0FBSGlCLENBQWpCLENBTUFJLEdBQUcsMEJBQUgsRUFBK0IsWUFBTTtBQUNuQyxxQkFBU0MsTUFBVCxDQUFnQixrREFBaEIsRUFDRSxnQkFBTUMsYUFBTixDQUFvQkMsV0FBcEIsRUFBaUM7QUFDL0JYLGNBQVVBLFFBRHFCO0FBRS9CTyxnQkFBWUE7QUFGbUIsR0FBakMsQ0FERjtBQUtBLHFCQUFTSyxzQkFBVCxDQUFnQ0MsR0FBaEM7QUFDRCxDQVBEIiwiZmlsZSI6IkFwcC50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cblxuLypcbiAqIERhdGFcbiAqL1xuXG52YXIgY29udGFjdHMgPSBbXG4gIHtrZXk6IDEsIG5hbWU6IFwiSmFtZXMgSyBOZWxzb25cIiwgZW1haWw6IFwiamFtZXNAamFtZXNrbmVsc29uLmNvbVwiLCBkZXNjcmlwdGlvbjogXCJGcm9udC1lbmQgVW5pY29yblwiLCBjb21wYW55TmFtZTogXCJNb2N1U2lnblwiLCBhZGRyZXNzOiBcIjk0NCBNYXJrZXQgU3RyZWV0LCBTYW4gRnJhbmNpc2NvLCBDQS4gOTQxMTVcIn0sXG4gIHtrZXk6IDIsIG5hbWU6IFwiSmltXCIsIGVtYWlsOiBcImppbUBleGFtcGxlLmNvbVwiLCBjb21wYW55TmFtZTogXCJNb2N1U2lnblwiLCBhZGRyZXNzOiBcIjk0NCBNYXJrZXQgU3RyZWV0LCBTYW4gRnJhbmNpc2NvLCBDQS4gOTQxMTVcIn0sXG4gIHtrZXk6IDMsIG5hbWU6IFwiSm9lXCJ9LFxuXVxuXG52YXIgbmV3Q29udGFjdCA9IHtuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgZGVzY3JpcHRpb246IFwiXCJ9XG5cblxuLypcbiAqIEVudHJ5IHBvaW50XG4gKi9cbml0KCdyZW5kZXJzIHdpdGhvdXQgY3Jhc2hpbmcnLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFjdFZpZXcsIHtcbiAgICAgIGNvbnRhY3RzOiBjb250YWN0cyxcbiAgICAgIG5ld0NvbnRhY3Q6IG5ld0NvbnRhY3RcbiAgICB9KSk7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbn0pO1xuIl19