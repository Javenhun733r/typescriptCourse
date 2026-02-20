import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals';
import Header from './components/Header';
import NewGoal from './components/NewGoal';
export default function App() {
	const [goals, setGoals] = useState([
		{
			id: 1,
			title: 'Master TypeScript Decorators',
			description:
				'Deep dive into Stage 3 decorators and reflect-metadata for Nest.js projects.',
		},
		{
			id: 2,
			title: 'Optimize React Performance',
			description:
				'Implement advanced patterns like memoization and custom hooks to improve rendering efficiency.',
		},
		{
			id: 3,
			title: 'Architect Scalable Backend',
			description:
				'Build a robust API using Nest.js and TypeScript with proper validation and error handling.',
		},
		{
			id: 4,
			title: 'Advance Full-Stack Skills',
			description:
				'Complete educational projects from Udemy courses to solidify integration between React and Nest.js.',
		},
		{
			id: 5,
			title: 'Refine Development Workflow',
			description:
				'Enhance Neovim configuration and master Webpack for faster bundling and debugging.',
		},
	]);
	function handleDeleteGoal(id: number) {
		setGoals(prev => prev.filter(goal => goal.id !== id));
	}
	function handleAddGoal(text: string, summary: string) {
		setGoals(prev =>
			prev.concat({ id: Math.random(), title: text, description: summary }),
		);
	}
	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Yours Course Goals</h1>
			</Header>
			<NewGoal onAdd={handleAddGoal} />
			<CourseGoals goals={goals} onDelete={handleDeleteGoal} />
		</main>
	);
}
