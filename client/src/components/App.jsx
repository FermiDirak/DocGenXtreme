import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      response: '',
    };
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

export default App;