import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RecentActivities from './components/RecentActivities';
import Achievements from './components/Achievements';
import TeamMembers from './components/TeamMembers';


  function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar/><Home /><Footer/></>,
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
      <>
      <RouterProvider router={router} />
     </>
    )
  }
  
  export default App;
