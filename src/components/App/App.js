import React, { Component } from 'react';
import InputForm from './InputForm';
import KoalaList from '../KoalaList/KoalaList'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Koala Holla!</h1>
        <InputForm />
        <KoalaList />

      </div>
    );
  }
  
}

export default App;
