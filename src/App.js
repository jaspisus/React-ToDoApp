import React from 'react';

import { Route, HashRouter } from 'react-router-dom';

import HomePage from './HomePage';
import ToDoApp from './ToDoApp';

export default function App() {
	return (
		<HashRouter hashtype="slash">
			<Route path="/" exact component={HomePage} />
			<Route path="/todoapp" component={ToDoApp} />
		</HashRouter>
	);
}
