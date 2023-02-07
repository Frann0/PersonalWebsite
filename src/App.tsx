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
import { HamburgerAnimationState } from './stores/mobileStore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reduxStores/store';
import { startLoading, stopLoading } from './reduxStores/loaderSlice';
import { closeHamburger, toggleHamburger } from './reduxStores/mobileSlice';

function App() {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/work', element: <WorkPage /> },
    { path: '/project/:id', element: <ProjectPage /> },
    { path: '*', element: <NotFoundPage /> }
  ]
  const { mobileStore, loaderStore } = useStore();

  const [doneLoading, setDoneLoading] = useState<boolean>();

  const [hamburgerAnimation, setHamburgerAnimation] = useState<string>('');

  const mobileHamburgerAnimationState = useSelector((state: RootState) => state.mobile.hamburgerAnimationState)
  const frontPageLoaded = useSelector((state: RootState) => state.loader.frontPageLoaded)
  const loadingState = useSelector((state: RootState) => state.loader.loadingState)
  const dispatch = useDispatch();

  useEffect(() => {
    setHamburgerAnimation(mobileHamburgerAnimationState)
    console.log(mobileHamburgerAnimationState);

  }, [mobileHamburgerAnimationState])

  const goTo = (path: string) => () => {

    let currentPath = window.location.pathname;
    console.log(currentPath);
    console.log(path);

    if (currentPath !== '/') {
      //loaderStore.startLoading()
      dispatch(startLoading)

      setTimeout(() => {
        window.location.href = `/#${path}`
        dispatch(stopLoading)
      }, 2000)
    }
    else {

      window.location.hash = `${path}`
    }
    //mobileStore.toggleHamburger();
    dispatch(toggleHamburger)

  }


  useEffect(() => {
    if (!frontPageLoaded) {
      dispatch(startLoading)

      setTimeout(() => {
        setDoneLoading(true);
        dispatch(stopLoading)
      }, 2000)
    } else {
      setDoneLoading(true);
    }



    /*
    if (!loaderStore.frontPageLoaded) {
      //loaderStore.startLoading();
    
      setTimeout(() => {
        setDoneLoading(true);
        loaderStore.setFrontpageLoaded(true)
        loaderStore.stopLoading();
      }, 2000)
    } else {
      setDoneLoading(true);
    }
    */

  }, [])


  return (
    <div className="App">
      {loadingState !== LoadingState.stopped && <Loader />}
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
                {doneLoading &&
                  <>
                    {
                      mobileHamburgerAnimationState !== HamburgerAnimationState.Closed &&
                      <div className={`Hamburger_Container ${hamburgerAnimation}`}>
                        <div className='Hamburger_Logo' >
                          <a href='#hero' onClick={() => { closeHamburger() }} >
                            <img src={logo} alt='logo' />
                          </a>
                        </div>
                        <div className='Hamburger_Close' onClick={() => closeHamburger()}>
                          <Icon name='cross' />
                        </div>
                        <ul className='Hamburger_LinksWrapper'>
                          <li className='Hamburger_Link' >
                            <a className='Hamburger_LinkItem' onClick={goTo('about')} >About</a>
                          </li>
                          <li className='Hamburger_Link'>
                            <a className='Hamburger_LinkItem' onClick={goTo('skills')}>Skills</a>
                          </li>
                          <li className='Hamburger_Link'>
                            <a className='Hamburger_LinkItem' onClick={goTo('work')}>Work</a>
                          </li>
                          <li className='Hamburger_Link'>
                            <a className='Hamburger_LinkItem' onClick={goTo('contact')}>Contact</a>
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
