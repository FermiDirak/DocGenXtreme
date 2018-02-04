import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/*
 * Data
 */

var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn", companyName: "MocuSign", address: "944 Market Street, San Francisco, CA. 94115"},
  {key: 2, name: "Jim", email: "jim@example.com", companyName: "MocuSign", address: "944 Market Street, San Francisco, CA. 94115"},
  {key: 3, name: "Joe"},
]

var newContact = {name: "", email: "", description: ""}


/*
 * Entry point
 */
it('renders without crashing', () => {
  ReactDOM.render(<App />,
    React.createElement(ContactView, {
      contacts: contacts,
      newContact: newContact
    }));
  ReactDOM.unmountComponentAtNode(div);
});
