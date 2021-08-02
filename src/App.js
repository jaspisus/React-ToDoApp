import React from 'react';
import { useRoutes } from 'hookrouter';
import ToDoApp from './ToDoApp';

const Routes = {
	'/': () => (
		<>
			<h1>Hello world</h1>
		</>
	),
	'/todoapp': () => <ToDoApp />,
};

export default function App() {
	const routeResult = useRoutes(Routes);
	return routeResult;
}
