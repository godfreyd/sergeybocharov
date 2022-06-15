import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="projects" element={<ProjectsPage />} />
		</Routes>
	);
}
