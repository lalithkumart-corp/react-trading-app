import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Login from './Login';
import NavBar from './navbar/navbar';
import GsHome from './home';
import { CurrencyGrid } from '../features/currencyGrid/CurrencyGrid';
import GsThemeSelector from './themeSelector';
export function GsLayout() {

    let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if(isAuthenticated) {
        return (
            <BrowserRouter>
                <Grid>
                    <header>
                        <NavBar />
                    </header>
                    <main>
                        <Routes>
                            <Route exact path="/" element={<GsHome/>} />
                            <Route path="/currency-grid" element={<CurrencyGrid/>} />
                            <Route path="/theme-setting" element={<GsThemeSelector/>} />
                        </Routes>
                    </main>
                </Grid>
            </BrowserRouter>
        )
    } else {
        return (
            <Grid>
                <Login />
            </Grid>
        )
    }
}