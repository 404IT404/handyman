import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { ClientHomePage } from '../pages/HomePage/ClientHomePage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { NotFoundPage } from '../pages/404Page/NotFoundPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <SignUpPage /> } />
                <Route path='/sign-in' element={ <SignInPage /> } />
                <Route path='/client-home' element={ <ClientHomePage /> } />

                <Route path='*' element={ <NotFoundPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;