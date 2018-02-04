import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentForm: this.props.forms[0],
      forms: this.props.forms;
      selectedForm: this.props.forms[0]
      response: '',
    }

    this.url = ''//link to Docusign API.
  }

  //makes calls the Docusign API for calls.
  requestSignature() {

  }

  //Stores signed documents
  storeSignatures() {

  }



  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return(
      <div className="App">
        <NavBar />
        <div className="row container">
          <div className="col-md-6 offset-md-3"
            <Inputs />
          </div>
      <div>
      DocuGenXtreme
      <br/>
      <br/>
      <br/>
      API Call example:
      <br/>
      {this.state.response}
      </div>
    );
  }

}

window.App = App;
export default App;