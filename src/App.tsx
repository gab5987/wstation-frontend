import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Homepage from './components/pages/Home';
import UserLogin from './components/pages/UserLogin';
import 'font-awesome/css/font-awesome.min.css';

const ptBR = require("./data/res_primary_language.json");
const enUS = require("./data/res_secondary_language.json");
const data = require("./data/shared_data.json");

class App extends React.Component<{}, { user: string | undefined, pass: string | undefined, isLogged: Boolean, language: any }> {
  constructor(props: any){
    super(props);
    this.state = {
      user: undefined,
      pass: undefined,
      isLogged: false,
      language: ptBR,
    }
  }
  render(): React.ReactNode {
    {this.state.isLogged ? console.log("Logged") : console.log("Not logged")}
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/about" element={<Main />} />
            <Route path="/user/login" element={<UserLogin state={this.state}/>} />
            <Route path="*" element={<Unreachable/>}/>
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
        <Sidebar page={this.state.actualPage} resumeLanguage={this.state.language}/>
        <div className="App-header">
          { 
            {  //resumeLanguage={this.state.language}
              "/home": <Homepage  />,
              "/about": <About/>,
              "default": <Unreachable/>
            }[this.state.actualPage]
          }
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
    <div className='App-header' style={{width: '100vw'}}>

      <h1>404 - not found !</h1>
      <a href="/home" style={{textDecoration: "none"}}> go back home </a>
    </div>
  );
}
export default App;