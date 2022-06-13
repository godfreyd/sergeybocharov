// import logo from './logo.svg';
import './App.css';
import { cn } from '@bem-react/classname';
import { Cookie } from '@lookingschools/ui/Cookie/desktop/bundle'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectsPage } from './pages/ProjectsPage';

export const cnApp = cn('App');

function App(props) {
  const { className } = props;
  return (
      <div className={cnApp(null, [className])}>
        <Header className={cnApp('Header')}/>
        <div className={cnApp('Content')}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer className={cnApp('Footer')}/>
        <Cookie
          text={"We save cookies. It helps us provide you with the best experience we can."}
          linkVisible={false}
          button="It's OK"
        />
      </div>
  );
}

export default App;
