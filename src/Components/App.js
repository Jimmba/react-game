import React from 'react';
import './app.scss';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div class = 'wrapper green'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
