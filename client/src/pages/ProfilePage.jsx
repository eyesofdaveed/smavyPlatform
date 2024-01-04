    import React from 'react';
    import styled from 'styled-components';

    import { ProfiCard, PersonalData } from '@organism';

    const ProfilePageWrapper = styled.div`
    `;

    const ProfilePage = () => {
        return (
            <ProfilePageWrapper>
                <ProfiCard />
                <PersonalData />
            </ProfilePageWrapper>
        );
    };

    export default ProfilePage;