import React from 'react';
import styled from 'styled-components'
import NavBar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './components/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Board from './components/board';
import { ToastProvider } from 'react-toast-notifications'


const Main = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 !important;
  display: grid;
  grid-template-rows: 5vh 90vh 5vh;  
  grid-template-columns: 4fr 2fr;
  grid-template-areas: "nav nav"
                        "content content"
                        "footer footer";    
`

function App() {
  return (
    <Router>
      <ToastProvider>
        <Main>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/board/:id">
              <Board />
            </Route>
          </Switch>
          <Footer />
        </Main>
      </ToastProvider>
    </Router>
  )
}

export default App
