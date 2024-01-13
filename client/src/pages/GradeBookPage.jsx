import React from 'react';
import styled from 'styled-components';

import { DisciplinesCard } from '@atoms'

const PageWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const GradeBookPage = () => {
    return (
        <PageWrapper>
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
        </PageWrapper>
    )
};

export default GradeBookPage;