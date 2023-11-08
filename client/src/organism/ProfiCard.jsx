import React from 'react';
import styled from 'styled-components';
import './style.css'

import ProfiAva from '../atoms/ProfiAva';
import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { sizes } from '../base/index';
import { colors } from '../base';
import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';



const ProfiCardWrapper = styled.div`
  background-color: ${colors.profileHeaderBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5%;
  padding: 2% 5%;
  box-shadow: 1px 2px 8px 0px #00000026;
  border-radius: 28px;
  max-width: 100%;
`;
// const ProfiCardCont = styled.div`
//   background-color: ${colors.profiCardBg};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

const ProfiCard = () => {
    return (
        <ProfiCardWrapper>
            <Flexbox width='100%' justify='space-between'>
                <Flexbox width='50%' justify='left'>
                    <Flexbox direction="column" gap="3%" align="flex-start">

                        <ProfiAva></ProfiAva>

                    </Flexbox>

                </Flexbox>
                <Flexbox width='45%' justify='space-between'>
                    <Flexbox direction="column" gap="3%" align="flex-start">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="55.5043" cy="55.5039" r="35.4189" stroke="#4E5671" stroke-width="11"/>
                        <g filter="url(#filter0_f_11_71)">
                        <mask id="path-2-inside-1_11_71" fill="white">
                        <path d="M36.8934 23.2577C35.9572 21.6362 33.8741 21.0694 32.3363 22.1373C25.1635 27.1185 19.7586 34.2992 16.9719 42.6387C13.8256 52.0539 14.234 62.2951 18.1199 71.4299C22.0057 80.5647 29.1004 87.9616 38.0653 92.2248C47.0302 96.4881 57.2455 97.3229 66.7836 94.5719C76.3218 91.8208 84.5234 85.6741 89.8409 77.2915C95.1584 68.9088 97.2242 58.8699 95.6484 49.0687C94.0727 39.2676 88.9644 30.382 81.2874 24.0885C74.4875 18.514 66.0888 15.3146 57.365 14.9184C55.4947 14.8335 54.0334 16.4226 54.1045 18.2936C54.1757 20.1645 55.7533 21.6058 57.622 21.7219C64.6877 22.1612 71.4703 24.8078 76.9889 29.3319C83.3853 34.5756 87.6414 41.9788 88.9543 50.145C90.2671 58.3111 88.546 66.6753 84.1155 73.6596C79.6851 80.6438 72.8517 85.7652 64.9047 88.0573C56.9576 90.3494 48.4465 89.6538 40.9771 86.1018C33.5077 82.5497 27.5966 76.3868 24.3589 68.7758C21.1213 61.1649 20.7811 52.6322 23.4025 44.7876C25.6642 38.0194 29.9955 32.1673 35.742 28.0327C37.2618 26.9392 37.8295 24.8791 36.8934 23.2577Z"/>
                        </mask>
                        <path d="M36.8934 23.2577C35.9572 21.6362 33.8741 21.0694 32.3363 22.1373C25.1635 27.1185 19.7586 34.2992 16.9719 42.6387C13.8256 52.0539 14.234 62.2951 18.1199 71.4299C22.0057 80.5647 29.1004 87.9616 38.0653 92.2248C47.0302 96.4881 57.2455 97.3229 66.7836 94.5719C76.3218 91.8208 84.5234 85.6741 89.8409 77.2915C95.1584 68.9088 97.2242 58.8699 95.6484 49.0687C94.0727 39.2676 88.9644 30.382 81.2874 24.0885C74.4875 18.514 66.0888 15.3146 57.365 14.9184C55.4947 14.8335 54.0334 16.4226 54.1045 18.2936C54.1757 20.1645 55.7533 21.6058 57.622 21.7219C64.6877 22.1612 71.4703 24.8078 76.9889 29.3319C83.3853 34.5756 87.6414 41.9788 88.9543 50.145C90.2671 58.3111 88.546 66.6753 84.1155 73.6596C79.6851 80.6438 72.8517 85.7652 64.9047 88.0573C56.9576 90.3494 48.4465 89.6538 40.9771 86.1018C33.5077 82.5497 27.5966 76.3868 24.3589 68.7758C21.1213 61.1649 20.7811 52.6322 23.4025 44.7876C25.6642 38.0194 29.9955 32.1673 35.742 28.0327C37.2618 26.9392 37.8295 24.8791 36.8934 23.2577Z" stroke="#2E5BF0" stroke-width="6" mask="url(#path-2-inside-1_11_71)"/>
                        </g>
                        <mask id="path-3-inside-2_11_71" fill="white">
                        <path d="M37.9302 25.0535C36.4215 22.4403 33.0515 21.5176 30.664 23.363C24.3229 28.2644 19.5377 34.9604 16.9719 42.6387C13.8256 52.0539 14.234 62.2951 18.1199 71.4299C22.0057 80.5647 29.1004 87.9616 38.0653 92.2248C47.0302 96.4881 57.2455 97.3229 66.7836 94.5719C76.3218 91.8208 84.5234 85.6741 89.8409 77.2915C95.1584 68.9088 97.2242 58.8699 95.6484 49.0687C94.0727 39.2676 88.9644 30.382 81.2874 24.0885C75.0266 18.956 67.4105 15.8368 59.4332 15.0653C56.4297 14.7748 54.0687 17.3504 54.1833 20.3658C54.298 23.3811 56.8537 25.681 59.8392 26.1196C65.1386 26.8981 70.1651 29.1007 74.3596 32.5393C79.9725 37.1407 83.7074 43.6373 84.8595 50.8033C86.0115 57.9692 84.5012 65.3091 80.6133 71.438C76.7255 77.5669 70.729 82.061 63.7553 84.0723C56.7816 86.0837 49.3128 85.4733 42.7583 82.3563C36.2037 79.2393 31.0165 73.8312 28.1754 67.1524C25.3343 60.4736 25.0357 52.9859 27.336 46.1021C29.055 40.9579 32.1365 36.4167 36.2073 32.9356C38.5006 30.9745 39.439 27.6668 37.9302 25.0535Z"/>
                        </mask>
                        <path d="M37.9302 25.0535C36.4215 22.4403 33.0515 21.5176 30.664 23.363C24.3229 28.2644 19.5377 34.9604 16.9719 42.6387C13.8256 52.0539 14.234 62.2951 18.1199 71.4299C22.0057 80.5647 29.1004 87.9616 38.0653 92.2248C47.0302 96.4881 57.2455 97.3229 66.7836 94.5719C76.3218 91.8208 84.5234 85.6741 89.8409 77.2915C95.1584 68.9088 97.2242 58.8699 95.6484 49.0687C94.0727 39.2676 88.9644 30.382 81.2874 24.0885C75.0266 18.956 67.4105 15.8368 59.4332 15.0653C56.4297 14.7748 54.0687 17.3504 54.1833 20.3658C54.298 23.3811 56.8537 25.681 59.8392 26.1196C65.1386 26.8981 70.1651 29.1007 74.3596 32.5393C79.9725 37.1407 83.7074 43.6373 84.8595 50.8033C86.0115 57.9692 84.5012 65.3091 80.6133 71.438C76.7255 77.5669 70.729 82.061 63.7553 84.0723C56.7816 86.0837 49.3128 85.4733 42.7583 82.3563C36.2037 79.2393 31.0165 73.8312 28.1754 67.1524C25.3343 60.4736 25.0357 52.9859 27.336 46.1021C29.055 40.9579 32.1365 36.4167 36.2073 32.9356C38.5006 30.9745 39.439 27.6668 37.9302 25.0535Z" stroke="#2E5BF0" stroke-width="16" mask="url(#path-3-inside-2_11_71)"/>
                        <defs>
                        <filter id="filter0_f_11_71" x="9.87646" y="9.91516" width="91.2876" height="91.2487" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_11_71"/>
                        </filter>
                        </defs>
                    </svg>

                        <Text fontSize={sizes.xLarge}>Оценки</Text>
                    </Flexbox>
                    <Flexbox direction="column" gap="3%" align="flex-start">
                    <svg width="88" height="76" viewBox="0 0 88 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_11_57)">
                        <rect x="4" y="4" width="12" height="68" rx="6" fill="#DD86CA"/>
                        </g>
                        <g filter="url(#filter1_f_11_57)">
                        <rect x="28" y="42" width="12" height="30" rx="6" fill="#DD86CA"/>
                        </g>
                        <g filter="url(#filter2_f_11_57)">
                        <rect x="52" y="4" width="12" height="68" rx="6" fill="#DD86CA"/>
                        </g>
                        <rect x="4" y="4" width="12" height="68" rx="6" fill="#DD86CA"/>
                        <rect x="28" y="42" width="12" height="30" rx="6" fill="#DD86CA"/>
                        <rect x="52" y="4" width="12" height="68" rx="6" fill="#DD86CA"/>
                        <rect x="76" y="23" width="12" height="49" rx="6" fill="#4E5671"/>
                        <defs>
                        <filter id="filter0_f_11_57" x="0" y="0" width="20" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_57"/>
                        </filter>
                        <filter id="filter1_f_11_57" x="24" y="38" width="20" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_57"/>
                        </filter>
                        <filter id="filter2_f_11_57" x="48" y="0" width="20" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_57"/>
                        </filter>
                        </defs>
                    </svg>

                        <Text fontSize={sizes.xLarge}>Посещаемость</Text>
                    </Flexbox>
                    <Flexbox direction="column" gap="0" align="flex-start">
                        <p className="gpa">3.6</p>
                        <Text fontSize={sizes.xLarge}>GPA</Text>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </ProfiCardWrapper>
    );
};

export default ProfiCard;   