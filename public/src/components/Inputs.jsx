class Inputs extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    //console.log($('#firstName'));
    var companyName = $('#companyName').val();
    var recipients = {
      signers: [{
        email: $('#email').val(),
        name: $('#firstName').val() + ' ' + $('#lastName').val(),
        recipientId: 1,
        routingOrder: 1,
        tabs: {
          "dateSignedTabs":
          {
            
          }
        }
      }]

    };
    console.log(recipients);
  }

  render() {
    return (
      <div id="inputs" className="container">
        <div className="inputBox">
          <input 
            id="firstName" 
            placeholder="First Name" 
            type="text"
          />
        </div>
        <div className="inputBox">
          <input 
            id="lastName" 
            placeholder="Last Name" 
            type="text"
          />
        </div>
        <div className="inputBox">
          <input 
            id="email" 
            placeholder="Email Address" 
            type="email"
          />
        </div>
        <div className="inputBox">
          <input 
            id="companyName" 
            placeholder="Company Name" 
            type="text"
          />
        </div>
        <div className="inputBox">
          <button 
            onClick={this.handleClick.bind(this)} 
            id="submit">Send MocuSign
          </button>
        </div>
      </div>
    )
  }

}


