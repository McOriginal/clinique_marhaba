import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MainHeader from './components/MainHeader';
import Apropos from './pages/Apropos';

function App() {

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainHeader />,
    children: [
       {
    path: 'cliniquemarhaba',
    element: <Home />
  },
       {
    path: 'clinique_marhaba/apropos',
    element: <Apropos />
  },
  {
    path: 'clinique_marhaba/contact',
    element: <Contact />
  }
    ]
  },
 
 ]
 )



  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
