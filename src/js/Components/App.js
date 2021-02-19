import React from 'react';
import '../../style/app.scss';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { Settings } from './settings/settings';

export default class App extends React.Component {
  render() {
    return (
      <div className='wrapper green'>
        <Settings />
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
