import './css/App.min.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'ddd',
			day: 'dd',
		},
	]);

	//DeleteTask

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks'}
		</div>
	);
}

export default App;
