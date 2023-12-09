import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../MainLayout';
import NotFoundPage from '@pages/NotFoundPage';
import ProfilePage from '@pages/ProfilePage';
import GradeBookPage from '@pages/GradeBookPage';
import DisciplinesPage1 from '@pages/DisciplinesPage1';
import DisciplinesPage2 from '@pages/DisciplinesPage2';

export const Protected = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/gradebook' element={<GradeBookPage />} />
                <Route path='/disciplines' element={<DisciplinesPage1 />} />
                <Route path='/disciplines2' element={<DisciplinesPage2 />} />

            </Routes>
        </MainLayout>
    );
};

