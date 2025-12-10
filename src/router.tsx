import { createHashRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MigrantZone from './pages/MigrantZone';
import EmployerZone from './pages/EmployerZone';
import News from './pages/News';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // Routes will be added as pages are implemented
            { path: 'about', element: <About /> },
            { path: 'migrant-zone', element: <MigrantZone /> },
            { path: 'employer-zone', element: <EmployerZone /> },
            { path: 'news', element: <News /> },
            { path: 'support', element: <Support /> },
            { path: 'contact', element: <Contact /> },
            { path: 'projects', element: <Projects /> },
        ],
    },
]);

export default router;
