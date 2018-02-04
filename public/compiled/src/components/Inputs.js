'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inputs = function (_React$Component) {
  _inherits(Inputs, _React$Component);

  function Inputs(props) {
    _classCallCheck(this, Inputs);

    return _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this, props));
  }

  _createClass(Inputs, [{
    key: 'handleClick',
    value: function handleClick(e) {
      //console.log($('#firstName'));
      var companyName = $('#companyName').val();
      var recipients = {
        signers: [{
          email: $('#email').val(),
          name: $('#firstName').val() + ' ' + $('#lastName').val(),
          recipientId: 1,
          routingOrder: 1,
          tabs: {
            "dateSignedTabs": {}
          }
        }]

      };
      console.log(recipients);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'inputs', className: 'container' },
        React.createElement(
          'div',
          { className: 'inputBox' },
          React.createElement('input', {
            id: 'firstName',
            placeholder: 'First Name',
            type: 'text'
          })
        ),
        React.createElement(
          'div',
          { className: 'inputBox' },
          React.createElement('input', {
            id: 'lastName',
            placeholder: 'Last Name',
            type: 'text'
          })
        ),
        React.createElement(
          'div',
          { className: 'inputBox' },
          React.createElement('input', {
            id: 'email',
            placeholder: 'Email Address',
            type: 'email'
          })
        ),
        React.createElement(
          'div',
          { className: 'inputBox' },
          React.createElement('input', {
            id: 'companyName',
            placeholder: 'Company Name',
            type: 'text'
          })
        ),
        React.createElement(
          'div',
          { className: 'inputBox' },
          React.createElement(
            'button',
            {
              onClick: this.handleClick.bind(this),
              id: 'submit' },
            'Send MocuSign'
          )
        )
      );
    }
  }]);

  return Inputs;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0cy5qc3giXSwibmFtZXMiOlsiSW5wdXRzIiwicHJvcHMiLCJlIiwiY29tcGFueU5hbWUiLCIkIiwidmFsIiwicmVjaXBpZW50cyIsInNpZ25lcnMiLCJlbWFpbCIsIm5hbWUiLCJyZWNpcGllbnRJZCIsInJvdXRpbmdPcmRlciIsInRhYnMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBRUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7OztnQ0FFV0MsQyxFQUFHO0FBQ2I7QUFDQSxVQUFJQyxjQUFjQyxFQUFFLGNBQUYsRUFBa0JDLEdBQWxCLEVBQWxCO0FBQ0EsVUFBSUMsYUFBYTtBQUNmQyxpQkFBUyxDQUFDO0FBQ1JDLGlCQUFPSixFQUFFLFFBQUYsRUFBWUMsR0FBWixFQURDO0FBRVJJLGdCQUFNTCxFQUFFLFlBQUYsRUFBZ0JDLEdBQWhCLEtBQXdCLEdBQXhCLEdBQThCRCxFQUFFLFdBQUYsRUFBZUMsR0FBZixFQUY1QjtBQUdSSyx1QkFBYSxDQUhMO0FBSVJDLHdCQUFjLENBSk47QUFLUkMsZ0JBQU07QUFDSiw4QkFDQTtBQUZJO0FBTEUsU0FBRDs7QUFETSxPQUFqQjtBQWVBQyxjQUFRQyxHQUFSLENBQVlSLFVBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLFFBQVIsRUFBaUIsV0FBVSxXQUEzQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQ0UsZ0JBQUcsV0FETDtBQUVFLHlCQUFZLFlBRmQ7QUFHRSxrQkFBSztBQUhQO0FBREYsU0FERjtBQVFFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQ0UsZ0JBQUcsVUFETDtBQUVFLHlCQUFZLFdBRmQ7QUFHRSxrQkFBSztBQUhQO0FBREYsU0FSRjtBQWVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQ0UsZ0JBQUcsT0FETDtBQUVFLHlCQUFZLGVBRmQ7QUFHRSxrQkFBSztBQUhQO0FBREYsU0FmRjtBQXNCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUNFLGdCQUFHLGFBREw7QUFFRSx5QkFBWSxjQUZkO0FBR0Usa0JBQUs7QUFIUDtBQURGLFNBdEJGO0FBNkJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFTLEtBQUtTLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRFg7QUFFRSxrQkFBRyxRQUZMO0FBQUE7QUFBQTtBQURGO0FBN0JGLE9BREY7QUFzQ0Q7Ozs7RUFsRWtCQyxNQUFNQyxTIiwiZmlsZSI6IklucHV0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIElucHV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgLy9jb25zb2xlLmxvZygkKCcjZmlyc3ROYW1lJykpO1xuICAgIHZhciBjb21wYW55TmFtZSA9ICQoJyNjb21wYW55TmFtZScpLnZhbCgpO1xuICAgIHZhciByZWNpcGllbnRzID0ge1xuICAgICAgc2lnbmVyczogW3tcbiAgICAgICAgZW1haWw6ICQoJyNlbWFpbCcpLnZhbCgpLFxuICAgICAgICBuYW1lOiAkKCcjZmlyc3ROYW1lJykudmFsKCkgKyAnICcgKyAkKCcjbGFzdE5hbWUnKS52YWwoKSxcbiAgICAgICAgcmVjaXBpZW50SWQ6IDEsXG4gICAgICAgIHJvdXRpbmdPcmRlcjogMSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIFwiZGF0ZVNpZ25lZFRhYnNcIjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dXG5cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHJlY2lwaWVudHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiaW5wdXRzXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIj5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIj5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBpZD1cImxhc3ROYW1lXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgaWQ9XCJjb21wYW55TmFtZVwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IE5hbWVcIiBcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgaWQ9XCJzdWJtaXRcIj5TZW5kIE1vY3VTaWduXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuXG4iXX0=