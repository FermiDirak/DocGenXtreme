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
<<<<<<< HEAD
      <div className="App">
        <NavBar />
        <div className="row container">
          <div className="col-md-6 offset-md-3"
            <Inputs />
          </div>
=======
      <div>
      DocuGenXtreme
      <br/>
      <br/>
      <br/>
      API Call example:
      <br/>
      {this.state.response}
>>>>>>> e76b342d70d28d5fbd9ebeefdc58a41f46897875
      </div>
    );
  }

}

<<<<<<< HEAD
window.App = App;
=======
export default App;
>>>>>>> e76b342d70d28d5fbd9ebeefdc58a41f46897875
