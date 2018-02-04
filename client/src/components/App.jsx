class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
        <NavBar />
        <div className="row container">
          <div className="col-md-6 offset-md-3"
            <Inputs />
          </div>
      </div>
    );
  }

}

window.App = App;