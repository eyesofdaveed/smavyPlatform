import React, { useState } from 'react';
import styled from 'styled-components';

import { Flexbox, Text } from '@atoms';
import { colors } from '@base';
import RightVector from '@assets/icons/right.svg';
import LeftVector from '@assets/icons/left.svg';

const TestWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1620px) {
    padding: 20px;
    }
`;

const QuestionsBLock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    width: 16%;
    height: auto;
    background-color: ${colors.taskCardBg};
    border-radius: 11px;
    padding: 32px;
    align-self: flex-start;
`;

const QuestionNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    background-color: ${props => props.isSelected ? '#2E5BF0' : 'transparent'};
    color: ${props => props.isSelected ? '#fff' : '#AFCAD6'};
    border: 3px solid ${props => props.isSelected ? '#2E5BF0' : '#AFCAD6'};
    transition: 0.3s all ease;

    &:hover{
        border: 3px solid #2E5BF0;
        background-color: #2E5BF0;
        color: #fff;
    }
`;

const OneQuestion = styled.div`
    width: 72%;
    background-color: ${colors.taskCardBg};
    border-radius: 11px;
    padding: 60px 56px;
`;

const Variants = styled.div`
    width: 100%;
    margin-top: 50px;
`;

const Char = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 3px solid ${props => props.isSelected ? '#fff' : '#519ABB'};;
    border-radius: 25px;
    color: ${props => props.isSelected ? '#fff' : '#519ABB'};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s all ease;
`;

const Variant = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 60%;
    border-radius: 25px;
    padding: 16px 20px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s all ease;

    background-color: ${props => props.isSelected ? '#25ACE8' : '#fff'};
    color: ${props => props.isSelected ? '#fff' : '#131313'};

    &:hover{
        background-color: #25ACE8;
        color: #fff;
    }

    &:hover ${Char}{
        border: 3px solid #fff;
        color: #fff;
    }
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 15%;
`;

const questionsContent = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 6,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 7,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 8,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 9,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 10,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 11,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 12,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 13,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 14,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
        id: 15,
        question: "Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices. At egestas quis et dolor. Commodo arcu dolor purus vehicula pretium arcu ultrices?",
        answers: ["Option A", "Option B", "Option C", "Option D"]
    },

];

const TestPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleQuestionClick = (index) => {
        setCurrentQuestionIndex(index);
    };

    const handleAnswerSelect = (questionId, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answer
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionsContent.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmitTest = () => {
        console.log(selectedAnswers);
    };

    const currentQuestion = questionsContent[currentQuestionIndex];

    return (
        <TestWrapper>
           <QuestionsBLock>
                {questionsContent.map((content, index) => {
                    const isSelected = index === currentQuestionIndex;
                    return (
                        <QuestionNumber 
                            key={content.id} 
                            isSelected={isSelected}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {content.id}
                        </QuestionNumber>
                    );
                })}
            </QuestionsBLock>
            <OneQuestion>
                <Flexbox align={'up'}>
                    <Text color={'#131313'} fontSize={'20px'} fontWeight={'400'}>{currentQuestion.id}</Text>
                    <Text color={'#131313'} fontSize={'20px'} fontWeight={'400'}>{currentQuestion.question}</Text>
                </Flexbox>
                <Variants>
                    {currentQuestion.answers.map((answer, index) => {   
                        const isSelected = selectedAnswers[currentQuestion.id] === answer;
                        return (
                            <Variant key={index} isSelected={isSelected} onClick={() => handleAnswerSelect(currentQuestion.id, answer)}>
                                <Char isSelected={isSelected}>{String.fromCharCode(65 + index)}</Char> {answer}
                            </Variant>
                        );
                    })}
                </Variants>
                <Buttons>
                    <button onClick={handlePreviousQuestion} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        <img src={LeftVector} alt="Previous" />
                    </button>
                    <button onClick={handleNextQuestion} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        <img src={RightVector} alt="Next" />
                    </button>
                </Buttons>
                {currentQuestionIndex === questionsContent.length - 1 && (
                    <button onClick={handleSubmitTest} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        Submit Test
                    </button>
                )}
            </OneQuestion>
        </TestWrapper>
    );
};

export default TestPage;
