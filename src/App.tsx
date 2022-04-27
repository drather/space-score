import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container';
import ScoreTable from './ScoreTable';

const yourname = prompt('이름을 입력하시오')

function App() {
  return (
      <>
        <Container ContainerTable={undefined}>
          <ScoreTable yourname={yourname}/>
        </Container>
      </>
  );
}

export default App;
