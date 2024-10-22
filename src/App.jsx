import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RecentActivities from './components/RecentActivities';
import Achievements from './components/Achievements';
import TeamMembers from './components/TeamMembers';
import { BackgroundBeamsDemo } from '../UI/BackgroundBeamsDemo';
import {GridBackgroundDemo} from '../UI/GridBackgroundDemo';

  function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Home /><Footer/></>,
      },
      {
        path: "/recentActivities",
        element: <><Navbar/><RecentActivities /><Footer/></>,
      },
      {
        path: "/achievements",
        element: <><Navbar/><Achievements /><Footer/></>,
      },
      {
        path: "/team",
        element: <><Navbar/><TeamMembers /><Footer/></>,
      },
  
    ]);
    return (
      <BackgroundBeamsDemo>
      <RouterProvider router={router} />
    </BackgroundBeamsDemo>
    )
  }
  
  export default App;
