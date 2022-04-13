import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// Routes
// import Header from '../layouts/Header';
// import Intro from '../components/Intro';
import Home from "./routes/HomeRoute/Home";
import About from "./routes/AboutRoute/About";
import Contact from "./routes/ContactRoute/Contact";
import Journal from "./routes/JournalRoute/JournalRoute"
// import Challenge from "../routes/ChallengeRoute/Challenge";
import Invoices from './routes/InvoicesRoute/Invoices';
import Invoice from './routes/InvoicesRoute/Invoice';
import Expenses from './routes/ExpensesRoute/Expenses';
import NotFound from "./routes/NotFound";

import NavigationBar from './components/NavigationBar';

function RouterApp() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                {/* <Route exact strict path='/' element={<Header welcomeSection={welcomeSection} myInfo={myInfo}/>}/> */}
                {/* <Route exact strict path='/' element={<NavigationBar />} > */}
                <Route exact strict path='/' element={<Home />} />
                {/* Nesting routes within parent  */}
                {/* <Route exact strict path='home' element={<Home />} /> */}
                <Route exact strict path='about' element={<About />} />
                <Route exact strict path='contact' element={<Contact />} />
                <Route exact strict path='journey' element={<Journal />} />
                <Route exact strict path='invoices' element={<Invoices />} >
                    <Route exact strict path=':invoiceId' element={<Invoice />} />
                </Route>
                <Route exact strict path='expenses' element={<Expenses />} />
                <Route path='*' element={<NotFound />} />
                {/* </Route> */}
            </Routes>
        </Router>
    );
}

export { RouterApp };