import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from "./pages/main";
import {Path} from "./constants/Path";
import {MenuPage} from "./pages/menu";
import MSDSPage from "./pages/main/MSDS";
import SearchPage from "./pages/main/search";
import DailyInspectionPage from "./pages/main/inspection";
import {RegisterPage} from "./pages/menu/admin/register";
import ChemicalsRegisterPage from "./pages/menu/admin/register/chemicals";
import ExpendablesRegisterPage from "./pages/menu/admin/register/expendables";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={Path.MAIN} element={<MainPage/>}/>
                <Route path={Path.MENU} element={<MenuPage/>}/>
                <Route path={Path.MSDS} element={<MSDSPage/>}/>
                <Route path={Path.SEARCH} element={<SearchPage/>}/>
                <Route path={Path.DAILY} element={<DailyInspectionPage/>}/>
                <Route path={Path.REGISTER} element={<RegisterPage/>}/>
                <Route path={Path.REGISTER_CHEMICALS} element={<ChemicalsRegisterPage/>}/>
                <Route path={Path.REGISTER_EXPENDABLES} element={<ExpendablesRegisterPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
