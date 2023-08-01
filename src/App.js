import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import NotFound from './Pages/404/NotFound';
import FicheLogement from './Pages/Fiche-logement/FicheLogement';
import About from './Pages/A-propos/About';

import Header from './Composant/Header/Header';
import Footer from './Composant/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />                
                <Route path='/*' element={<NotFound />} />
                <Route path='/:id' element={<FicheLogement />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}
export default App;