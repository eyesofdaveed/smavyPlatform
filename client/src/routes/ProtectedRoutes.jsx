import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../MainLayout';
import GradeBookPage from '@pages/GradeBookPage';
import DisciplinesPage1 from '@pages/DisciplinesPage1';


export const Protected = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/GradeBookPage' element={<GradeBookPage />} />
                <Route path='/DisciplinesPage1' element={<DisciplinesPage1 />} />
            </Routes>
        </MainLayout>
    );
};

