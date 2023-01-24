import './App.scss';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import WorkPage from './pages/WorkPage/WorkPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import { useStore } from './stores/store';
import logo from './assets/shared/logo_green.svg';
import Icon from './components/Shared/icon/Icon';
import { useEffect } from 'react';

function App() {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/work', element: <WorkPage /> },
    { path: '/project/:id', element: <ProjectPage /> }
  ]

  const { mobileStore } = useStore();

  return (
    <div className="App">

      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
                {mobileStore.hamburgerOpen &&
                  <div className='Hamburger_Container'>
                    <div className='Hamburger_Logo'>
                      <img src={logo} alt='logo' />
                    </div>
                    <div className='Hamburger_Close' onClick={() => mobileStore.toggleHamburger()}>
                      <Icon name='cross' />
                    </div>
                    <ul className='Hamburger_LinksWrapper'>
                      <li className='Hamburger_Link'>
                        <a className='Hamburger_LinkItem' onClick={mobileStore.toggleHamburger} href='#about'>About</a>
                      </li>
                      <li className='Hamburger_Link'>
                        <a className='Hamburger_LinkItem' onClick={mobileStore.toggleHamburger} href='#skills'>Skills</a>
                      </li>
                      <li className='Hamburger_Link'>
                        <a className='Hamburger_LinkItem' onClick={mobileStore.toggleHamburger} href='#work'>Work</a>
                      </li>
                      <li className='Hamburger_Link'>
                        <a className='Hamburger_LinkItem' onClick={mobileStore.toggleHamburger} href='#contact'>Contact</a>
                      </li>
                    </ul>
                    <Footer />
                  </div>
                }
                <Navbar />
                <div className='Route_Container'>
                  {route.element}
                </div>
              </>
            } />
          ))}
        </Routes>
      </Router>

    </div>
  );
}

export default observer(App);
