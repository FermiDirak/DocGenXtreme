class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentForm: this.props.forms[0],
      forms: this.props.forms;
      selectedForm: this.props.forms[0]
    }

    this.url = ''//link to Docusign API.
  }

  //makes calls the Docusign API for calls.
  requestSignature() {


  }

  //Stores signed documents
  storeSignatures() {

  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search inputText={this.setStorageWInput.bind(this)} handleClick={this.callApi.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected} />
          </div>
          <div className="col-md-5">
            <VideoList select={this.select.bind(this)} videos={this.state.videoData} />
          </div>
        </div>
      </div>
    );
  }

}

window.App = App;