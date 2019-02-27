import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

class App extends Component {
  componentDidMount() {
    const client = new ApolloClient({
      uri: "/api"
    });

    client.query({
      query: gql`
        {
          user {
            name
          }
        }
      `,
    })
    .then(result => console.log(result));
  }
  
  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
