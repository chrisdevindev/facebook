import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

import Avatar from "./Avatar";

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 12px;
  color: #747476;
`;

const Post = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`

const Foto = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`

const Feed = () => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/user3.jpg")} />
            <View style={{ paddingLeft: 10 }}>
              <User>Christian Castro</User>
              <Row>
                <Time>9m</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ad laborum ab repellendus 
            a et quo accusamus perspiciatis veniam 
        </Post>
        <Foto 
            source={require('../assets/post1.jpg')}
        />
      </Container>
    </>
  );
};

export default Feed;
