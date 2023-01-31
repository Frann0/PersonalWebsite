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
import { useEffect, useState } from 'react';
import NotFoundPage from './pages/404Page/NotFoundPage';
import { LoadingState } from './stores/loaderStore';
import Loader from './components/Shared/Loader/Loader';

function App() {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/work', element: <WorkPage /> },
    { path: '/project/:id', element: <ProjectPage /> },
    { path: '*', element: <NotFoundPage /> }
  ]

  const [doneLoading, setDoneLoading] = useState(false);

  const goTo = (path: string) => () => {

  }

  const { mobileStore, loaderStore } = useStore();

  useEffect(() => {
    if (doneLoading === false) {
      loaderStore.startLoading();
      setTimeout(() => {
        setDoneLoading(true);
        loaderStore.stopLoading();
      }, 2000)
    }

  }, [])


  return (
    <div className="App">
      {loaderStore.loadingState !== LoadingState.stopped && <Loader />}
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
                {doneLoading &&
                  <>
                    {
                      mobileStore.hamburgerOpen &&
                      <div className='Hamburger_Container'>
                        <div className='Hamburger_Logo' >
                          <a href='#hero' onClick={() => { mobileStore.toggleHamburger() }} >
                            <img src={logo} alt='logo' />
                          </a>
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
                    < Navbar />
                    <div className='Route_Container'>
                      {route.element}
                    </div>

                  </>
                }
              </>
            } />
          ))}
        </Routes>
      </Router>

    </div>
  );
}

export default observer(App);
