import React from 'react';
import styled from 'styled-components';

import { ProfiCard, PersonalData, ProfileBar } from '@organism';

const ProfilePageWrapper = styled.div`

  @media screen and (max-width: 1620px){
  }
`;

const ProfilePage = () => {
    return (
        <ProfilePageWrapper>
            <ProfiCard />
            <ProfileBar/>
            {/* <PersonalData /> */}
        </ProfilePageWrapper>
    );
};

export default ProfilePage;