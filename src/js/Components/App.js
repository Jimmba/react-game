import React from 'react';
//import '../../style/app.scss';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { Settings } from './settings/settings';
import Game from '../data/Game';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Game();
    this.state = {
      game: this.game
    }
    this.updateGameState = this.updateGameState.bind(this);
  }

  updateGameState(state) {
    this.setState({
      game: state
    })
  }

  render() {
    const className = `wrapper ${this.game.settings.activeTheme}`;
    return (
      <div className={className}>
        <Settings game = {this.game} updateState={this.updateGameState}/>
        <Header game = {this.game} updateState={this.updateGameState}/>
        <Main game = {this.game}/>
        <Footer/>
      </div>
    )
  }
}
