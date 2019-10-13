import React from 'react';
import './App.css';
import Item from './components/Item' 
import {Row} from 'reactstrap'

function App() {
  return (
    <Row>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </Row>
  );
}

export default App;
