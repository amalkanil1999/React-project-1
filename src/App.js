import React, { useState } from 'react'
import './App.css';
import NavBar from './screens/NavBar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './screens/components/Dashboard';
import Mycards from './screens/components/Mycards';
import Savings from './screens/components/Savings';
import Transaction from './screens/components/Transaction';
import Settings from './screens/components/Settings';
import { styled } from 'styled-components';
import Popup from './screens/components/popup/Popup';
function App() {
const [openPopup, setopenPopup] = useState(false);

  return (
    <>
      <Router>
        <Container>
        <NavBar />
        <Routes>
          <Route path='/'  exact element={<Dashboard/>} />
          <Route path='mycards' element={<Mycards/>} />
          <Route path='savings' element={<Savings/>} />
          <Route path='transaction' element={<Transaction/>} />
          <Route path='settings' element={<Settings/>} />
          </Routes>
          </Container>
      </Router>
      
      
    </>
  );
}
const Container = styled.div`
display:flex;`;

export default App;
