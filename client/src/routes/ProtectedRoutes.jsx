import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../MainLayout';
import ProfilePage from '@pages/ProfilePage';
import GradeBookPage from '@pages/GradeBookPage';
import DisciplinesPage1 from '@pages/DisciplinesPage1';


export const Protected = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/gradebook' element={<GradeBookPage />} />
                <Route path='/disciplines' element={<DisciplinesPage1 />} />
            </Routes>
        </MainLayout>
    );
};

