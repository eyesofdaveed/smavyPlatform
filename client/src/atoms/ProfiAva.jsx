import React from 'react';
import styled from 'styled-components';

import { colors } from '../base';
import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { sizes } from '../base';


const ProfiMainInfo = styled.div`
//   background-color: ${colors.cardBg};
//   border-radius: 100px;
  display: flex;
//   justify-content: space-between;
  column-gap: 120px;
  width: 100%;
  
`;

const ProfiColumn = styled.div`
    display: ${({display}) => display };
    justify-content: center;
    text-align: center;
    // width: 50%;
`;



const ProfiAva = ({ children }) => {
    return (
        <ProfiMainInfo>
            <ProfiColumn>
                <div className="circleAva">
                    <img className='profiAvaImg' src="https://www.famousbirthdays.com/faces/heeseung-image.jpg" alt="ProfileImg" />
                </div>
                <Text fontSize={sizes.xLarge}>Name Surname</Text>
                <Text fontSize={sizes.sLarge}>id: 24743</Text>
            </ProfiColumn>
            <ProfiColumn display = 'grid'>
                <Flexbox direction="column" gap="3%" align="flex-start">
                    <svg width="67" height="59" viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_11_81)">
                        <path d="M33.5 13.5208C35.782 13.5208 37.9705 14.4273 39.5841 16.0409C41.1977 17.6545 42.1042 19.843 42.1042 22.125C42.1042 24.4069 41.1977 26.5954 39.5841 28.209C37.9705 29.8226 35.782 30.7291 33.5 30.7291C31.218 30.7291 29.0295 29.8226 27.4159 28.209C25.8023 26.5954 24.8958 24.4069 24.8958 22.125C24.8958 19.843 25.8023 17.6545 27.4159 16.0409C29.0295 14.4273 31.218 13.5208 33.5 13.5208ZM16.2917 19.6666C17.6683 19.6666 18.9467 20.0354 20.0529 20.6991C19.6842 24.2146 20.7167 27.7054 22.8308 30.4341C21.6017 32.7941 19.1433 34.4166 16.2917 34.4166C14.3357 34.4166 12.4598 33.6396 11.0768 32.2566C9.69367 30.8735 8.91667 28.9976 8.91667 27.0416C8.91667 25.0857 9.69367 23.2098 11.0768 21.8267C12.4598 20.4437 14.3357 19.6666 16.2917 19.6666ZM50.7083 19.6666C52.6643 19.6666 54.5402 20.4437 55.9232 21.8267C57.3063 23.2098 58.0833 25.0857 58.0833 27.0416C58.0833 28.9976 57.3063 30.8735 55.9232 32.2566C54.5402 33.6396 52.6643 34.4166 50.7083 34.4166C47.8567 34.4166 45.3983 32.7941 44.1692 30.4341C46.3125 27.6671 47.3074 24.1806 46.9471 20.6991C48.0533 20.0354 49.3317 19.6666 50.7083 19.6666ZM17.5208 44.8646C17.5208 39.7758 24.6746 35.6458 33.5 35.6458C42.3254 35.6458 49.4792 39.7758 49.4792 44.8646V49.1666H17.5208V44.8646ZM4 49.1666V45.4791C4 42.0621 8.64625 39.1858 14.9396 38.35C13.4892 40.0216 12.6042 42.3325 12.6042 44.8646V49.1666H4ZM63 49.1666H54.3958V44.8646C54.3958 42.3325 53.5108 40.0216 52.0604 38.35C58.3537 39.1858 63 42.0621 63 45.4791V49.1666Z" fill="#F1AC8E"/>
                        </g>
                        <path d="M33.5 13.5208C35.782 13.5208 37.9705 14.4273 39.5841 16.0409C41.1977 17.6545 42.1042 19.843 42.1042 22.125C42.1042 24.4069 41.1977 26.5954 39.5841 28.209C37.9705 29.8226 35.782 30.7291 33.5 30.7291C31.218 30.7291 29.0295 29.8226 27.4159 28.209C25.8023 26.5954 24.8958 24.4069 24.8958 22.125C24.8958 19.843 25.8023 17.6545 27.4159 16.0409C29.0295 14.4273 31.218 13.5208 33.5 13.5208ZM16.2917 19.6666C17.6683 19.6666 18.9467 20.0354 20.0529 20.6991C19.6842 24.2146 20.7167 27.7054 22.8308 30.4341C21.6017 32.7941 19.1433 34.4166 16.2917 34.4166C14.3357 34.4166 12.4598 33.6396 11.0768 32.2566C9.69367 30.8735 8.91667 28.9976 8.91667 27.0416C8.91667 25.0857 9.69367 23.2098 11.0768 21.8267C12.4598 20.4437 14.3357 19.6666 16.2917 19.6666ZM50.7083 19.6666C52.6643 19.6666 54.5402 20.4437 55.9232 21.8267C57.3063 23.2098 58.0833 25.0857 58.0833 27.0416C58.0833 28.9976 57.3063 30.8735 55.9232 32.2566C54.5402 33.6396 52.6643 34.4166 50.7083 34.4166C47.8567 34.4166 45.3983 32.7941 44.1692 30.4341C46.3125 27.6671 47.3074 24.1806 46.9471 20.6991C48.0533 20.0354 49.3317 19.6666 50.7083 19.6666ZM17.5208 44.8646C17.5208 39.7758 24.6746 35.6458 33.5 35.6458C42.3254 35.6458 49.4792 39.7758 49.4792 44.8646V49.1666H17.5208V44.8646ZM4 49.1666V45.4791C4 42.0621 8.64625 39.1858 14.9396 38.35C13.4892 40.0216 12.6042 42.3325 12.6042 44.8646V49.1666H4ZM63 49.1666H54.3958V44.8646C54.3958 42.3325 53.5108 40.0216 52.0604 38.35C58.3537 39.1858 63 42.0621 63 45.4791V49.1666Z" fill="#F1AC8E"/>
                        <defs>
                        <filter id="filter0_f_11_81" x="0" y="-4" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_81"/>
                        </filter>
                        </defs>
                    </svg>
                    <Text fontSize={sizes.mLarge}>Группа: ITIS-1916R</Text>
                </Flexbox>
                <Flexbox direction="column" gap="3%" align="flex-start">
                    <img className='profiIcon' src="https://flaticons.net/icon.php?slug_category=people&slug_icon=user-group" />
                    <Text fontSize={sizes.mLarge}>14 одногруппников</Text>
                </Flexbox>

            </ProfiColumn>

        </ProfiMainInfo>
    );
};

export default ProfiAva;
