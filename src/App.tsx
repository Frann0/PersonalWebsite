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
import MobileNavbar from './components/Shared/Navbar/MobileNavbar/MobileNavbar';

function App() {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/work', element: <WorkPage /> },
    { path: '/project/:id', element: <ProjectPage /> },
    { path: '*', element: <NotFoundPage /> }
  ]
  const { mobileStore, loaderStore } = useStore();

  const [doneLoading, setDoneLoading] = useState<boolean>();



  useEffect(() => {
    if (!loaderStore.frontPageLoaded) {
      loaderStore.startLoading();
      setTimeout(() => {
        setDoneLoading(true);
        loaderStore.setFrontpageLoaded(true)
        loaderStore.stopLoading();
      }, 2000)
    } else {
      setDoneLoading(true);
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
                      mobileStore.hamburgerAnimationState !== HamburgerAnimationState.Closed &&
                      <MobileNavbar />
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
