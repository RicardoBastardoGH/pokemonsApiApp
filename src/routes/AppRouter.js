import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { HomeScreen } from '../pages/HomeScreen';
import { UpdateScreen } from '../pages/UpdateScreen';
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="update" element={<UpdateScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
