import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import { Navigation } from './Components/Navigation';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Studies } from './Pages/Studies';
import Works from './Pages/Works';

const AppContainer = styled.div`
  color: ${ props => props.theme.secondary };
`


function App() {
	const [state, setState] = useState("dark");
	const toggleTheme = (mode) => setState(mode);
  return (
    <ThemeProvider theme={theme[state]}>
      <AppContainer className="App">
        <Navigation onToggleTheme={toggleTheme} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/studies" component={Studies} />
          <Route path="/" component={Home} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;