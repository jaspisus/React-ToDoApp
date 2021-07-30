import './css/App.min.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'ddd',
			day: 'dd',
			reminder: true,
		},
	]);

	//AddTask

	const addTask = task => {
		const id = Math.floor(Math.random() * 10000 + 1);
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	//DeleteTask

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = id => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
		</div>
	);
}

export default App;
