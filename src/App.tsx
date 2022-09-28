import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Homepage from './components/pages/Home';
class App extends React.Component<{}, {actualPage: string} > {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: window.location.pathname
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar page={this.state.actualPage}/>
        <div className="App-header">
          { this.state.actualPage === '/home' && <Homepage/>}
          { this.state.actualPage === '/about' ? <About/> : <Unreachable/>}
        </div>
        <BrowserRouter>
          <Routes/>  
        </BrowserRouter>
      </div>
    );
  }
}

const About = () => {
  return <h1>Lorem ipsum</h1>
}

const Unreachable = () => {
  return <h1>404 - not found !</h1>
}
export default App;