import React, { Component } from 'react';
import BookList from '../containers/book-list';

// a container is a normal react component that gets bonded to the State
// whenevewr state changes the component changes as well

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
