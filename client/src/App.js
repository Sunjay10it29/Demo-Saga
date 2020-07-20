import React from 'react';
import './App.css';

import MainPage from './components/pages/mainPage';
import { Container } from "@material-ui/core";
export default class App extends React.Component {
   render() {
      return (
         <Container className="App" maxWidth="xl">
         <MainPage />
         </Container>
     );
    }
}
