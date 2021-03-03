import React from 'react';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { Settings } from './settings/settings';
import Game from '../data/Game';
import { Statistics } from './main/Statistics';

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
    this.game.saveGame();
  }

  keyUp(e) {
    console.log('up', e.key);
  }

  render() {
    const className = `${this.game.settings.activeTheme}`;
    return (
      <main className={className}>
        <Settings game = {this.game} updateState={this.updateGameState}/>
        <Statistics game = {this.game} updateState={this.updateGameState}/>
        <Header game = {this.game} updateState={this.updateGameState}/>
        <Main game = {this.game} updateState={this.updateGameState}/>
        <Footer/>
      </main>
    )
  }
}
