import React from 'react';
import styled from 'styled-components';

import { ProfiCard, ProfileBar } from '@organism';

const ProfilePageWrapper = styled.div`
    display: grid;
    gap: 50px;
  @media screen and (max-width: 1620px){
  }
`;

const ProfilePage = () => {
    return (
        <ProfilePageWrapper>
            <ProfiCard />
            <ProfileBar/>
        </ProfilePageWrapper>
    );
};

export default ProfilePage;