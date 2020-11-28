import React from 'react';

import styled from 'styled-components/native';
import Avatar from './Avatar';

const user3 = require('../assets/user3.jpg')

const Container = styled.View`
    width: 100%;
    height: 92px;
`

const Row = styled.View`
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`

const ToolBar = () => {
  return (
    <Container>
        <Row>
          <Avatar source={user3}/>
          <Input
            placeholder="O que você está pensando?"
          />
        </Row>
        <Divider/>
    </Container>
  );
}

export default ToolBar;