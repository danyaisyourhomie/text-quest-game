import styled from 'styled-components';
import background from './assets/mm.jpg';
import { GameProvider } from './context/GameContext';
import Game from './components/Game';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  return (
    <GameProvider>
      <AppWrapper>
        <AppBackground backgroundPath={background} />
        <Game />
      </AppWrapper>
    </GameProvider>
  );
};

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
  box-sizing: border-box;
  padding: 15px;

  @media not all and (hover: hover) {
    height: var(--app-height);
  }
`;

const AppBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundPath}) #000;
  opacity: 0.08;
`;

export default App;
