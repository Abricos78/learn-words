import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import FirebaseContext from './firebaseContext';
import Firebase from './firebase';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
	<BrowserRouter>
		<FirebaseContext.Provider value={new Firebase()}>
    		<App />
		</FirebaseContext.Provider>
	</BrowserRouter>,
  	document.getElementById('root')
);


