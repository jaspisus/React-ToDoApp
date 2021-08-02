import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function ToDoApp() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Kodzić',
			day: '02.08.2021',
			reminder: false,
		},
		{
			id: 2,
			text: 'Poćwiczyć Reacta',
			day: '03.08.2021',
			reminder: true,
		},
		{
			id: 3,
			text: 'Wysłać CV',
			day: '03.08.2021',
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

export default ToDoApp;
