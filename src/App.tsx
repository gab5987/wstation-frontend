import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Homepage from './components/pages/Home';
import Logs from './components/pages/Logs';
import 'font-awesome/css/font-awesome.min.css';

const ptBR = require("./data/res_primary_language.json");
const enUS = require("./data/res_secondary_language.json");
const data = require("./data/shared_data.json");

class App extends React.Component {
  render(): React.ReactNode {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main resume={this.state}/>} />
            <Route path="/about" element={<Main resume={this.state}/>} />
            <Route path="/logs" element={<Main resume={this.state}/>} />
            <Route path="/user/login" />

            <Route path="/" element={ <Main resume={this.state}/> }/>
            <Route path="*" element={<Unreachable/>}/>
          </Routes>
        </BrowserRouter>
      )
  }
}
export default App;

class Main extends React.Component<{resume: any}, {actualPage: string, language: any} > {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: window.location.pathname,
      language: ptBR,
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar page={this.state.actualPage} resumeLanguage={this.state.language}/>
        <div className="App-header">
          { 
            {
              "/home": <Homepage resumeLanguage={ this.state.language.pages.home } />,
              "/about": <About/>,
              "/logs": <Logs resumeLanguage={ this.state.language.pages.home }/>,
              "/default": <Unreachable/>
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