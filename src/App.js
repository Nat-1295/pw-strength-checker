import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import './styles/main.css';
import { Layout, Row, Col } from 'antd';

import { getPwStrength } from './api/PWStrengthAPI';
import TextField from "./components/Field/TextField";
import ScoreBar from './components/Scorebar/ScoreBar';
import Message from "./components/Message/Message";
import { scoreBarData } from "./constant/constant";


const App = () => {
  const [pwData, setPwData] = useState(null);
  const [password, setPassword] = useState('');
  const debouncedPassword = useDebounce(password, 200);

  useEffect(async () => {
    if (!debouncedPassword[0]) {
      setPwData(null);
      return;
    }
    await getPwStrength(debouncedPassword.shift()).then(data => {
      setPwData(data);
    });
  }, [debouncedPassword[0]]);


  return (
    <Layout>
      <Row align="middle">
        <Col className="container" xs={12} align="middle">
          <Col xs={9} style={{ fontSize: '20px', marginBottom: '8%' }}><b>Is your password strong enough?</b></Col>
          <Col xs={20}><TextField setPassword={setPassword} /></Col>
          <Row xs={24} justify="center">
            {scoreBarData.map((item) => <Col xs={4} key={item.id}><ScoreBar {...{ ...pwData, ...item, password }} /></Col>)}
          </Row>
          <Col xs={24}>
            <Message {...pwData} />
          </Col>
        </Col>
      </Row>
    </Layout>
  );
};

export default App;
