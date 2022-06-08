// import logo from './logo.svg';
import './App.css';
import { Cookie } from '@lookingschools/ui/Cookie/desktop/bundle'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
function App() {
  return (
      <div className="App">
        <Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="projects" element={<ProjectsPage />} />
        </Routes>
        <Cookie
			text={"We save cookies. It helps us provide you with the best experience we can."}
			linkVisible={false}
			button="It's OK"
        />
      </div>
  );
}

export default App;
