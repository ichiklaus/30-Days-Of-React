import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// Routes
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import Challenges from "../routes/Challenges";
import NotFound from "../routes/NotFound";


import NavigationBar from './Navigation';

function RouterApp() {
    return (
        <Router>
            {/* <NavigationBar /> */}
            <Routes>
                <Route exact strict path='/' element={<NavigationBar />} >
                    {/* Nesting routes within parent  */}
                    <Route exact strict path='home' element={<Home />} />
                    <Route exact strict path='about' element={<About />} />
                    <Route exact strict path='contact' element={<Contact />} />
                    <Route exact strict path='challenges' element={<Challenges />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export { RouterApp };