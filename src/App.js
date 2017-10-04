import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';
import './styles/style.css';

import shoeList from './data/shoelist';
import Home from './components/Home';
import Flats from './components/Flats';
import Heels from './components/Heels';
import Boots from './components/Boots';
import Bag from './components/Bag';
import ShoeDetails from './components/ShoeDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeList: shoeList,
      shoppingBag: [],
    }
  }

  handlePurchase(event){
    for (let i = 0; i < shoeList.length; i++) {
      if (event.id === shoeList[i].id) {
        console.log(shoeList[i]);
        this.setState({ shoppingBag: this.state.shoppingBag.concat([shoeList[i]])},
      () => console.log(this.state.shoppingBag));
      }
    }
  }

  render() {
    // pass props to the home page
    const RenderHome = (props) => {
      return(
        <Home shoes={this.state.shoeList} />
      )
    }

    // pass props to the heels page
    const RenderHeels = (props) => {
      return(
        <Heels shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    // pass props to the flats page
    const RenderFlats = (props) => {
      return(
        <Flats shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    // pass props to the boots page
    const RenderBoots = (props) => {
      return(
        <Boots shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    // pass props to the shopping bag page
    const RenderBag = (props) => {
      return(
        <Bag bag={this.state.shoppingBag}/>
      )
    }

    const RenderShoes = (props) => {
      return (
        <ShoeDetails {...props} shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    return (
      <div className="App">
        <header>
          <div className="title">
            <h3>if the shoe fits... <span>STRUT.</span></h3>
          </div>
          <nav className="main-nav">
            <ul>
              <li className="nav-symbol"><Link to="/"><i className="fa fa-home fa-2x"></i></Link></li>
              <li><Link to="/heels">Heels</Link></li>
              <li><Link to="/flats">Flats</Link></li>
              <li><Link to="/boots">Boots</Link></li>
              <li className="nav-symbol"><Link to="/shopping_bag"><i className="fa fa-suitcase fa-2x"></i> {this.state.shoppingBag.length}</Link></li>
            </ul>
          </nav>
        </header>

        <main className="wrapper">
          <Switch>
            <Route path="/shoes/:id" render={RenderShoes}/>
            <Route path="/heels" render={RenderHeels} />
            <Route path="/flats" render={RenderFlats} />
            <Route path="/boots" render={RenderBoots} />
            <Route path="/shopping_bag" render={RenderBag} />
            <Route path="/" render={RenderHome}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
