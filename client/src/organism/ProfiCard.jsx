import React from 'react';
import styled from 'styled-components';

import { ProfiAva } from '@atoms';
import { ProfiProgress } from '@atoms';
import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { sizes } from '../base/index';
import { colors } from '../base';
import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';



export const ProfiCardWrapper = styled.div`
  background-color: ${colors.profileHeaderBG};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 5%;
  padding: 2% 5%;
  box-shadow: 1px 2px 8px 0px #00000026;
  border-radius: 28px;
  max-width: 100%;
`;

export const ProfiCard = () => {
    return (
        <ProfiCardWrapper>
            <Flexbox width='100%' justify='space-between'>
                <Flexbox width='50%' justify='left'>
                    <Flexbox direction="column" gap="3%" align="flex-start">
                        <ProfiAva></ProfiAva>
                    </Flexbox>
                </Flexbox>

                <Flexbox width='45%' justify='space-between' align="end">
                    <ProfiProgress></ProfiProgress>
                </Flexbox>
            </Flexbox>
        </ProfiCardWrapper>
    );
};
