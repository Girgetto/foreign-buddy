import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/signup" component={Signup} ></Route>
				</Switch>
			</div>
		);
	}
}

export default App;