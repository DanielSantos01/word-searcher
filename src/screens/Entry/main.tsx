import React from 'react';

import {
  Container,
  Description,
  Title,
  Input,
  Button,
  ButtonContent,
  WordsContainer,
  CircleContainer,
  Circle,
  Arrow,
} from './styles';
import { MainProps } from './interfaces';

const mountList = (words: string[]) => {
  const list = words.map((word, index) => (
    <CircleContainer>
      <Circle>
        <Description>{word}</Description>
      </Circle>
      {index + 1 !== words.length && <Arrow />}
    </CircleContainer>
  ));

  return <>{list}</>;
};

const Main: React.FC<MainProps> = ({ handleSearch, words }) => (
  <Container>
    <Title>Word Searcher</Title>
    <Description>
      Find the minimum distance between two words in the book
      <Description inline> Les Miserables</Description>
    </Description>
    <Input placeholder="Source" type="text" className="src" />
    <Input placeholder="Target" type="text" className="tgt" />
    <Button onClick={handleSearch}>
      <ButtonContent>Search</ButtonContent>
    </Button>
    <WordsContainer>
      {mountList(words)}
    </WordsContainer>
  </Container>
);

export default Main;
