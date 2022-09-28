import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Homepage from './components/pages/Home';
import UserLogin from './components/pages/UserLogin';

const ptBR = require("./data/res_primary_language.json");
const enUS = require("./data/res_secondary_language.json");
const data = require("./data/shared_data.json");

class App extends Component {
  constructor(props: any){
    super(props);
    this.state = {
      user: undefined,
      language: "ptBR",
      isLogged: false,
    }
  }
  render(): React.ReactNode {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/user/login" element={<UserLogin/>} />
          </Routes>
        </BrowserRouter>
      )
  }
}
class Main extends React.Component<{}, {actualPage: string, language: object, user: any, isLogged: boolean} > {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: window.location.pathname,
      language: ptBR,
      user: undefined,
      isLogged: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar page={this.state.actualPage}/>
        <div className="App-header">
          { this.state.actualPage === '/home' && <Homepage resumeLanguage={this.state.language}/>}
          { this.state.actualPage === '/about' ? <About/> : <Unreachable/>}
        </div>
      </div>
    );
  }
}

const About = () => {
  return <h1>Lorem ipsum</h1>
}

const Unreachable = () => {
  return(
    <div>
      <h1>404 - not found !</h1>
      <a href="/home" style={{textDecoration: "none"}}> go back home </a>
    </div>
  );
}
export default App;