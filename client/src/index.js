import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import { ProductProvider } from './context'
import * as serviceWorker from './serviceWorker';
import Login from "./pages/Login";


ReactDOM.render(
    <ProductProvider> 
        <Router>
            <App />
           < Route exact path="/login">
               <Login>

               </Login>
           </Route>
        </Router>
    </ProductProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
