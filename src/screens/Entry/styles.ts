/* eslint-disable no-undef */
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

interface DescriptionProps {
  inline?: boolean;
}

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: rgba(0, 0, 0, 0.7);
  font-size: 25px;
  font-weight: 900;
`;

export const Description = styled.p<DescriptionProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  font-weight: 600;
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  font-style: ${({ inline }) => (inline ? 'italic' : 'normal')};
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  background-color: white;
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 14px;
  border: 1px solid #bdbdbd;
  margin: 5px;
`;

export const Button = styled.div`
  background-color: rgba(0, 0, 200, 0.8);
  width: 350px;
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: 0.3s;
  opacity: 0.6;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    opacity: 0.8;
  }
`;

export const ButtonContent = styled(Description)`
  color: white;
`;

export const WordsContainer = styled.div`
  margin: 20px;
  width: 350px;
  max-height: 400px;
  overflow-y: auto;
`;

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export const Arrow = styled(AiOutlineArrowDown)`
  color: black;
  font-size: 20px;
  margin: 10px 0px;
`;
