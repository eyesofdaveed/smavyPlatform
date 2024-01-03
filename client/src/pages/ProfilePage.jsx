import React from 'react';
import styled from 'styled-components';

import { ProfiCard, PersonalData } from '@organism';
import { CalendarAntd } from '@atoms';

const ProfilePageWrapper = styled.div`

  @media screen and (max-width: 1620px){
  }
`;

const ProfilePage = () => {
    return (
        <ProfilePageWrapper>
            <ProfiCard />
            {/* <PersonalData /> */}
            <CalendarAntd/>
        </ProfilePageWrapper>
        
    );
};

export default ProfilePage;