import './App.scss';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import WorkPage from './pages/WorkPage/WorkPage';

function App() {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/work', element: <WorkPage /> },
  ]

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
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
