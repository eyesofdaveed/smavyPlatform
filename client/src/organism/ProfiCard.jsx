import React from 'react';
import styled from 'styled-components';

import { ProfileAva } from '@atoms';
import { ProfileProgress } from '@atoms';
import { Gridbox } from '@atoms';
import { colors } from '../base';
import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';

export const ProfiCardWrapper = styled.div`
  background-color: ${colors.profileHeaderBG};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  margin-bottom: 50px;
  box-shadow: 1px 2px 8px 0px #00000026;
  border-radius: 28px;
  max-width: 100%;
  grid-column: 1 / span 1;

  @media screen and (max-width: 450px) {
    padding: 30px 50px;
  }
`;

export const ProfiCard = () => {
    return (
        <ProfiCardWrapper>
            <Gridbox>
                <ProfileAva />
                <ProfileProgress />
            </Gridbox>
        </ProfiCardWrapper>
    );
};
