import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Test from './Test';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
  render(){
    return(
      <div>
        app
        <BrowserRouter>
         <Routes>
          <Route exact path="/test" element={<Test/>} />
        </Routes>
         </BrowserRouter>
      </div>
    )
  }
}

export default App;
