import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Login from './Login';
import NavBar from './navbar/navbar';
import GsHome from './home';
import { CurrencyGrid } from '../features/currencyGrid/CurrencyGrid';
import GsThemeSelector from './themeSelector';
import { AnalyticsPage } from '../features/analytics/index';
import { GsProvider } from '../gsContext.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export function GsLayout() {

    let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
    if(isAuthenticated) {
        return (
            <BrowserRouter>
                <GsProvider>
                    <Grid>
                        <header>
                            <NavBar />
                        </header>
                        <main>
                            <Routes>
                                <Route exact path="/" element={<GsHome/>} />
                                <Route path="/currency-grid" element={<CurrencyGrid/>} />
                                <Route path="/theme-setting" element={<GsThemeSelector/>} />
                                <Route path="/carrier-analysis" element={<AnalyticsPage/>} />
                            </Routes>
                        </main>
                    </Grid>
                </GsProvider>
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