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

const ToolBar = () => {
  return (
    <Container>
        <Row>
          <Avatar source={user3}/>
        </Row>
    </Container>
  );
}

export default ToolBar;